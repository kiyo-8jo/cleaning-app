import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_ANON_KEY || "",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, options);
            }
          } catch (error) {
            console.error("Failed to set cookies in Server Component:", error);
            throw new Error(
              "Failed to set cookies in Server Component. This may indicate an issue with server-side rendering.",
            );
          }
        },
      },
    },
  );
}
