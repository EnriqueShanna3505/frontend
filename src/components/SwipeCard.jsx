import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCard = ({ cat, onSwipe, isTopCard }) => {
  const x = useMotionValue(0);

  // Card rotation
  const rotate = useTransform(x, [-200, 200], [-15, 15]);

  const handleDragEnd = (_, info) => {
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    // Swipe Right
    if (velocity > 500 || offset > 120) {
      onSwipe("right", cat.id);
      x.set(1000); // fly off screen
      return;
    }

    // Swipe Left
    if (velocity < -500 || offset < -120) {
      onSwipe("left", cat.id);
      x.set(-1000); // fly off screen
      return;
    }

    // Snap back if not enough swipe
    x.set(0);
  };

  return (
    <motion.div
      className={`absolute w-full h-full ${
        isTopCard ? "" : "scale-90 opacity-70"
      }`}
      style={{
        x,
        rotate,
        zIndex: isTopCard ? 10 : 1,
      }}
      drag={isTopCard ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={isTopCard ? handleDragEnd : undefined}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      <div className="w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={`https://cataas.com/cat/${cat.id}`}
          alt="Cute cat"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <h3 className="text-xl font-bold">Cat #{cat.id}</h3>
          <p className="text-sm opacity-90">Swipe me! 😺</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
