import { supabase } from "../../supabase";
import { SmsProvider } from "./sms-provider.interface";
import _ from 'lodash';

export class SupabaseSmsProvider implements SmsProvider {
  async signIn(phoneNumber: string): Promise<boolean> {
    const { error } = await supabase.auth.signInWithOtp({
      phone: phoneNumber,
    });

    return _.isEmpty(error);
  }

  async verify(phoneNumber: string, codeFromSms: string): Promise<boolean> {
    const { error } = await supabase.auth.verifyOtp({
      phone: phoneNumber,
      token: codeFromSms,
      type: "sms",
    });

    return _.isEmpty(error);
  }
}
