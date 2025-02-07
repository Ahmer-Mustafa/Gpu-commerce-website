import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Define GPU Type
interface GPU {
  _id: string;
  name: string;
  price: number;
  description: string;
  image?: { asset?: { url?: string } };
  specs?: string[];
}

export default function GPUPage() {
  const router = useRouter();
  const { id } = router.query;
  const [gpu, setGpu] = useState<GPU | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/gpu/${id}`)
        .then((res) => res.json())
        .then((data) => setGpu(data))
        .catch((error) => console.error("Error fetching GPU:", error));
    }
  }, [id]);

  if (!gpu) return <p className="text-white text-center">Loading GPU...</p>;

  return (
    <div className="min-h-screen bg-black text-neon-green p-6">
      <h1 className="text-4xl font-bold border-b-2 border-neon-green pb-2">{gpu.name}</h1>
      <div className="mt-4">
        {gpu.image?.asset?.url && (
          <img src={gpu.image.asset.url} alt={gpu.name} className="w-80 rounded-lg border border-neon-green" />
        )}
        <p className="text-2xl mt-4">${gpu.price}</p>
        <p className="text-gray-300 mt-2">{gpu.description}</p>
        <h3 className="text-xl font-bold mt-4">Specifications:</h3>
        <ul className="list-disc list-inside">
          {gpu.specs?.map((spec, idx) => <li key={idx}>{spec}</li>)}
        </ul>
      </div>
    </div>
  );
}
