import { Provider } from "@supabase/supabase-js"

export abstract class OAuthProvider {
    constructor(protected readonly provider: Provider) {}
    abstract signIn(): Promise<boolean>
}