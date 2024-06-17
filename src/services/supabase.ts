import { createClient } from "@/utils/supabase/client";

export const signInDirect = async () => {
  const supabase = createClient();

  await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`,
    },
  });
};
