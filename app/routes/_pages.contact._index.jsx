import React, { useEffect, useRef } from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/outline";
import { z } from "zod";
import { clsx } from "clsx";
import { useActionData, useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getPage } from "~/lib/sanity/queries";
import { Section } from "~/components/sections";
import { Layout } from "~/components/sections/layout";
import { resend } from "~/lib/email.server";

export async function action({ request }) {
  const formData = await request.formData();
  const formPayload = Object.fromEntries(formData);
  const MessageSchema = z.object({
    firstName: z.string().min(1, { message: "Required" }),
    lastName: z.string().min(1, { message: "Required" }),
    email: z.string().email(),
    address: z.string().optional(),
    phone: z.string().optional(),
    "g-recaptcha-response": z.string().min(1, { message: "Required" }),
    message: z.string().min(1, { message: "Required" }),
  });

  try {
    MessageSchema.parse(formPayload);
  } catch (error) {
    const errorResponse = error.issues.reduce((acc, issue) => {
      const key = issue.path[0];
      const value = issue.message;
      return { ...acc, [key]: value };
    }, {});

    if (errorResponse["g-recaptcha-response"]) {
      errorResponse.recaptcha = errorResponse["g-recaptcha-response"];
    }

    return json({ errors: errorResponse, values: formPayload });
  }

  try {
    const { firstName, lastName, email, phone, address, message } = formPayload;

    const data = await resend.emails.send({
      from: "Baldwinsville Meals on Wheels Website <no-reply@bvillemow.com>",
      to: ["baldwinsvillemealsonwheels@yahoo.com", "badailey89@gmail.com"],
      subject: "Contact form submission",
      html: `
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      ${phone ? `<p>Phone: ${phone}</p>` : ""}
      ${address ? `<p>Address: <pre>${address}</pre></p>` : ""}
      <p>Message: <pre>${message}</pre></p>
      `,
    });

    return json({ success: true, values: {}, errors: {}, ...data }, 200);
  } catch (error) {
    return json({ error }, 400);
  }
}

export async function loader({ params }) {
  const { pageContent } = await getPage("contact");

  return { pageContent };
}

export const meta = ({ data }) => {
  if (!data?.pageContent) {
    return [
      { title: "Page not found | Baldwinsville Meals on Wheels" },
      {
        name: "description",
        content: "We could not find the page you're looking for",
      },
    ];
  }
  const { pageContent } = data;

  return [
    {
      title: `${
        pageContent.title || "Contact Us"
      } | Baldwinsville Meals on Wheels`,
    },
    { name: "description", content: String(pageContent.metaDescription) },
  ];
};

export default function Index() {
  const { pageContent } = useLoaderData();
  const actionData = useActionData();
  const grecaptchaRef = useRef();
  useEffect(() => {
    window?.grecaptcha?.enterprise?.ready?.(() => {
      window?.grecaptcha?.enterprise?.render?.(grecaptchaRef.current, {
        sitekey: window?.ENV?.RECAPTCHA_SITE_KEY,
        action: "submit",
      });
    });
  }, []);

  const errorInputClasses =
    "block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6";
  const normalInputClasses =
    "block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark focus:ring-brand-dark sm:text-sm";

  return (
    <>
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
      <Layout>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="prose">
            <h3>Send us a note or tell us your story:</h3>
            <ul className="list-disc">
              <li> How did you discover us?</li>
              <li> What do you like about our work?</li>
              <li> What other services would interest you?</li>
            </ul>
            <h4>For more information contact:</h4>
            <div className="flex gap-x-2">
              <dt className="flex-none">
                <span className="sr-only">Director</span>
                <AtSymbolIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <strong>Donna Metz</strong>
                <br />
                baldwinsvillemealsonwheels@yahoo.com
              </dd>
            </div>
            <div className="flex gap-x-2 ">
              <dt className="flex-none">
                <span className="sr-only">Postal Address</span>
                <EnvelopeIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <strong>Our Address:</strong>
                <br />
                Baldwinsville Meals on Wheels
                <br />
                76 Canton St.
                <br />
                Baldwinsville, NY 13027
              </dd>
            </div>
            <div>
              <dd>
                <strong>Our Phone:</strong>
                <br />
                (315) 638-2171
              </dd>
            </div>
          </div>
          <Form action="post" className="px-6 lg:px-8">
            {actionData?.success && (
              <div className="rounded-md bg-green-200 px-1 py-4 mb-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Email sent!
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      defaultValue={actionData?.values.firstName}
                      autoComplete="given-name"
                      className={clsx(
                        actionData?.errors.firstName
                          ? errorInputClasses
                          : normalInputClasses,
                      )}
                    />
                    {actionData?.errors.firstName && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {actionData?.errors.firstName && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="firstName-error"
                    >
                      {actionData?.errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      defaultValue={actionData?.values.lastName}
                      autoComplete="family-name"
                      className={clsx(
                        actionData?.errors.lastName
                          ? errorInputClasses
                          : normalInputClasses,
                      )}
                    />
                    {actionData?.errors.lastName && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {actionData?.errors.lastName && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="lastName-error"
                    >
                      {actionData?.errors.lastName}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      defaultValue={actionData?.values.email}
                      className={clsx(
                        actionData?.errors.email
                          ? errorInputClasses
                          : normalInputClasses,
                      )}
                    />
                    {actionData?.errors.email && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {actionData?.errors.email && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                      {actionData?.errors.email}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="phone"
                      className="block font-semibold text-gray-900"
                    >
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-500">
                      Optional
                    </p>
                  </div>
                  <div className="relative mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      defaultValue={actionData?.values.phone}
                      className={clsx(
                        actionData?.errors.phone
                          ? errorInputClasses
                          : normalInputClasses,
                      )}
                    />
                    {actionData?.errors.phone && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {actionData?.errors.phone && (
                    <p className="mt-2 text-sm text-red-600" id="phone-error">
                      {actionData?.errors.phone}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Mailing Address
                    </label>
                    <p id="address-description" className="text-gray-500">
                      Optional, if you'd like mailings from time to time
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="address"
                      name="address"
                      rows={2}
                      aria-describedby="address-description"
                      defaultValue={actionData?.values.address}
                      className={clsx(
                        actionData?.errors.address
                          ? errorInputClasses
                          : normalInputClasses,
                      )}
                    />
                    {actionData?.errors.address && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {actionData?.errors.address && (
                    <p className="mt-2 text-sm text-red-600" id="address-error">
                      {actionData?.errors.address}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Your message
                  </label>
                  <div className="relative mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      defaultValue={actionData?.values.message}
                      className={clsx(
                        actionData?.errors.message
                          ? errorInputClasses
                          : normalInputClasses,
                      )}
                    />
                    {actionData?.errors.message && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-start p-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {actionData?.errors.message && (
                    <p className="mt-2 text-sm text-red-600" id="message-error">
                      {actionData?.errors.message}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label className="block font-semibold text-gray-900">
                      Are you a robot?
                    </label>
                  </div>
                  <div className="relative mt-2.5">
                    <div ref={grecaptchaRef}></div>
                  </div>
                  {actionData?.errors.recaptcha && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="recaptcha-error"
                    >
                      {actionData?.errors.recaptcha}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-8 flex ">
                <button
                  type="submit"
                  className="rounded-md bg-brand-dark px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
                >
                  Send message
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Layout>
    </>
  );
}
