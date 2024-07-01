import { createClient } from "@/utils/supabase/client";

export const signInDirect = async () => {
  const supabase = createClient();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `${baseUrl}/api/auth/callback`,
      scopes: "connections email guilds guilds.members.read identify",
    },
  });
};
// "connections email guilds guilds.members.read identify relationships.read",
