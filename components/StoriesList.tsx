"use client";
import { useAppContext } from "@/context/AppContext";
import React, { useRef, useState } from "react";

const StoriesList = () => {
  const { allStoriesList, setAllStoriesList, setActiveStoryIndex } =
    useAppContext();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const viewStory = (id: number) => {
    setAllStoriesList((prev) =>
      prev.map((story) =>
        story.id === id ? { ...story, viewed: true } : story
      )
    );
    setActiveStoryIndex(id);
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="flex gap-4 overflow-x-auto p-3 hide-scrollbar"
    >
      {allStoriesList.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => viewStory(item.id)}
        >
          <div
            className={`w-[70px] aspect-square p-[2px] rounded-full 
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
