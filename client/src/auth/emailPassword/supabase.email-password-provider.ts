import { supabase } from "../../supabase";
import { EmailPassword } from "./email-password.interface";
import _ from 'lodash';

export class SupabaseEmailPasswordProvider implements EmailPassword {
  async signUp(email: string, password: string): Promise<boolean> {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    return _.isEmpty(error);
  }
  async signIn(email: string, password: string): Promise<boolean> {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return _.isEmpty(error);
  }
}
