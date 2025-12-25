"use client";

import { motion } from "framer-motion";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

export default function IntakeForm() {
  return (
    <>
    <motion.div
        initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="rounded-3xl border border-zinc-100 bg-transparent p-6 sm:p-8"
        style={{
          boxShadow: "0 20px 40px -10px rgba(255, 20, 147, 0.4), 0 10px 20px -5px rgba(255, 20, 147, 0.3)",
        }}
    >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="text-sm font-medium text-zinc-700">
              Full name
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
                  boxShadow: "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 35px -5px rgba(255, 20, 147, 0.4), 0 10px 10px -6px rgba(255, 20, 147, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)";
                }}
              />
            </motion.div>
        </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">
              Email
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
                  boxShadow: "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 35px -5px rgba(255, 20, 147, 0.4), 0 10px 10px -6px rgba(255, 20, 147, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)";
                }}
              />
            </motion.div>
        </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="linkedin" className="text-sm font-medium text-zinc-700">
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
                  boxShadow: "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 35px -5px rgba(255, 20, 147, 0.4), 0 10px 10px -6px rgba(255, 20, 147, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)";
                }}
          />
            </motion.div>
        </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="resumeInfo" className="text-sm font-medium text-zinc-700">
              Information for your resume
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
                  boxShadow: "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 35px -5px rgba(255, 20, 147, 0.4), 0 10px 10px -6px rgba(255, 20, 147, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(255, 20, 147, 0.3), 0 8px 10px -6px rgba(255, 20, 147, 0.2)";
                }}
              />
            </motion.div>
        </div>
        </div>
    </motion.div>
      <div className="flex justify-center pt-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="cursor-pointer rounded-full bg-transparent p-1 transition-transform hover:scale-110 active:scale-95"
          style={{
            boxShadow: "0 20px 40px -10px rgba(255, 20, 147, 0.4), 0 10px 20px -5px rgba(255, 20, 147, 0.3)",
          }}
          type="button"
        >
          <svg
            width="40"
            height="40"
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
