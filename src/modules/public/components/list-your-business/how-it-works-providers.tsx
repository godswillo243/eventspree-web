const STEPS = [
  {
    number: "1",
    title: "Create Your Profile",
    description: "Tell us about your business — services, pricing, and portfolio photos.",
  },
  {
    number: "2",
    title: "Get Approved",
    description: "Our team reviews your profile to keep the marketplace trusted and high-quality.",
  },
  {
    number: "3",
    title: "Start Receiving Inquiries",
    description: "Organizers reach out, you send quotes, and bookings start rolling in.",
  },
];

export function HowItWorksProviders() {
  return (
    <section className="bg-neutral-50">
      <div className="layout-container py-16! md:py-20!">
        <h2 className="heading-2 text-center mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-3">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary-500 text-neutral-0 heading-3">
                {step.number}
              </div>
              <h3 className="heading-3">{step.title}</h3>
              <p className="prose-sm max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
