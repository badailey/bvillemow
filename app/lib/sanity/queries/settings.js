import { getClient } from "../getClient";

export async function getSiteConfig() {
  const siteConfig = await getClient().fetch(` *[_type == 'siteConfig'][0] `);

  return { siteConfig };
}
