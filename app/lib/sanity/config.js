export const config = {
  apiVersion: "2021-03-25",
  // Find these in your ./studio/sanity.json file
  dataset: "production",
  projectId: "f316cf5l",
  useCdn: process.env.NODE_ENV === "production",
};
