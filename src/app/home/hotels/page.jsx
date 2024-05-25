"use client"
import { motion } from "framer-motion";
const page = () => {
  return (
    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
    <div className="px-4 py-4">
      <h1 className="text-lg">Hotels</h1>
    </div>
  </motion.div>
  )
}

export default page;