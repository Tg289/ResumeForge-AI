export type Plan = "FREE" | "PRO" | "ENTERPRISE";

export const planLimits = {
  FREE: {
    resumesPerMonth: 3,
    aiScore: false,
  },
  PRO: {
    resumesPerMonth: 20,
    aiScore: true,
  },
  ENTERPRISE: {
    resumesPerMonth: 9999,
    aiScore: true,
  },
};