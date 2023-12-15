import { getImageDimensions, isImageSource } from "@sanity/asset-utils";
import { urlFor } from "~/lib/sanity/utils";
import { clsx } from "clsx";

export const SanityImage = ({
  value,
  alt = "",
  title = "",
  className = "",
}) => {
  if (!isImageSource(value)) {
    return null;
  }

  const { width, height } = getImageDimensions(value);
  return (
    <img
      className={clsx("border border-stone-200 shadow-md", className)}
      src={urlFor(value).height(800).fit("max").auto("format").url()}
      alt={value.alt || alt}
      title={value.title || title}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};
