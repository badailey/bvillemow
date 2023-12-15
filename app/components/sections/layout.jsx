import React from "react";

export function Layout(props) {
  return (
    <div className="mx-auto max-w-5xl px-2 py-4 first:pt-0 last:pb-0 md:py-8 ">
      {props.children}
    </div>
  );
}

export function FullWidthLayout(props) {
  return <div className="mx-auto ">{props.children}</div>;
}