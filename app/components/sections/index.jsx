import { Content, FullWidthContent } from "./Content";
import { Donation } from "./Donation";
import { Facebook } from "./Facebook";
import { Faq } from "./Faq";
import { Hero } from "./Hero";
import { Image } from "./Image";
import { TeamMembers } from "./TeamMembers";
import { Testimonials } from "./Testimonials";
import {
  TwoColumnContent,
  TwoColumnContentLeftWider,
  TwoColumnContentRightWider,
} from "./TwoColumnContent";

const COMPONENTS = {
  Content: Content,
  Donation: Donation,
  Facebook: Facebook,
  Faq: Faq,
  FullWidthContent: FullWidthContent,
  Hero: Hero,
  Image: Image,
  TeamMembers: TeamMembers,
  Testimonials: Testimonials,
  TwoColumnContent: TwoColumnContent,
  TwoColumnContentLeftWider: TwoColumnContentLeftWider,
  TwoColumnContentRightWider: TwoColumnContentRightWider,
};

const getComponent = (sectionName) => {
  return COMPONENTS[sectionName];
};

export function Section({ component, ...rest }) {
  const SectionComponent = getComponent(component);
  if (!SectionComponent) {
    console.log("undefined section: ", component);
    return null;
  }
  return <SectionComponent {...rest} />;
}
