import { pagePath } from "~/lib/utils";

export default function Footer({ footerNavigation }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 mt-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="sm:pt-18 mx-auto max-w-7xl px-6 pb-8 pt-12 lg:px-8 lg:pt-24">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="md:mt-1">
            <div>
              {" "}
              <img
                className=" w-36 object-contain md:w-52"
                src="/images/BMOW-logo.png"
                alt="Baldwinsville Meals on Wheels logo"
              />
            </div>
            <div className="flex pt-5 space-x-6 align-baseline md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=" text-brand hover:text-brand-dark"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="mt-10 ">
              <h3 className="text-md font-semibold leading-6 text-white">
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
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder="Enter your email"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-brand px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-brand-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="mt-10 grid grid-cols-2 gap-8 md:mt-0 xl:col-span-2">
              {footerNavigation?.sections?.map((section, index) => (
                <div key={section._key}>
                  {!section.target && (
                    <h3 className="pb-2 text-md font-bold leading-6 text-white">
                      {section.title}
                    </h3>
                  )}
                  {section.target ? (
                    <a
                      href={pagePath(section)}
                      className="text-sm font-bold leading-6 text-white"
                    >
                      {section.target.title}
                    </a>
                  ) : (
                    <ul className="mt-2 space-y-4">
                      {section.links?.map((link, index) => (
                        <li key={link._key}>
                          <a
                            href={pagePath(link)}
                            className="text-sm leading-6 text-gray-300 hover:text-brand"
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
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-16 md:flex md:items-center md:justify-between lg:mt-20">
          <div
            className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
          >
            <div>
              <p className="text-sm leading-6 text-gray-400">{company.name}</p>
            </div>
            <div>
              <p className="text-sm leading-6 text-gray-400">|</p>
            </div>
            <div>
              <p className="text-sm leading-6 text-gray-400">{company.email}</p>
            </div>
            <div>
              <p className="text-sm leading-6 text-gray-400">|</p>
            </div>
            <div>
              <p className="text-sm leading-6 text-gray-400">
                {company.address}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 sm:mt-10 md:flex md:items-center md:justify-between lg:mt-12">
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {year} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
