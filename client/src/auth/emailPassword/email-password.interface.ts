export interface EmailPassword {
    signUp(email: string, password: string): Promise<boolean>;
    signIn(email: string, password:  string): Promise<boolean>;
}