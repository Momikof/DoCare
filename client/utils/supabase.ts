import { createClient } from "@supabase/supabase-js";
import 'react-native-url-polyfill/auto'
import { Database } from "../types/database.types";

const supabaseUrl = process.env.SUPABASE_URL || "TODO: ADD OUR SUPABASE URL";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "TODO: ADD OUR SUPABASE ANON KEY";

const supabase = createClient<Database>(supabaseUrl, supabaseKey);
export { supabase };    
