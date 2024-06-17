import { createClient } from "@/utils/supabase/server";
import AuthButtonClientSide from "./AuthButton.client_side";
import React, { Suspense } from "react";

export default async function AuthButton() {
  const supabase = createClient();

  const dataGetUser = await supabase.auth.getUser();
  console.log("dataGetUser: ", JSON.stringify(dataGetUser, null, 2));
  const user = dataGetUser?.data?.user;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthButtonClientSide user={user} />
    </Suspense>
  );
}
