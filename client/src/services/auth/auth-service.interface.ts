import { EmailPassword } from "../../auth/emailPassword/email-password.interface";
import { OAuthProvider } from "../../auth/oauth/oauth-provider.interface";
import { SmsProvider } from "../../auth/sms/sms-provider.interface";

export abstract class AuthService {
  constructor(
    public readonly google: OAuthProvider,
    public readonly sms: SmsProvider,
    public readonly emailPassword: EmailPassword
  ) {}

  abstract isLoggedIn(): Promise<boolean>;
  abstract signOut(): Promise<void>;
}
