import { getClient } from "../getClient";

export async function getPhotoGallery(slug) {
  const query = `*[_type == "photoGallery" && (slug.current=="${slug}"||year==${slug})] {
            _id,
        title,
        description,
        year,
        slug,
        images[]{
          ...,
          image{
            asset->,
            caption
          }
        },
    }[0]`;
  const photoGallery = await getClient().fetch(query);

  return { photoGallery };
}

export async function getPhotoGalleriesData() {
  const query = `*[_type == "photoGallery"] | order(year desc) {
        _id,
        year,
        title,
        slug,
        _updatedAt,
        "imageCount": count(images[_type=='galleryImage']),
    }`;
  const photoGalleries = await getClient().fetch(query);

  let photoGalleriesData = {};

  photoGalleries.forEach((gallery) => {
    if (!photoGalleriesData[gallery.year]) {
      photoGalleriesData[gallery.year] = [];
    }
    photoGalleriesData[gallery.year].push({
      title: gallery.title,
      slug: gallery.slug?.current,
      imageCount: gallery.imageCount,
      _id: gallery._id,
      _updatedAt: gallery._updatedAt,
    });
  });

  return { photoGalleriesData };
}