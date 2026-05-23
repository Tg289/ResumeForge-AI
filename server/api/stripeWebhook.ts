import { Request, Response } from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function stripeWebhook(req: Request, res: Response) {
  const sig = req.headers["stripe-signature"] as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err}`);
  }

  // ✅ MAIN LOGIC
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;

    const customerEmail = session.customer_email;

    console.log("Payment successful:", customerEmail);

    // 👉 HERE YOU UPDATE USER PLAN IN DB
    // supabase.from('users').update({ plan: 'PRO' })
  }

  res.json({ received: true });
}