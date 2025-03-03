// src/services/auth.ts
import { supabase } from "../supabaseClient";

export const signUp = async (
  email: string,
  // username: string,
  password: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    options: {
      // ユーザー情報
      data: {
        username: "fuka",
      },
    },
    password,
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};
