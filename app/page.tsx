"use client";
import StoriesList from "@/components/StoriesList";
import StoryViewModal from "@/components/StoryViewModal";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { FaBatteryFull, FaWifi } from "react-icons/fa6";
import { TbAntennaBars5 } from "react-icons/tb";

export default function Home() {
  const { activeStoryIndex } = useAppContext();

  return (
    <main className="bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-600 w-screen min-h-screen flex justify-center items-center overflow-hidden">
      <div className="relative rounded-3xl w-[400px] h-[700px] my-8 bg-white overflow-hidden p-3">
        <div className="flex justify-between mb-3 items-center">
          <span className="font-semibold">
            {new Date()
              .toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })
              .replace(/[\u200E\u200F]?(?:\s)?AM|PM/i, "")
              .trim()}
          </span>

          <div className="flex gap-1 text-lg">
            <TbAntennaBars5 className="" />
            <FaWifi />
            <FaBatteryFull />
          </div>
        </div>
        <Image
          alt="instagram"
          src={"/instagram.png"}
          width={100}
          height={100}
        />
        <StoriesList />
        {activeStoryIndex !== null && <StoryViewModal />}
      </div>
    </main>
  );
}
