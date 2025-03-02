// src/services/auth.ts
import { supabase } from "../supabaseClient";

export const SignUp = async (
  email: string,
  username: string,
  password: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    options: {
      // ユーザー情報
      data: {
        user_name: 'fuka',
      },
    },
    password,
  });
  return { data, error };
};

export const SignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};
