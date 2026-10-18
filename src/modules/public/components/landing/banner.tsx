import { ArrowRightIcon } from "lucide-react";

export const Banner = () => {
    return (
        <div className="w-full layout-container space-y-6 py-16 max-sm:py-16 bg-primary-600 flex items-center justify-center flex-col">
            <h1 className="heading-1 max-md:heading-2 max-md:text-neutral-0 text-neutral-0">Are you a vendor or venue owner?</h1>
            <p className="prose-body text-primary-50 text-center">Join as a service provider to list your business, receive inquiries, and get booked for events.</p>

            <button className="button-secondary">List your Business <ArrowRightIcon /></button>
        </div>
    );
};
