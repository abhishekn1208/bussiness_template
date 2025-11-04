import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate();
  const handleClick = () => {
    router("/cater");
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden bg-gradient-to-b from-black via-[#1f1500] to-[#3b2a00]">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-8"
      >
        <div className="w-48 h-48 bg-black rounded-full shadow-[0_0_50px_10px_rgba(255,204,0,0.3)] flex items-center justify-center">
          <h1 className="text-3xl italic font-semibold text-[#e4b301]">
            Lumière
          </h1>
        </div>
      </motion.div>

      <h1 className="text-5xl font-bold text-[#e4b301] drop-shadow-md mb-3">
        Lumière
      </h1>
      <p className="text-lg text-gray-300 mb-8">Experience Culinary Artistry</p>

      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="h-[1px] w-10 bg-[#e4b301]"></div>
        <div className="w-2 h-2 bg-[#e4b301] rounded-full"></div>
        <div className="h-[1px] w-10 bg-[#e4b301]"></div>
      </div>

      <p className="text-gray-300 mb-4">Tap to enter our culinary journey</p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative border-2 border-[#e4b301] p-6 rounded-full flex items-center justify-center"
        onClick={handleClick}
      >
        <div className="absolute inset-0 rounded-full animate-ping border border-[#e4b301] opacity-30"></div>
        <div className="w-3 h-3 bg-[#e4b301] rounded-full"></div>
      </motion.button>

      <p className="absolute bottom-8 text-[#e4b301] tracking-[4px] text-sm">
        DIGITAL MENU
      </p>
    </section>
  );
}
