import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function NavBar() {
  return (
    <motion.nav
      className="flex justify-between items-center py-6 px-4 md:px-8 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-bold text-white text-2xl">Sambhav Pay</div>
      <div className="hidden md:flex items-center space-x-8">
        <Button
          variant="link"
          className=" text-white text-md"
          
        >
          care@sambhavpay.com
        </Button>
      </div>
    </motion.nav>
  );
}
