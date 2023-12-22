import { pagePath } from "~/lib/utils";

const social = {
      name: "Facebook",
      href: "https://www.facebook.com/meals.onwheels.188",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
}

export default function Footer({ footerNavigation, company }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-gray-darkest mt-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="sm:pt-18 mx-auto max-w-7xl px-6 pb-4 pt-12 lg:px-8 lg:pt-20">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="md:mt-1 justify ">
            <div className="flex pt-5 space-x-6 align-baseline md:order-2">
              {" "}
              <img
                className=" w-36 object-contain"
                src="/images/BMOW-logo.jpg"
                alt="Baldwinsville Meals on Wheels logo"
              />
              <div className="pt-3">
                <a
                  key={social.name}
                  href={social.href}
                  className="text-brand hover:text-brand-dark pt-3 pb-3"
                  target="_blank"
                >
                  <span className="text-white text-xl">Follow us on Facebook!</span>
                  <social.icon className="h-24 w-24" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-10 grid grid-cols-3 gap-8 md:mt-0 xl:col-span-3">
              {footerNavigation?.sections?.map((section, index) => (
                <div key={section._key}>
                  {!section.target && (
                    <h3 className="pb-2 text-xl font-bold leading-6 text-white hover:text-brand">
                      {section.title}
                    </h3>
                  )}
                  {section.target ? (
                    <a
                      href={pagePath(section)}
                      className="text-xl font-bold leading-6 text-white hover:text-brand"
                    >
                      {section.target.title}
                    </a>
                  ) : (
                    <ul className="mt-2 space-y-4">
                      {section.links?.map((link, index) => (
                        <li key={link._key}>
                          <a
                            href={pagePath(link)}
                            className="text-xl leading-6 text-gray-300 hover:text-brand"
                          >
                            {link.target?.title || link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 ">
              <h3 className="text-xl pb-3 font-semibold leading-6 text-white">
                Join Our Email List
              </h3>
              <form
                className="mt-18 sm:flex sm:max-w-md"
                action="/mailing-list"
                method="POST"
              >
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand sm:w-64 sm:text-lg sm:leading-6 xl:w-full"
                  placeholder="Enter your email"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-brand px-3 py-2 text-xl font-semibold text-brand-gray-darkest shadow-sm hover:bg-brand-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-16 md:flex md:items-center md:justify-between lg:mt-20">
          <div
            className="-mb-6 columns-2 sm:flex sm:=justify-center sm:space-x-12 text-xl text-brand-gray-light"
            aria-label="Footer"
          >
            <div>
              <p className="leading-6">
                Baldwinsville Meals on Wheels Inc.
              </p>
            </div>
            <div>
              <p className="leading-6">
                |
              </p>
            </div>
            <div>
              <p className="leading-6">
                Baldwinsvillemealsonwheels@yahoo.com
              </p>
            </div>
            <div>
              <p className="leading-6">
                |
              </p>
            </div>
            <div>
              <p className="leading-6">
              76 Canton St., Baldwinsville, NY 13027
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 sm:mt-10 md:flex md:items-center md:justify-between lg:mt-12">
          <p className="mt-8 text-xl leading-5 text-brand-gray-light md:order-1 md:mt-0">
            &copy; {year} Baldwinsville Meals on Wheels Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}