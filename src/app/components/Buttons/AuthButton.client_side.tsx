"use client";
import { signInDirect } from "@/services/supabase";
import { createClient } from "@/utils/supabase/client";
import { Avatar, Button } from "@nextui-org/react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function AuthButtonClientSide({ user }: { user: User | null }) {
  const router = useRouter();
  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return user ? (
    <div className="flex items-center gap-4">
      <span className="flex flex-row items-center gap-x-2">
        <Avatar src={user?.user_metadata?.avatar_url} alt="avatar" />
        <span>Hey, {user?.user_metadata?.custom_claims?.global_name} !</span>
      </span>
      <Button
        onClick={signOut}
        className="py-2 px-4 rounded-md"
        color="secondary"
      >
        Logout
      </Button>
    </div>
  ) : (
    <Button
      onClick={signInDirect}
      className="py-2 px-3 flex rounded-md"
      color="secondary"
    >
      Login
    </Button>
  );
}
