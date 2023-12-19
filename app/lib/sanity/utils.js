import imageUrlBuilder from "@sanity/image-url";
import { config } from "./config";

const builder = imageUrlBuilder(config);

export const urlFor = (source) => {
  return builder.image(source);
};
