// // src/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

import type { Database } from "./types/supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // SupabaseのURL
const supabaseKey =import.meta.env.VITE_SUPABASE_KEY; // APIキー

  // supabaseに接続するためにcreateClientを使う
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

