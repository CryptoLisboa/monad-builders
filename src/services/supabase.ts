import { createClient } from "@/utils/supabase/client";

export const signInDirect = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `http://localhost:3000/api/auth/callback`,
    },
  });
};
