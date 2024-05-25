"use client";
import { motion } from "framer-motion";
const page = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="px-4 py-4">
        <h1 className="text-lg">Hotels</h1>
      </div>
    </motion.div>
  );
};

export default page;