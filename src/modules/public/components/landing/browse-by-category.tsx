import { VENDOR_CATEGORIES } from "#/mocks/data.ts";

export const BrowseByCategory = () => {
    return (
        <section className="layout-container w-full space-y-4">
            <h2 className="heading-2">Browse by Category</h2>
            <div className="w-full flex items-center justify-between max-md:justify-start flex-wrap gap-6">
                { VENDOR_CATEGORIES.slice(0, 5).map((cat) => {
                    return (
                        <div key={ cat } className="px-6 py-3 rounded-md bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center">
                            <p className="text-caption">{ cat }</p>
                        </div>
                    );
                }) }
            </div>
        </section>
    );
};
