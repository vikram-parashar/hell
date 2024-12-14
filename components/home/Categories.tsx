'use client'
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import { CategoryType } from "@/lib/types";
import { Button } from "../ui/button";

export default function Categories({ categories }: {
  categories: CategoryType[]
}) {
  const [count, setCount] = useState(10);
  return (
    <div className="min-h-screen bg-rosePineDawn-base px-5 md:px-10 py-10 w-full">
      <div className="flex flex-col md:flex-row text-[25vw] justify-center leading-[5rem] md:text-[5vw] gap-5 font-black mb-10">
        SHOP NOW
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-6 gap-3 mb-5"
      >
        {categories.slice(0, count).map((category, index) => (
          <Card
            key={index}
            name={category.name}
            link={category.thumbnail_image}
            pID={category.id}
          />
        ))}
      </div>
      {count + 10 <= categories.length &&
        <Button onClick={() => setCount(prev => prev + 10)} className="block mx-auto">View More</Button>
      }
    </div>
  );
}

const Card = ({ name, link, pID }: { name: string, link: string, pID: string }) => {
  const colors = ["#f6c177", "#ebbcba", "#31748f", "#9ccfd8", "#c4a7e7"];
  const getRandomId = Math.floor(Math.random() * colors.length);
  const ColorBg = colors[getRandomId];
  const ColorBtn = colors[(getRandomId + 1) % colors.length];
  const [loading, setLoading] = useState(true)

  return (
    <div
      className="bg-opacity-50 h-[22rem] md:h-[20vw] pt-10 group relative overflow-hidden flex"
      style={{ backgroundColor: ColorBg }}
    >
      {loading &&
        <Skeleton className="w-full h-full bg-gray-800" />
      }
      <Image
        onLoad={() => setLoading(false)}
        src={link}
        className={loading ? "absolute opacity-0" : "mx-auto drop-shadow-2xl object-cover"}
        alt={name}
        width={400}
        height={400}
      />
      <span className="absolute top-0 left-0 p-3 font-bold text-xl text-rosePine-highlightLow md:-translate-y-10 transition group-hover:translate-y-0 opacity-70">
        {name}
      </span>
      <span className="absolute bottom-3 right-3 text-sm text-rosePine-highlightLow md:translate-y-20 transition group-hover:translate-y-0 flex justify-between items-center">
        <Link
          href={`/product/${pID}`}
          className="product-btn text-rosePine-black"
          style={{
            backgroundColor: ColorBtn,
          }}
        >
          View Product
        </Link>
      </span>
    </div>
  );
};
