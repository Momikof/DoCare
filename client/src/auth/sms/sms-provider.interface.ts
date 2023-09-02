export interface SmsProvider {
    signIn(phoneNumber: string): Promise<boolean>;
    verify(phoneNumber: string, codeFromSms: string): Promise<boolean>;
}