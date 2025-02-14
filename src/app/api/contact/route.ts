import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Store data in Sanity
    await sanityClient.create({
      _type: "contactMessage",
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ success: false, error: "Something went wrong." }, { status: 500 });
  }
}
