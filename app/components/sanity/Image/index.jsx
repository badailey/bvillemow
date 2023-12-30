import { getImageDimensions, isImageSource } from "@sanity/asset-utils";
import { urlFor } from "~/lib/sanity/utils";
import { clsx } from "clsx";

export const SanityImage = ({
  value,
  alt = "",
  caption = "",
  title = "",
  className = "",
}) => {
  if (!isImageSource(value)) {
    return null;
  }

  const { width, height } = getImageDimensions(value);
  return (
    <figure>
      <img
        className={clsx("border border-stone-200 shadow-md", className)}
        src={urlFor(value).height(800).fit("max").auto("format").url()}
        alt={alt || value.altText}
        title={value.title || title}
        loading="lazy"
        style={{
          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
      {caption && (
        <figcaption
          className={`mt-1 width-[${width}px] text-md text-center italic text-gray-600`}
        >
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
