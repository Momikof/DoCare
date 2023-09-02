import { EmailPassword } from "../../auth/emailPassword/email-password.interface";
import { SupabaseEmailPasswordProvider } from "../../auth/emailPassword/supabase.email-password-provider";
import { OAuthProvider } from "../../auth/oauth/oauth-provider.interface";
import { SupabaseOAuthProvider } from "../../auth/oauth/supabase.oauth-provider";
import { SmsProvider } from "../../auth/sms/sms-provider.interface";
import { SupabaseSmsProvider } from "../../auth/sms/supabase.sms-provider";
import { supabase } from "../../supabase";
import { AuthService } from "./auth-service.interface";

export class SupabaseAuthService extends AuthService {
  constructor() {
    super(
      new SupabaseOAuthProvider("google"),
      new SupabaseSmsProvider(),
      new SupabaseEmailPasswordProvider()
    );
  }
  async isLoggedIn(): Promise<boolean> {
    return !!(await supabase.auth.getUser()).data;
  }

  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  }
}
