/* This example requires Tailwind CSS v2.0+ */
import { classNames, pagePath } from "~/lib/utils";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Highlight from "~/components/Highlight";

export default function Header({ mainNavigation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-brand-gray-darkest text-white text-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Baldwinsville Meals on Wheels</span>
            <img
              className="h-24 w-auto"
              src="/images/BMOW-logo.jpg"
              alt="Baldwinsville Meals on Wheels logo"
            />
          </a>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          {mainNavigation?.sections?.map((section) => (
            <div key={section._key}>
              {section.target || section.path ? (
                <a
                  href={pagePath(section)}
                  className="flex items-center text-xl font-semibold leading-6 text-white p-2 hover:text-brand hover:bg-brand-gray-darkest focus:outline-none focus:ring focus:ring-brand rounded-md"
                >
                  {section.target?.title || section.title}
                </a>
              ) : (
                <Popover className="relative">
                  <Popover.Button className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-white hover:text-brand hover:bg-brand-gray-darkest focus:outline-none focus:ring focus:ring-brand rounded-md p-2">
                    {section.target?.title || section.title}
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[11rem] overflow-hidden rounded-3xl bg-brand-gray-medium shadow-lg ring-1 ring-stone-900/5">
                      <div className="p-4">
                        {section.links.map((link, index) => (
                          <div
                            key={index}
                            className="group relative flex gap-x-6 rounded-lg p-4 text-xl leading-6 hover:bg-brand-gray-dark hover:text-brand"
                          >
                            <div className="flex-auto">
                              <a
                                href={pagePath(link)}
                                className="white block font-semibold"
                              >
                                {link.target?.title ||
                                  link.title ||
                                  link.target?.internalTitle}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              )}
            </div>
          ))}
        </Popover.Group>
        <div className="flex flex-1 justify-end">
          <div className="flex items-center gap-x-1">
            <a
              href="/donate"
              className="rounded-md bg-brand px-3 py-2 text-xl font-semibold text-gray-900 shadow-sm hover:bg-brand-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
            >
              Donate
            </a>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-white lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-brand-gray-darkest overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Baldwinsville Meals on Wheels</span>
              <img
                className="h-20 w-auto "
                src="/images/BMOW-logo.jpg"
                alt="Baldwinsville Meals on Wheels logo"
              />
            </a>
            <div className="flex flex-1 justify-end">
              <div className=" flex flex-1 items-center justify-end text-white gap-x-1">
                <a
                  href="/donate"
                  className=" h-12 rounded-md bg-brand px-3 py-2 text-xl font-semibold text-gray-900 shadow-sm hover:bg-brand-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
                >
                  Donate
                </a>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-10 w-10" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mainNavigation?.sections?.map((section) => (
                  <div key={section._key}>
                    {section.target || section.path ? (
                      <a
                        href={pagePath(section)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white hover:bg-brand-gray-dark hover:text-brand"
                      >
                        {section.target?.title || section.title}
                      </a>
                    ) : (
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-semibold leading-7 text-white hover:bg-brand-gray-dark hover:text-brand">
                              {section.target?.title || section.title}
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none",
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {section.links.map((link, index) => (
                                <Disclosure.Button
                                  key={index}
                                  as="a"
                                  href={pagePath(link)}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-xl font-semibold leading-7 text-white hover:bg-brand-gray-dark hover:text-brand"
                                >
                                  {link.target?.title ||
                                    link.title ||
                                    link.target?.internalTitle}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
