import { useLoaderData } from "@remix-run/react";
import { getPhotoGallery } from "~/lib/sanity/queries";
import { SanityImage } from "~/components/sanity/Image";
import { throwNotFound } from "~/lib/redirects";

export { ErrorBoundary } from "~/components/errors";

export async function loader({ params }) {
  const slug = params.slug;
  const { photoGallery } = await getPhotoGallery(slug);

  if (!photoGallery) {
    throwNotFound(`/galleries/${params.slug}`);
  }
  return {
    photoGallery,
  };
}

export const meta = ({ data }) => {
  if (!data?.photoGallery) {
    return [
      { title: "Gallery not found | Baldwinsville Meals on Wheels" },
      {
        name: "description",
        content: "We could not find the photo gallery you're looking for",
      },
    ];
  }
  const { photoGallery } = data;

  return [
    {
      title: `Photo Gallery: ${photoGallery.title} | Baldwinsville Meals on Wheels`,
    },
    { name: "description", content: "Photo Galleries of past events" },
  ];
};

export default function Index() {
  const { photoGallery } = useLoaderData();

  const GalleryRows = ({ images }) => {
    if (!images) {
      return <div className="py-12 italic text-gray-600"> no images found</div>;
    }

    const imageRows = images.reduce(
      (acc, image) => {
        // gallery objects can include a "galleyNewRow" type that indicates
        // we should start a new row
        if (image._type === "galleryNewRow") {
          acc.push([]);
        } else {
          // otherwise add the image to the row
          const lastGroup = acc[acc.length - 1];
          lastGroup.push(image);
        }
        return acc;
      },
      [[]],
    );

    return (
      <>
        {imageRows.map((imageRow, index) => (
          <div key={index} className="grid">
            <GalleryRow row={imageRow} />
          </div>
        ))}
      </>
    );
  };

  const GalleryRow = ({ row }) => {
    let gridCols;
    switch (row.length) {
      case 2:
        gridCols = "sm:grid-cols-2";
        break;
      case 3:
        gridCols = "sm:grid-cols-3";
        break;
      default:
        break;
    }
    return (
      <ul className={`mt-4 grid max-w-2xl grid-cols-1 gap-4 ${gridCols}`}>
        {row.map((galleryImage) => (
          <li key={galleryImage._key}>
            <SanityImage
              value={galleryImage.image}
              className="-full rounded-xs max-h-80 w-full object-cover shadow-lg"
            />
            <p className="text-sm text-gray-600">
              {galleryImage.image.caption}
            </p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl px-6">
          <h2 className="text-2xl font-bold text-green-800">
            {photoGallery.title}
          </h2>
          <div className="text-lg text-gray-600">
            {photoGallery.description}
          </div>
          <GalleryRows images={photoGallery.images} />
        </div>
      </div>
    </>
  );
}
