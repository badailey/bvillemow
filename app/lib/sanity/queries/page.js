import { getClient } from "../getClient";

export async function getPagePaths() {
  const query = `*[_type == "page"]{
    _updatedAt,
    "path": slug.current,
  }`;
  const pagePaths = await getClient().fetch(query);

  return { pagePaths };
}

export async function getPage(slug) {
  const blockContentFields = `
                _type == "image" => {
                  ...,
                  asset->
                },
                markDefs[]{
                ...,
                _type == "internalLink" => {
                  "targetObject": @.reference->
                },
              }`;
  const query = `*[_type == "page" && slug.current == "${slug}"] | order(_createdAt asc)[0]{
    _id, internalTitle, title, slug, mainImage, metaDescription,
    sections[]{
      ...,
      _type == "teamMembers" => {
        teamMemberList[]{
          ...,
          image{
            asset->
          }
        }
      },
      _type == "hero" => {
          ...,
          image{
            ...,
            asset->
          },
          cta{
            ...,
            target->{title, slug, _id},
          }
      },
      _type == "content" => {
          content[]{
            ...,
            ${blockContentFields}
          },
      },
      _type == "twoColumnContent" => {
        ...,
        columns[]{
          _type == "inlineImage" => {
            ...,
            image{
              ...,
              _type == "image" => {
                ...,
                asset->
              },
            },
          },
          _type == "content" => {
            ...,
            content[]{
              ...,
              ${blockContentFields}
            },
          },
        }
      },
      _type == "testimonials" => {
        testimonialList[]{
          ...,
          endorser->{
            ...,
            image{
            asset->
            },
          },
        }
      },
    }
  }`;
  const pageContent = await getClient().fetch(query);
  // console.log(query);
  return { pageContent };
}
