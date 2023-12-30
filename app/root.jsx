import React, { useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  useLoaderData,
} from "@remix-run/react";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { getNavigation } from "~/lib/sanity/queries";
import { NotFound, ServerError } from "./components/errors";

import styles from "./tailwind.css";

export const meta = () => [
  {
    title: "Baldwinsville Meals on Wheels",
  },
];

export async function loader({ request }) {
  const { mainNavigation, footerNavigation } = await getNavigation();
  //TODO what should we do if there is no nav data or an error from sanity?

  return { mainNavigation, footerNavigation };
}

function App() {
  const { mainNavigation, footerNavigation } = useLoaderData();

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header mainNavigation={mainNavigation} />
        <Outlet />
        <Footer footerNavigation={footerNavigation} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header />
        <main className="conic-to-tl  bg-gradient-to-tl from-white via-yellow-50 to-white">
          {isRouteErrorResponse(error) &&
            (error.status === 404 ? <NotFound /> : <ServerError />)}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}

export default (App);