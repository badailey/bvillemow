import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Layout } from "../layout";
import ProseableText from "~/components/sanity/ProseableText";
import { classNames } from "~/lib/utils";
import { SectionTitle } from "~/components/SectionTitle";

export function Faq({ title, questions_answers }) {
  return (
    <Layout>
      {title && <SectionTitle title={title} />}
      <dl className="mx-auto mt-6 max-w-3xl space-y-6 divide-y divide-gray-300">
        {questions_answers.map((question_answer) => (
          <Disclosure as="div" key={question_answer._key} className="pt-6">
            {({ open }) => (
              <>
                <dt className="text-lg md:text-xl">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-500">
                    <span className="font-medium text-gray-900">
                      {question_answer.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDownIcon
                        className={classNames(
                          open ? "-rotate-180" : "rotate-0",
                          "h-6 w-6 transform",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <ProseableText
                    value={question_answer.answer}
                    classes="max-w-none"
                  />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </Layout>
  );
}
