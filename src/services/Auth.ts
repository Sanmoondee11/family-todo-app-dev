// // src/services/auth.ts
// import { supabase } from "../supabaseClient";

// export const signUp = async (email: string, password: string) => {
//   const { data, error } = await supabase.auth.signUp({
//     email: "",
//     password: "",
//   });
//   console.error(error);
//   console.log(data);
//   return { data, error };
  
// };

// export const signIn = async (email: string, password: string) => {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });
//   return { data, error };
// };
