import { stripe } from "../lib/stripe";

export async function createCheckout(req, res) {
  const { plan } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${plan} Plan`,
          },
          unit_amount: plan === "PRO" ? 999 : 1999,
          recurring: {
            interval: "month",
          },
        },
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ url: session.url });
}