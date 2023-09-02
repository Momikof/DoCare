import { EmailPassword } from "../../auth/emailPassword/email-password.interface";
import { OAuthProvider } from "../../auth/oauth/oauth-provider.interface";
import { SmsProvider } from "../../auth/sms/sms-provider.interface";

export abstract class AuthService {
  constructor(
    protected readonly google: OAuthProvider,
    protected readonly sms: SmsProvider,
    protected readonly emailPassword: EmailPassword
  ) {}

  abstract isLoggedIn(): Promise<boolean>;
  abstract signOut(): Promise<void>;
}
