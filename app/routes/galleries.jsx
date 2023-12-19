import React from "react";
import { Disclosure } from "@headlessui/react";
import { useLoaderData, Outlet, NavLink } from "@remix-run/react";
import { getPage, getPhotoGalleriesData } from "~/lib/sanity/queries";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { throwNotFound } from "~/lib/redirects";

export async function loader({ params }) {
  const { photoGalleriesData } = await getPhotoGalleriesData();
  const { pageContent } = await getPage("galleries");

  if (!photoGalleriesData || photoGalleriesData.length === 0) {
    throwNotFound(`/galleries/${params["*"]}`);
  }
  return {
    pageContent,
    photoGalleriesData,
  };
}

const SideNav = ({ photoGalleriesData, onClick }) => (
  <>
    {Object.keys(photoGalleriesData)
      .reverse()
      .map((year, index) => (
        <Disclosure
          as="div"
          key={year}
          defaultOpen={index == 0}
          className="mt-2 py-1"
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{year}</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-4">
                <ul className="space-y-4 pb-2 list-disc text-sm font-medium text-gray-900">
                  {photoGalleriesData[year].map((gallery) => (
                    <li
                      key={gallery._id}
                      className="ml-3 text-xs text-gray-600 hover:text-brand-dark"
                    >
                      <NavLink
                        onClick={onClick}
                        to={`/galleries/${gallery.slug}`}
                        className={({ isActive }) =>
                          isActive ? "text-brand-dark" : ""
                        }
                      >
                        {gallery.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
  </>
);
export default function Index() {
  const { photoGalleriesData, pageContent } = useLoaderData();

  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <h1 className="block py-8 text-center text-3xl font-extrabold leading-8 tracking-tight text-green-800 sm:text-4xl">
        {pageContent.title}
      </h1>
      <div className="lg:hidden">
        <aside className="rounded-md border bg-white p-5">
          <Disclosure as="div" defaultOpen={false}>
            {({ open, close }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-4 text-sm text-gray-700 hover:text-gray-500">
                    <span className="text-lg font-semibold text-gray-700">
                      Galleries
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <ChevronDownIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel>
                  <SideNav
                    onClick={close}
                    photoGalleriesData={photoGalleriesData}
                    className="mt-12"
                  />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </aside>
      </div>
      <div className="grid py-8 grid-cols-1 gap-x-8 gap-y-1 lg:grid-cols-4">
        <div className="hidden lg:block">
          <aside className="rounded-md border bg-white p-5">
            <h3 className="font-large mb-6 text-gray-800">Galleries</h3>
            <SideNav photoGalleriesData={photoGalleriesData} />
          </aside>
        </div>
        <div className="lg:col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}