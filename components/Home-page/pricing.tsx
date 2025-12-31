import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "Up to 50 tasks",
        "Basic reminders",
        "1 device sync",
      ],
      cta: "Get Started",
      variant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$9",
      description: "For power users and teams",
      features: [
        "Unlimited tasks",
        "Advanced reminders",
        "Unlimited device sync",
        "Team collaboration",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
      variant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$29",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={plan.popular ? "border-primary border-2 relative" : ""}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.variant} className="w-full">
                  <Link href="/auth/sign-up">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

