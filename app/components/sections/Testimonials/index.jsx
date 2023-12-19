import { Layout } from "../layout";
import { PersonImage } from "~/components/PersonImage";
import ProseableText from "~/components/sanity/ProseableText";
import { SectionTitle } from "~/components/SectionTitle";

export function Testimonials({ title, testimonialList }) {
  return (
    <Layout>
      <div className="py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="pb-6 text-3xl font-semibold leading-8 tracking-tight text-brand-dark">
              Testimonials
            </h2>
            {title && <SectionTitle title={title} />}
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonialList.map((testimonial) => (
                <div
                  key={testimonial.endorser._id}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-stone-200 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <ProseableText
                        value={testimonial.body}
                        classes="max-w-none"
                      />
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <PersonImage
                        person={testimonial.endorser}
                        alt={`photo of ${testimonial.endorser.name}`}
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.endorser.name}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.endorserDescription}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
