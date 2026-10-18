import type { VendorProfile, Venue } from '#/mocks/data.ts';
import { getFeaturedVendors, getFeaturedVenues } from '#/mocks/data';
import { ArrowRightIcon } from "lucide-react";

const featuredListings: (Venue | VendorProfile)[] = [
    ...getFeaturedVendors(),
    ...getFeaturedVenues(),
];

export const Featured = () => {
    return (
        <div className="layout-container space-y-4 w-full">
            <h2 className="heading-2">Featured Vendors and Venues</h2>
            <div className="overflow-x-auto flex items-start justify-start gap-6 w-full h-fit  snap-x snap-mandatory">
                { featuredListings.slice(0, 2).map((listing) => {
                    return (
                        <div key={ listing.id } className="w-80 shrink-0 shadow-sm hover:shadow-lg  snap-center bg-neutral-0 rounded-lg">
                            <img
                                src={ listing.portfolioImages[0] }
                                className="w-full h-auto aspect-video bg-neutral-400 rounded-t-lg"
                            />
                            <div className="p-3 space-y-3">
                                <h3 className="heading-3">
                                    { 'name' in listing ? listing.name : listing.businessName }
                                </h3>
                                <div className="flex items-center flex-wrap gap-2">
                                    { ('categories' in listing
                                        ? listing.categories
                                        : listing.amenities
                                    ).map((value, index, array) => {
                                        const isLast = array.length - 1 === index;
                                        return <p key={ value } className="prose-sm">{ value } { !isLast && "•" } </p>;
                                    }) }
                                </div>
                                <p className="text-body-sm font-medium">{ listing.city } </p>
                            </div>
                        </div>
                    );
                }) }
                <button className="button-secondary shrink-0">Browse more listings <ArrowRightIcon /></button>
            </div>
        </div>
    );
};
