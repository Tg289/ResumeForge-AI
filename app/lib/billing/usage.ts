export function canUseFeature(plan: Plan, feature: "aiScore") {
  if (plan === "ENTERPRISE") return true;
  if (plan === "PRO") return true;
  return false;
}