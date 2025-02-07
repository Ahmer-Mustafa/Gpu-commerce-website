import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/sanity/lib/client';

// API Route to fetch all GPUs
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const gpus = await client.fetch('*[_type == "gpu"]');
    res.status(200).json(gpus);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    res.status(500).json({ message: "Failed to fetch GPU data" });
  }
}
