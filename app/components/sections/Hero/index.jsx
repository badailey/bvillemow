import React from "react";
import { FullWidthLayout } from "../layout";
import ProseableText from "~/components/sanity/ProseableText";
import { SanityImage } from "~/components/sanity/Image";
import { pagePath } from "~/lib/utils";

const OPACITIES = {
  0: "opacity-0",
  40: "opacity-40",
  60: "opacity-60",
  80: "opacity-80",
};

export function Hero({ darken, image, title, description, cta }) {
  const opacity = OPACITIES[darken || "60"];
  return (
    <FullWidthLayout>
      <div className="relative bg-gray-500">
        {/* Decorative image and overlay */}
        {image && (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <SanityImage
                className="h-full w-full border-none object-cover object-center shadow-none"
                value={image.asset}
              />
            </div>
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-stone-800 ${opacity}`}
            />
          </>
        )}

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-8 text-center sm:py-36 lg:px-0">
          {title && (
            <h1 className="py-8 text-4xl font-bold tracking-tight text-white lg:text-6xl">
              {title}
            </h1>
          )}
          {description && (
            <ProseableText
              value={description}
              classes="prose-2xl prose-invert"
            />
          )}
          {cta && (
            <a
              href={pagePath(cta)}
              className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              {cta.title || cta.target?.title}
            </a>
          )}
        </div>
      </div>
    </FullWidthLayout>
  );
}
