import { SanityImage } from "~/components/sanity/Image";
import { SectionTitle } from "~/components/SectionTitle";
import { Layout } from "../layout";

export function Image({ title, image }) {
  return (
    <Layout>
      {title && <SectionTitle title={title} />}
      <figure className="mx-auto max-h-min max-w-xl">
        <SanityImage
          className="rounded-md mx-auto w-full object-scale-down shadow-lg lg:object-cover lg:object-center"
          alt={image?.alt}
          value={image.asset}
        />
        {image?.caption && (
          <figcaption className="mt-1 text-xl text-center italic text-gray-500">
            <span>{image.caption}</span>
          </figcaption>
        )}
      </figure>
    </Layout>
  );
}
