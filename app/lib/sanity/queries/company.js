import { getClient } from "../getClient";

const companyQuery = (name) => {
  return `//groq
      *[_type == "company"&&name == "${name}"][0] {
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

export async function getCompany() {
  const company = await getClient().fetch(companyQuery("company"));

  return { company };
}
