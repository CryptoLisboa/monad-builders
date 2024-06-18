import { createClient } from "@/utils/supabase/server";
import AuthButtonClientSide from "./AuthButton.client_side";

export default async function AuthButton() {
  const supabase = createClient();

  const dataGetUser = await supabase.auth.getUser();

  const user = dataGetUser?.data?.user;

  return <AuthButtonClientSide user={user} />;
}
