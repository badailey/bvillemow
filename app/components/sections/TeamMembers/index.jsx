import { Layout } from "../layout";
import ProseableText from "~/components/sanity/ProseableText";
import { SanityImage } from "~/components/sanity/Image";
import { SectionTitle } from "~/components/SectionTitle";

export function TeamMembers({ teamMemberList, title, description }) {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl">
        {title && <SectionTitle title={title} />}
        {description && (
          <ProseableText value={description} classes={"leading-8"} />
        )}
      </div>
      <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
        {teamMemberList.map((teamMember) => (
          <li
            key={teamMember._key}
            className="group relative rounded-2xl bg-stone-200 px-8 py-10 shadow-md"
          >
            <div className="block">
              <SanityImage
                className="mx-auto h-48 rounded-lg object-cover md:h-56 "
                value={teamMember.image.asset}
                alt={`photo of ${teamMember.name}`}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight">
                {teamMember.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                {teamMember.role}
              </p>
            </div>
            <div className="absolute overflow-scroll left-0 top-0 h-full w-full rounded-2xl bg-stone-800 p-4 opacity-0 transition-all duration-200 group-hover:opacity-90">
              <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                {teamMember.name}
              </h3>
              <ProseableText
                value={teamMember.description}
                classes={"prose-invert prose-sm md:prose-md"}
              />
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}