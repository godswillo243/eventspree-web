// apps/web/src/components/landing/BenefitsSection.tsx
import { Megaphone, ShieldCheck, CalendarCheck } from "lucide-react";

const BENEFITS = [
  {
    icon: Megaphone,
    title: "Reach More Customers",
    description:
      "Get discovered by organizers actively planning events in your city, every single day.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Deposits and balances are handled through secure, trusted payment processing — no chasing invoices.",
  },
  {
    icon: CalendarCheck,
    title: "Manage Bookings Easily",
    description:
      "Track inquiries, quotes, and bookings all in one dashboard — no spreadsheets, no missed messages.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-neutral-0">
      <div className="layout-container py-16! md:py-20!">
        <h2 className="heading-2 text-center mb-12">Why List With Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center gap-3">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary-50 text-primary-600">
                <benefit.icon className="size-6" />
              </div>
              <h3 className="heading-3">{benefit.title}</h3>
              <p className="prose-sm max-w-xs">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
