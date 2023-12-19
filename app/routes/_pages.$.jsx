import { throwNotFound } from "~/lib/redirects";

export { ErrorBoundary } from "~/components/errors";

export async function loader({ params }) {
  // this is a fallback since no routes match
  throwNotFound(params["*"]);
}