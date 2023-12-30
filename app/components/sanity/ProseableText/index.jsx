import React, { useMemo } from "react";
import { PortableText } from "@portabletext/react";
import { clsx } from "clsx";
import { SanityImage } from "~/components/sanity/Image";
import { linkFor } from "~/lib/utils";

// from https://www.sanity.io/guides/tailwindcss-typography-prose-portable-text

/**
 * Use Tailwind CSS's `prose` classes with Portable Text markup (blocks)
 * Without inheriting styles for custom components (types)
 */
export default function ProseableText({ value = [], classes = "" }) {
  // Group together standard `_type === "block"`  blocks
  // eg <p>, <li>, etc – and separate out everyone else
  const valueGroups = useMemo(() => {
    if (!value?.length) {
      console.log("unable to show empty ProseableText content");
      return null;
    }
    return (
      value.reduce(
        (acc, item) => {
          const lastIdx = acc.length - 1;

          if (
            // We don't have items in this group yet
            acc[lastIdx].length === 0 ||
            // The last group has the same `type`
            acc[lastIdx][0]._type === item._type
          ) {
            acc[lastIdx].push(item);
          } else {
            // Time to create a new group, because the `type` is different compared to last group
            acc.push([item]);
          }

          return acc;
        },
        [[]],
      ),
      [value]
    );
  });

  if (!valueGroups?.length) return null;
  return valueGroups.map(
    (group) => (
      <div
        key={group[0]._key}
        className={clsx([
          `prose max-w-none px-2 prose-li:marker:text-brand-dark prose-img:max-h-60 prose-img:rounded-xl prose-img:object-contain md:px-0 `,
          classes,
        ])}
      >
        <PortableText
          key={group[0]._key}
          value={group}
          components={{
            types: {
              image: ({ value }) => {
                return (
                  <SanityImage
                    alt={value.alt}
                    caption={value.caption}
                    value={value}
                  />
                );
              }
            },
            marks: {
              internalLink: ({ value, children }) => {
                const { targetObject, button } = value;
                const href = linkFor(targetObject);
                const classes = button
                  ? "inline-flex items-center rounded border border-transparent bg-brand px-2.5 py-1.5 text-xl font-medium text-gray-800 shadow-sm hover:bg-brand-dark hover:text-white no-underline focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2"
                  : "";

                return (
                  <a href={href} className={classes}>
                    {children}
                  </a>
                );
              },
              link: ({ value, children }) => {
                const { blank, href } = value;
                return blank ? (
                  <a href={href} target="_blank" rel="noreferrer">
                    {children}
                  </a>
                ) : (
                  <a href={href}>{children}</a>
                );
              },
            },
          }}
        />
      </div>
    ),
    //)
  );
}
