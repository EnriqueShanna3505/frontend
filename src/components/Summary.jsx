import React from "react";
import { useCatStore } from "../store/useCatStore";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const { likedCats } = useCatStore();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-2xl font-bold mb-4">You've swiped all kittens!</h2>
      <p className="mb-4 text-gray-700">
        You liked {likedCats.length} {likedCats.length === 1 ? "kitten" : "kittens"}.
      </p>

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

      <button
  onClick={() => window.location.reload()} // refreshes the page
  className="mt-6 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition"
>
  Back to Swipe
</button>
    </div>
  );
};

export default Summary;
