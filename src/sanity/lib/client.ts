import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "6qhqyt37", // Replace with your actual project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});