import { getClient } from "../getClient";

const navQuery = (name) => {
  return `//groq
      *[_type == "navigation"&&name == "${name}"][0] {
      ...,
      sections[]{
        ...,
        target->{title, slug, _id},
        links[]{
          ...,
          target->{title, internalTitle, slug, _id},
          children[]{
            ...,
            target->{title, internalTitle, slug, _id}
          }
        }
      }
    }`;
};

export async function getNavigation() {
  const mainNavigation = await getClient().fetch(navQuery("mainNavigation"));
  const footerNavigation = await getClient().fetch(
    navQuery("footerNavigation"),
  );

  return { mainNavigation, footerNavigation };
}
