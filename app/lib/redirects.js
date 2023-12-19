import { redirect } from "@remix-run/node";
// write a funtion that will see if the slug exists in an obect like [old_path: "new_path"]
export function throwNotFound(slug) {
  throwIfMatchesRedirectRules(slug);

  throw new Response("Not found", {
    status: 404,
    statusText: "Not found",
  });
}
const throwIfMatchesRedirectRules = (slug) => {
  if (!slug.startsWith("/")) {
    slug = "/" + slug;
  }

  if (redirectRules[slug]) {
    throw redirect(redirectRules[slug], 302);
  }
};

const redirectRules = {
  "/index.php": "/",
  "/aboutus": "/about-us",
  "/aboutus/privacy.php": "/privacy",
};

