import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Breadcrumbs({ links, className }) {
  // links  [{:title, :path, :current},...]
  return (
    <nav className={clsx("flex", className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {links.map(({ title, path, current }, index) => (
          <li key={index}>
            <div className="flex items-center">
              {index !== 0 && (
                <ChevronRightIcon
                  className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              )}
              <a
                href={path}
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={current ? "page" : undefined}
              >
                {title}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}