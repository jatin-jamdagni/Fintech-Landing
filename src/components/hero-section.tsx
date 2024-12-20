import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SignInButton from "./signin-button";

export function HeroSection() {
  return (
    <motion.div
      className="text-center pt-12 pb-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Kyunki Sambhav
        <br />
        hai!
      </motion.h1>
      <motion.p
        className="text-white/90 text-xl max-w-lg mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Make next-level digital payments with Sambhav Pay.
      </motion.p>
      <SignInButton>
        
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
        
          size="lg"
          className="bg-white text-[#FC4746] hover:bg-background/90"
        >
          Login
        </Button>
      </motion.div>
      </SignInButton>

    </motion.div>
  );
}
