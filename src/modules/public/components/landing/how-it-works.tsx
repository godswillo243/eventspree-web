const steps = {
  '1': {
    title: 'Create Your Event',
    description:
      "Tell us what you're planning ? event type, date, guest count, and budget. Takes less than 2 minutes.",
  },
  '2': {
    title: 'Compare and Negotiate',
    description:
      'Browse verified vendors and venues, compare prices, chat directly, and negotiate the best deal for your event.',
  },
  '3': {
    title: 'Book and Pay Securely',
    description:
      'Confirm your booking with a protected deposit. Your payment stays secure until the job is done.',
  },
};

export const HowItWorks = () => {
  return (
    <div className="layout-container w-full">
      <h2 className="heading-2">How it works</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-3">
        { Object.keys(steps).map((key) => {
          const { title, description } = steps[key as keyof typeof steps];
          return (
            <div
              key={ key }
              className="max-w-96 flex flex-col items-center justify-center"
            >
              <div className="bg-primary-100 text-primary-700 size-8 rounded-full flex items-center justify-center text-xs font-bold">
                { key }
              </div>
              <h3 className="heading-3">{ title }</h3>
              <p className="text-center text-neutral-600 text-body-sm">
                { description }
              </p>
            </div>
          );
        }) }
      </div>
    </div>
  );
};
