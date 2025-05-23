"use client";

import { imageData } from "@/data/image";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ImageDataProps {
  id: number;
  image: string;
  viewed: boolean;
}

interface AppContextProps {
  allStoriesList: ImageDataProps[];
  setAllStoriesList: Dispatch<SetStateAction<ImageDataProps[]>>;
  activeStoryIndex: number | null;
  setActiveStoryIndex: Dispatch<SetStateAction<number | null>>;
  handleCloseStory: () => void;
  handleNextStory: () => void;
  handlePrevStory: () => void;
}

const AppContext = createContext<AppContextProps>({
  allStoriesList: [],
  setAllStoriesList: () => {},
  activeStoryIndex: null,
  setActiveStoryIndex: () => {},
  handleCloseStory: () => {},
  handleNextStory: () => {},
  handlePrevStory: () => {},
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allStoriesList, setAllStoriesList] = useState<ImageDataProps[] | []>(
    []
  );

  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);

  const handleCloseStory = () => setActiveStoryIndex(null);

  const handleNextStory = () => {
    if (activeStoryIndex === null) return;

    const currentIndex = allStoriesList.findIndex(
      (story) => story.id === activeStoryIndex
    );

    const nextStory = allStoriesList[currentIndex + 1];

    if (nextStory) {
      // Mark next story as viewed and open it
      setAllStoriesList((prev) =>
        prev.map((story) =>
          story.id === nextStory.id ? { ...story, viewed: true } : story
        )
      );
      setActiveStoryIndex(nextStory.id);
    } else {
      handleCloseStory(); // Already at last story
    }
  };

  const handlePrevStory = () => {
    if (activeStoryIndex === null) return;

    const currentIndex = allStoriesList.findIndex(
      (story) => story.id === activeStoryIndex
    );

    const prevStory = allStoriesList[currentIndex - 1];

    if (prevStory) {
      // Mark previous story as viewed and open it
      setAllStoriesList((prev) =>
        prev.map((story) =>
          story.id === prevStory.id ? { ...story, viewed: true } : story
        )
      );
      setActiveStoryIndex(prevStory.id);
    } else {
      handleCloseStory(); // Already at first story
    }
  };

  // auto advance to next image
  useEffect(() => {
    if (activeStoryIndex === null) return;

    const timeout = setTimeout(() => {
      handleNextStory();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [activeStoryIndex, allStoriesList]);

  useEffect(() => {
    setAllStoriesList(imageData);
  }, []);

  return (
    <AppContext.Provider
      value={{
        allStoriesList,
        setAllStoriesList,
        activeStoryIndex,
        setActiveStoryIndex,
        handleCloseStory,
        handleNextStory,
        handlePrevStory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
