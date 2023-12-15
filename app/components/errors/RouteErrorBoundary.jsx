import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { NotFound, ServerError } from ".";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  return <ServerError />;
}