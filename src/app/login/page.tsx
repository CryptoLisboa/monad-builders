"use client";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default function Login() {
  const signInDirect = async () => {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `http://localhost:3000/api/auth/callback`,
      },
    });

    console.log("login: ", JSON.stringify(data, null, 2));

    if (data.url) {
      redirect(data.url); // use the redirect API for your server framework
    } else if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mt-20">
      <button
        onClick={signInDirect}
        className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
      >
        Sign In
      </button>
    </div>
  );
}
