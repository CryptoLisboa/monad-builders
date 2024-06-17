import { createClient } from "@/utils/supabase/client";

export const signInDirect = async () => {
  const supabase = createClient();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not set");
  } else {
    console.log("baseUrl: ", baseUrl);
    debugger;
  }

  await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `${baseUrl}/api/auth/callback`,
    },
  });
};
