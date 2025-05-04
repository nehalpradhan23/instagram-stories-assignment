import { useAppContext } from "@/context/AppContext";
import React from "react";
import { IoClose } from "react-icons/io5";

const StoryViewModal = () => {
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

  return (
    <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-40">
      <div className="absolute top-0 w-full flex bg-gradient-to-b from-black/70 via-black/30 to-black/0 justify-end p-3 z-60">
        <button
          className="text-white text-3xl cursor-pointer flex"
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
