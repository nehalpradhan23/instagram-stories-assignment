"use client";
import { useAppContext } from "@/context/AppContext";
import React from "react";

const StoriesList = () => {
  const { allStoriesList, setAllStoriesList, setActiveStoryIndex } =
    useAppContext();

  const viewStory = (id: number) => {
    setAllStoriesList((prev) =>
      prev.map((story) =>
        story.id === id ? { ...story, viewed: true } : story
      )
    );
    setActiveStoryIndex(id);
  };

  return (
    <div className="flex gap-4 overflow-x-auto py-2 hide-scrollbar">
      {allStoriesList.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => viewStory(item.id)}
        >
          <div
            className={`w-20 aspect-square p-[2px] rounded-full 
          ${
            item.viewed
              ? "bg-gray-300"
              : "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
          }
      `}
          >
            <div className="bg-white rounded-full w-full h-full p-[2px]">
              <img
                src={`/images/${item.image}`}
                alt={`Story ${index + 1}`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoriesList;
