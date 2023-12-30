import { SanityImage } from "~/components/sanity/Image";
import { clsx } from "clsx";
import { UsersIcon } from "@heroicons/react/24/solid";

const NullPersonImage = ({ sizeClasses }) => {
  return (
    <span
      className={`inline-block ${sizeClasses} overflow-hidden rounded-full bg-gray-100`}
    >
      <svg
        className="h-full w-full text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
  );
};
const PersonInitialImage = ({ person, sizeClasses }) => {
  const initials = person.name.split(" ").map((n) => n[0]);
  return (
    <span
      className={clsx(
        `inline-flex items-center justify-center rounded-md bg-gray-500`,
        sizeClasses,
      )}
    >
      {initials.length <= 3 ? (
        <span className="text-lg font-medium leading-none text-white">
          {initials.join(".")}
        </span>
      ) : (
        <UsersIcon className="h-5 w-5 text-white" aria-hidden="true" />
      )}
    </span>
  );
};

export const PersonImage = ({
  person,
  alt = "",
  title = "",
  className = null,
  sizeClasses = null,
}) => {
  const asset = person?.image?.asset;

  className = clsx("flex-none inline-block rounded-md object-cover", className);
  sizeClasses ||= "h-12 w-12";

  if (!asset) {
    return person?.name ? (
      <PersonInitialImage person={person} sizeClasses={sizeClasses} />
    ) : (
      <NullPersonImage sizeClasses={className} />
    );
  }

  return (
    <SanityImage
      className={`${className} ${sizeClasses}`}
      alt={alt}
      title={title}
      value={person.image.asset}
    />
  );
};
