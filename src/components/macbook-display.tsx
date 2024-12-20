 
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+1",
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+2",
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+3",
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+4",
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+5",

 
 
]

export function MacbookDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div 
      className="relative max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <img 
        src="macbook.svg" 
        alt="Macbook Frame" 
        className="w-full h-auto"
      />
      <div className="absolute top-[2.9%] left-[10.8%] right-[10.8%] bottom-[8%] bg-black overflow-hidden rounded-t-lg">
        <AnimatePresence mode="wait">
          <motion.img
          
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

