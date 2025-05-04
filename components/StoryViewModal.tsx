import { useAppContext } from "@/context/AppContext";
import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

const StoryViewModal = () => {
  const [progress, setProgress] = useState(0);
  const {
    handleCloseStory,
    handleNextStory,
    handlePrevStory,
    allStoriesList,
    activeStoryIndex,
  } = useAppContext();

  const activeStory = allStoriesList.find(
    (item) => item.id === activeStoryIndex
  );

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeStoryIndex]);

  return (
    <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-40">
      <div className="absolute top-0 w-full flex flex-col bg-gradient-to-b from-black/70 via-black/30 to-black/0 justify-end p-3 z-60">
        {/* progress bar */}
        <div className="bg-gray-400 w-full h-[2px] overflow-hidden rounded">
          <div
            className="h-full bg-white transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* close button */}
        <button
          className="text-white text-4xl cursor-pointer flex justify-end mt-2"
          onClick={handleCloseStory}
        >
          <IoClose />
        </button>
      </div>

      <img
        src={`/images/${activeStory?.image}`}
        alt="Story"
        className="object-cover"
      />

      {/* Click zones */}
      <div
        className="absolute left-0 top-0 w-1/2 h-full z-40"
        onClick={handlePrevStory}
      />
      <div
        className="absolute right-0 top-0 w-1/2 h-full z-40"
        onClick={handleNextStory}
      />
    </div>
  );
};

export default StoryViewModal;
