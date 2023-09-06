import { openAuthSessionAsync } from "expo-web-browser";
import { supabase } from "../../supabase";
import { OAuthProvider } from "./oauth-provider.interface";
import * as Linking from "expo-linking";

type Tokens = {
  accessToken: string;
  refreshToken: string;
}

export class SupabaseOAuthProvider extends OAuthProvider {
  async signIn(): Promise<boolean> {
    const redirectUrl = Linking.createURL("/?");
    const {
      data: { url },
    } = await supabase.auth.signInWithOAuth({
      provider: this.provider,
      options: {
        redirectTo: redirectUrl,
      },
    });

    if (!url) {
      return false;
    }

    const response = await openAuthSessionAsync(url, redirectUrl, {
      showInRecents: true,
    });

    if (response.type !== "success") {
      return false;
    }

    const { accessToken, refreshToken } = this.extractTokens(response.url);
    await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    return true;
  }

  async logout() {
    await supabase.auth.signOut({ scope: "global" });
  }

  private extractTokens(url: string): Tokens {
    const splitedUrlParams = url
      .split("&")
      .map((param) => param.split("="))
      .filter(([key]) => key in ["access_token", "refresh_token"]);
    const tokens = splitedUrlParams.reduce(
      (acc: Record<string, string>, params) => {
        const [key, value] = params;
        acc[key] = value;
        return acc;
      },
      {}
    );

    return {
      accessToken: tokens["access_token"],
      refreshToken: tokens["refresh_token"],
    };
  }
}
