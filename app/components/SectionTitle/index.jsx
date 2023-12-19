import React from "react";

export function SectionTitle({ title }) {
  return (
    <h2 className="mx-auto max-w-xl pb-6 text-center text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
      {title}
    </h2>
  );
}

export function ColumnTitle({ title }) {
  return (
    <h3 className="pb-6 text-xl font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl">
      {title}
    </h3>
  );
}
