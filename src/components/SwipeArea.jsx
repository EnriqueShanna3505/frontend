import React, { useEffect } from "react";
import { useCatStore } from "../store/useCatStore";
import SwipeCard from "./SwipeCard";
import Loader from "./Loader";
import { toast } from "react-hot-toast";

const SwipeArea = () => {
  const { cats, likedCats, loading, fetchCats, swipeRight, swipeLeft } = useCatStore();

  useEffect(() => {
    fetchCats();
  }, []);

  const handleSwipe = (direction, catId) => {
    if (!catId) return;

    if (direction === "right") {
      swipeRight(catId);
      toast.success("You liked this kitten! 🐱");
    } else {
      swipeLeft(catId);
      toast.error("You disliked this kitten 😿");
    }
  };

  if (loading) return <Loader />;

  if (cats.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-2xl font-bold mb-4">You've swiped all kittens!</h2>
        {likedCats.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {likedCats.map((id) => (
              <img
                key={id}
                src={`https://cataas.com/cat/${id}`}
                alt="liked kitten"
                className="w-40 h-40 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">You didn't like any kittens 😿</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mt-10">
      {/* Card stack */}
      <div className="relative w-full h-[60vh] mb-8">
        {cats.map((cat, index) => (
          <SwipeCard
            key={cat.id}
            cat={cat}
            onSwipe={handleSwipe}
            isTopCard={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeArea;
