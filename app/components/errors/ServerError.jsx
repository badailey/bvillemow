import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
export default function ServerError() {
  return (
    <>
      <div className="flex min-h-fit flex-col pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="py py-24">
            <div className="text-center">
              <ExclamationTriangleIcon className="mx-auto h-24 w-24 text-red-500" />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Something went wrong
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Our team is working on it!
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
