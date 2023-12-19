import React, { useEffect, useState, useRef } from "react";
import { useActionData, useLoaderData } from "@remix-run/react";
import { Layout } from "~/components/sections/layout";
import { getPage } from "~/lib/sanity/queries";
import { Section } from "~/components/sections";

export async function action({ request }) {
  const formData = await request.formData();
  const formPayload = Object.fromEntries(formData);
  const email = formPayload["email-address"] || "";
  return { email };
}

export async function loader() {
  const { pageContent } = await getPage("mailing-list");

  return { pageContent };
}

export const meta = ({ data }) => {
  if (!data?.pageContent) {
    return [
      { title: "Page not found | Syracuse Poster Project" },
      {
        name: "description",
        content: "We could not find the page you're looking for",
      },
    ];
  }
  const { pageContent } = data;

  return [
    {
      title: `${pageContent.title || "Mailing List"} | Syracuse Poster Project`,
    },
    { name: "description", content: String(pageContent.metaDescription) },
  ];
};

const useGetElementAsync = (query) => {
  // this hook comes from https://stackoverflow.com/a/74181633
  const [element, setElement] = useState(null);

  useEffect(() => {
    (async () => {
      let element = await new Promise((resolve) => {
        function getElement() {
          const element = document.querySelector(query);
          if (element) {
            resolve(element);
          } else {
            // Set timeout isn't a must but it
            // decreases number of recursions
            setTimeout(() => {
              requestAnimationFrame(getElement);
            }, 100);
          }
        }

        getElement();
      });

      setElement(element);
    })();
  }, [query]);

  return element;
};

export default function Signup() {
  const formRef = useRef(null);
  const actionData = useActionData();
  let { pageContent } = useLoaderData();
  const email = actionData?.email || "";

  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src =
      "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";
    script.async = true;
    script.defer = true;

    // Create inline script element
    const inlineScript = document.createElement("script");
    inlineScript.textContent =
      'var _ctct_m = "e5f7bec792584f8764745813924bf22c";';

    // Append scripts to head
    document.head.appendChild(inlineScript);
    document.head.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(inlineScript);
      document.head.removeChild(script);
    };
  }, []);

  const element = useGetElementAsync("#email_address_0");
  if (element) {
    element.value = email;
  }

  return (
    <Layout>
      <div key={pageContent._id}>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
          {pageContent.title && (
            <h1 className="mb-8 mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-green-800 sm:text-4xl">
              {pageContent.title}
            </h1>
          )}
          <div id="sections">
            {pageContent.sections?.map((section) => (
              <Section key={section._key} {...section} />
            ))}
          </div>
        </div>
      </div>
      <div
        ref={formRef}
        className="max-w-lg mx-auto ctct-inline-form"
        data-form-id="cd04a28d-339e-4bf4-a878-64a98ae74a22"
      >
        <div className=" h-screen bg-stone-100"></div>
      </div>
    </Layout>
  );
}