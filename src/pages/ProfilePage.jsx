import React from "react";
import { useCatStore } from "../store/useCatStore";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { likedCats } = useCatStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50">
      <header className="sticky top-0 bg-white shadow-md z-50 flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-pink-500">Liked Kittens</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition"
        >
          Home
        </button>
      </header>

      <main className="p-4 max-w-3xl mx-auto">
        {likedCats.length === 0 ? (
          <p className="text-gray-500 mt-8 text-center">
            You haven’t liked any kittens yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {likedCats.map((catId) => (
              <img
                key={catId}
                src={`https://cataas.com/cat/${catId}`}
                alt="Liked Cat"
                className="w-full h-32 object-cover rounded-lg shadow-sm"
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProfilePage;
