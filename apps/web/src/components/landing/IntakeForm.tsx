"use client";

import { motion } from "framer-motion";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import GradientText from "../GradientText";

export default function IntakeForm() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="rounded-3xl border border-zinc-100 bg-transparent p-6 sm:p-8"
        style={{
          boxShadow:
            "0 20px 40px -10px rgba(255, 20, 147, 0.4), 0 10px 20px -5px rgba(255, 20, 147, 0.3)",
        }}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-zinc-700 flex items-center gap-1"
            >
              Full name <span className="text-pink-500">*</span>
            </label>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Input
                id="fullName"
                placeholder="Jane Doe"
                name="fullName"
                className="relative z-10 border-0 bg-white transition-shadow hover:shadow-xl"
                style={{
                  boxShadow:
                    "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 20px 35px -5px rgba(255, 20, 147, 0.4), 0 10px 10px -6px rgba(255, 20, 147, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)";
                }}
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 flex items-center gap-1"
            >
              Email <span className="text-pink-500">*</span>
            </label>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Input
                id="email"
                type="email"
                placeholder="jane@email.com"
                name="email"
                className="relative z-10 border-0 bg-white transition-shadow hover:shadow-xl"
                style={{
                  boxShadow:
                    "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 20px 35px -5px rgba(255, 20, 147, 0.4), 0 10px 10px -6px rgba(255, 20, 147, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)";
                }}
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="linkedin"
              className="text-sm font-medium text-zinc-700"
            >
              LinkedIn
            </label>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Input
                id="linkedin"
                type="url"
                placeholder="linkedin.com/in/janedoe"
                name="linkedin"
                className="relative z-10 border-0 bg-white transition-shadow hover:shadow-xl"
                style={{
                  boxShadow:
                    "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 20px 35px -5px rgba(255, 20, 147, 0.4), 0 10px 10px -6px rgba(255, 20, 147, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)";
                }}
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="resumeInfo"
              className="text-sm font-medium text-zinc-700 flex items-center gap-1"
            >
              Information for your resume <span className="text-pink-500">*</span>
            </label>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Textarea
                id="resumeInfo"
                rows={6}
                placeholder="Enter the information you want on your resume..."
                name="resumeInfo"
                className="relative z-10 border-0 bg-white transition-shadow hover:shadow-xl"
                style={{
                  boxShadow:
                    "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 20px 35px -5px rgba(255, 20, 147, 0.4), 0 10px 10px -6px rgba(255, 20, 147, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)";
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center pt-8">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
          className="flex flex-row items-center gap-3 rounded-full bg-transparent px-5 py-3 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          style={{
            boxShadow:
              "0 20px 40px -10px rgba(255, 20, 147, 0.4), 0 10px 20px -5px rgba(255, 20, 147, 0.3)",
          }}
          type="button"
        >
          <GradientText
            colors={[
              "#db2777",
              "#ec4899",
              "#f472b6",
              "#f9a8d4",
              "#ec4899",
              "#db2777",
            ]}
            animationSpeed={3}
            showBorder={false}
            className="text-lg font-semibold"
          >
            Build your dream resume
          </GradientText>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#ff1493] -rotate-90"
          >
            <path
              d="M12 4 Q16 12 12 18"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M8 16L12 20L16 16"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </motion.button>
      </div>
    </>
  );
}
