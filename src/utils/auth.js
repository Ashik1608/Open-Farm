import { supabase } from "../lib/initSupabase";

export const checkUserLoggedIn = async () => {
  const { data, error } = await supabase.auth.getSession();
  return { data, error };
};
