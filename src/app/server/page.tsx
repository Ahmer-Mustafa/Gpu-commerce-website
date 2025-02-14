import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";

const inter = Inter({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface ServerData {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

// ✅ Fetch data directly in the server component with better error handling
async function getData(): Promise<ServerData[] | null> {
  try {
    const res = await fetch("https://simple-books-api.glitch.me/books/", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch data");

    return (await res.json()) as ServerData[];
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
}

export default async function Page() {
  const data = await getData();

  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <div className="w-full h-full bg-gray-900">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-[15px] font-bold text-center text-[#2b9fbd] sm:text-[20px] md:text-[50px]">
            Server-Side Fetched Books
          </h1>

          {/* Error State */}
          {!data && <p className="text-center text-red-500">Error fetching data</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[40px]">
            {data?.map((item) => (
              <div
                key={item.id}
                className="bg-white w-full h-full rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-transform"
              >
                <div>
                  <h1 className="text-[15px] text-[#2b9fbd] font-bold">
                    Name: {item.name}
                  </h1>
                  <p className="text-[15px] font-bold text-[#2b2ebd]">
                    Type: {item.type}
                  </p>
                </div>

                <div>
                  <p
                    className={`mt-2 ${
                      item.available
                        ? "text-indigo-500 font-semibold"
                        : "text-red-500 font-semibold"
                    }`}
                  >
                    {item.available ? "Available" : "Not Available"}
                  </p>
                </div>

                <div>
                  <button
                    className={`mt-4 w-full py-3 px-7 rounded ${
                      item.available
                        ? "bg-indigo-400 hover:bg-indigo-500"
                        : "bg-red-500 cursor-not-allowed"
                    } text-white transition duration-300`}
                    disabled={!item.available}
                    aria-disabled={!item.available}
                  >
                    {item.available ? "Book Now" : "Unavailable"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
