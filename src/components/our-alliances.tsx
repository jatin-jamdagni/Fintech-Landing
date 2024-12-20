 
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const images = [
  "https://placehold.co/400x300/000000/FFFFFF?text=Image+1",
  "https://placehold.co/400x300/000000/FFFFFF?text=Image+2",
  "https://placehold.co/400x300/000000/FFFFFF?text=Image+3",
  "https://placehold.co/400x300/000000/FFFFFF?text=Image+4",
  "https://placehold.co/400x300/000000/FFFFFF?text=Image+5",
  "https://placehold.co/400x300/000000/FFFFFF?text=Image+6",
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+7",
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+8",
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+9",
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+10",
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+11",
  "https://placehold.co/900x800/000000/FFFFFF?text=Image+12",
];

export function OurAlliances() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(containerRef);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: [0, -100 * images.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  return (
    <div className=" space-y-20 py-20">
      <h1 className=" font-bold text-white text-center text-3xl">
        Our Alliances
      </h1>
      <div className="w-full overflow-hidden" ref={containerRef}>
        <motion.div className="flex" animate={controls}>
          {[...images, ...images].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-[100px] h-auto mx-2">
              <img
                src={src}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
