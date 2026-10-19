import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  showHomeIcon?: boolean;
  className?: string;
};

export function Breadcrumbs({ items, showHomeIcon = true, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center flex-wrap gap-1.5">
        {showHomeIcon && (
          <>
            <li>
              <Link
                to="/"
                className="flex items-center text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
                aria-label="Home"
              >
                <Home className="size-4" />
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5 text-neutral-300" />
            </li>
          </>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={index}>
              <li
                className={
                  isLast
                    ? "max-w-50 truncate text-body-sm font-medium text-neutral-800"
                    : "max-w-40 truncate"
                }
              >
                {item.to && !isLast ? (
                  <Link
                    to={item.to}
                    className="text-body-sm text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
                )}
              </li>

              {!isLast && (
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5 text-neutral-300" />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
