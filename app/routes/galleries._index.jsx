import { redirect } from "@remix-run/node";
import { getPhotoGalleriesData } from "~/lib/sanity/queries";

export async function loader({ params }) {
  const { photoGalleriesData } = await getPhotoGalleriesData();
  const year = Object.keys(photoGalleriesData).reverse()[0];
  const newestGallery = photoGalleriesData[year][0];

  return redirect(`/galleries/${newestGallery.slug}`);
}