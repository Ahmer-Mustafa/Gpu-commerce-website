import { useEffect, useState } from 'react';

// Define GPU Type
interface GPU {
  _id: string;
  name: string;
  price: number;
  description: string;
  image?: { asset?: { url?: string } };
}

export default function Home() {
  const [gpus, setGpus] = useState<GPU[]>([]);

  useEffect(() => {
    fetch('/api/gpu')
      .then((res) => res.json())
      .then((data) => setGpus(data))
      .catch((error) => console.error("Error fetching GPUs:", error));
  }, []);

  return (
    <div className="min-h-screen bg-black text-neon-green p-6">
      <h1 className="text-4xl font-bold text-center border-b-2 border-neon-green pb-2">
        My GPU Store
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {gpus.map((gpu) => (
          <div key={gpu._id} className="border border-neon-green p-4 rounded-lg">
            <h2 className="text-2xl font-bold">{gpu.name}</h2>
            <p className="text-gray-300">${gpu.price}</p>

            {/* GPU Image */}
            {gpu.image?.asset?.url ? (
              <img
                src={gpu.image.asset.url}
                alt={gpu.name}
                width="200"
                className="mt-2 rounded-lg border border-neon-green"
              />
            ) : (
              <div className="w-48 h-32 bg-gray-800 mt-2 flex items-center justify-center">
                <p className="text-gray-500">No Image</p>
              </div>
            )}

            <p className="mt-2 text-gray-400">{gpu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
