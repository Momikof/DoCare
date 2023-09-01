import {supabase } from '../utils/supabase'
export const signUpUser = async (name: string, password: string) => {
  const { data, error } = await supabase
    .from("users")
    .insert([{ name, password }])
    .select();
    
  return {data, error}
};
