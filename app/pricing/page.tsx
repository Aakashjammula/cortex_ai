"use client"

import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Zap, Crown } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    icon: Sparkles,
    features: [
      "Basic portfolio builder",
      "5 projects maximum",
      "Basic skill analysis",
      "Job matching (10/month)",
      "Community support",
    ],
    cta: "Current Plan",
    disabled: true,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For serious career builders",
    icon: Zap,
    popular: true,
    features: [
      "Advanced AI portfolio builder",
      "Unlimited projects",
      "Advanced skill analysis with AI insights",
      "Unlimited job matching",
      "AI resume optimization",
      "Interview prep with AI mock interviews",
      "Priority support",
      "Custom domain for portfolio",
    ],
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For teams and organizations",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Team management (up to 50 users)",
      "Advanced analytics dashboard",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
]

export default function PricingPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Unlock the full power of AI-driven career development. Upgrade anytime, cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-slate-900/50 backdrop-blur-xl border-slate-800/50 transition-all hover:border-blue-500/50 ${
                plan.popular ? "ring-2 ring-blue-500/50 shadow-2xl shadow-blue-500/20 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-xs font-semibold text-white shadow-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      plan.popular
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50"
                        : "bg-slate-800"
                    }`}
                  >
                    <plan.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <CardDescription className="text-slate-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                      : "bg-slate-800 hover:bg-slate-700"
                  } transition-all`}
                  disabled={plan.disabled}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ or additional info */}
        <div className="mt-16 text-center">
          <p className="text-slate-400">All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </AppLayout>
  )
}
