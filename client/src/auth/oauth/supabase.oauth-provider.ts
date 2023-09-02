import { supabase } from "../../supabase";
import { OAuthProvider } from "./oauth-provider.interface";

export class SupabaseOAuthProvider extends OAuthProvider {
  async signIn(): Promise<boolean> {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: this.provider,
    });
    const user = await supabase.auth.getUser();
    console.log(user); 
    return !error;
  }
}
