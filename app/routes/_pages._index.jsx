import { useLoaderData } from "@remix-run/react";
import { getPage } from "~/lib/sanity/queries";
import { Section } from "~/components/sections";

export async function loader() {
  const { pageContent } = await getPage("/");

  return { pageContent };
}

export const meta = ({ data }) => {
  if (!data?.pageContent) {
    return [
      { title: "Page not found | Syracuse Poster Project" },
      {
        name: "description",
        content: "We could not find the page you're looking for",
      },
    ];
  }
  const { pageContent } = data;

  return [
    { title: "Syracuse Poster Project" },
    { name: "description", content: String(pageContent.metaDescription) },
  ];
};

export default function Index() {
  let { pageContent } = useLoaderData();

  return (
    <div key={pageContent._id}>
      {pageContent.sections?.map((section) => (
        <Section key={section._key} {...section} />
      ))}
    </div>
  );
}