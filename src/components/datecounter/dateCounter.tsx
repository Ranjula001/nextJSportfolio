import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DateCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const today = new Date().getDate(); // Get today's date

    // Function to increment the count until it matches today's date
    const incrementCounter = () => {
      setCount((prev) => (prev < today ? prev + 1 : prev));
    };

    // Start the counter
    const interval = setInterval(incrementCounter, 160); // Increment every second for demonstration

    // Cleanup interval
    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Next midnight
    const timeUntilMidnight = midnight.getTime() - new Date().getTime();

    // Reset the count at midnight
    const timeout = setTimeout(() => {
      setCount(0);
    }, timeUntilMidnight);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.span
      whileHover={{ scale: 1.2, color: "#E8E7CB" }}
      transition={{ type: "spring", stiffness: 200 }}
      className="cursor-pointer font-maelstrom text-[280px] text-[#f5eee6]"
    >
      {String(count).padStart(2, "0")}
    </motion.span>
  );
};

export default DateCounter;