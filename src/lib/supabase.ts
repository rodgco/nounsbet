import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env);

const supabaseUrl = process.env.SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.SVELTE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
