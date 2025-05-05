"use server";

import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";

export async function signInWithGoogle() {
  const supabase = await createClient();
  const url = process.env.NEXT_PUBLIC_URL;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${url}/api/auth/callback`,
    },
  });

  if (error) {
    redirect("/error");
  }

  redirect(data.url);
}
