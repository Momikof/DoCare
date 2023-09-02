import { supabase } from "../../supabase";
import { EmailPassword } from "./email-password.interface";

export class SupabaseEmailPasswordProvider implements EmailPassword {
  async signUp(email: string, password: string): Promise<boolean> {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    return !!error;
  }
  async signIn(email: string, password: string): Promise<boolean> {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return !!error;
  }
}
