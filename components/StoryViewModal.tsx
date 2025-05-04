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
    // <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-40">
      <div className="absolute top-0 w-full flex bg-gradient-to-b from-black/70 via-black/30 to-black/0 justify-end p-3">
        <button
          className="text-white text-3xl cursor-pointer flex"
          onClick={handleCloseStory}
        >
          <IoClose />
        </button>
      </div>
      {/* <button
        className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
        onClick={handleCloseStory}
        >
        <IoClose />
      </button> */}
      <button
        className="absolute left-4 text-white text-2xl"
        onClick={handlePrevStory}
      >
        ‹
      </button>
      <img
        src={`/images/${activeStory?.image}`}
        alt="Story"
        // className="absolute inset-0 w-full h-full object-cover"
        className="object-cover"
        // className="max-h-[100%] max-w-[100%] object-cover rounded-xl"
      />
      <button
        className="absolute right-4 text-white text-2xl"
        onClick={handleNextStory}
      >
        ›
      </button>
    </div>
  );
};

export default StoryViewModal;
