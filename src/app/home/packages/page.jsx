"use client";
import { motion } from "framer-motion";
const Page = () => {
  return (
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }}>
      <div className="px-4 py-4">
        <h1 className="text-lg">Packages</h1>
      </div>
    </motion.div>
  );
};

export default Page;
