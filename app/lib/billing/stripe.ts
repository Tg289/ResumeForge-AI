// app/lib/billing/stripe.ts

export async function createCheckoutSession(plan: "PRO" | "ENTERPRISE") {
  const res = await fetch("/api/stripe/create-checkout", {
    method: "POST",
    body: JSON.stringify({ plan }),
  });

  return res.json();
}