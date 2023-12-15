import React from "react";
import { Image } from "~/components/sections/Image";
import { Layout } from "../layout";
import { SectionTitle, ColumnTitle } from "~/components/SectionTitle";
import clsx from "clsx";
import { Content } from "../Content";

export function TwoColumnContent({
  title,
  columns,
  mobileDisplay,
  leftIsWider,
  rightIsWider,
}) {
  const colClasses = () => {
    const smallCol = "lg:col-span-2";
    const bigCol = "lg:col-span-4";
    const evenCol = "lg:col-span-3";
    let rightClasses = [];
    let leftClasses = [];

    // determines the column classes for the left and right columns
    // our grid is 6 columns wide, and our columns will either be 2 or 3 columns wide
    if (rightIsWider) {
      // | L | L | R | R | R | R |
      rightClasses.push(bigCol, "lg:col-start-3");
      leftClasses.push(smallCol);
    } else if (leftIsWider) {
      // | L | L | L | L | R | R |
      leftClasses.push(bigCol);
      rightClasses.push(smallCol, "lg:col-start-5");
    } else {
      // | L | L | L | R | R | R |
      leftClasses.push(evenCol);
      rightClasses.push(evenCol, "lg:col-start-4");
    }
    const mobileDisplay = "leftTop";

    // this switch statement will determine the order of columns when on mobile
    switch (mobileDisplay) {
      case "rightTop":
        rightClasses.push("row-start-1");
        leftClasses.push("row-start-2");
        break;
      case "hideLeft":
        leftClasses.push("hidden");
        break;
      case "hideRight":
        rightClasses.push("hidden");
        break;
      // default is left on top, which doesn't need additional classes
    }

    return { leftClasses, rightClasses };
  };

  const RightColumn = ({ children }) => {
    const { rightClasses } = colClasses();

    return (
      <div
        className={clsx(rightClasses, "mt-8 lg:block")}
      >
        {children}
      </div>
    );
  };

  const LeftColumn = ({ children }) => {
    const { leftClasses } = colClasses();

    return (
      <div
        className={clsx(
          leftClasses,
          "mt-8 lg:row-start-1 lg:block",
        )}
      >
        {children}
      </div>
    );
  };

  return (
    <Layout>
      {title && <SectionTitle title={title} />}

      <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-10 text-base leading-7 text-gray-300 lg:mx-0 lg:max-w-none lg:grid-cols-6">
        <LeftColumn>
          {columns[0]._type === "content" ? (
            <Content title={columns[0].title} content={columns[0].content} TitleComponent={ColumnTitle} />
          ) : (
            <Image title={columns[0].title} image={columns[0].image} />
          )}
        </LeftColumn>
        <RightColumn>
          {columns[1]._type === "content" ? (
            <Content title={columns[1].title} content={columns[1].content} TitleComponent={ColumnTitle} />
          ) : (
            <Image title={columns[1].title} image={columns[1].image} />
          )}
        </RightColumn>
      </div>
    </Layout>
  );
}

export function TwoColumnContentLeftWider(props) {
  return TwoColumnContent({ leftIsWider: true, ...props });
}

export function TwoColumnContentRightWider(props) {
  return TwoColumnContent({ rightIsWider: true, ...props });
}