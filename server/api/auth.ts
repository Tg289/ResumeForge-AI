import { supabase } from "../lib/supabase";

export async function login(req, res) {
  const { email } = req.body;

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!data) {
    await supabase.from("users").insert({
      id: crypto.randomUUID(),
      email,
      plan: "FREE",
    });
  }

  res.json({ success: true });
}