import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Sambhav Pay",
    links: ["Home", "Examples", "Pricing", "Updates"],
  },
  {
    title: "Resources",
    links: ["Home", "Examples", "Pricing", "Updates"],
  },
  {
    title: "About",
    links: ["Home", "Examples", "Pricing", "Updates"],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Slate helps you see how many more days to work to reach your
              financial goal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#F04444] hover:bg-[#F04444]/90 text-white">
                Submit
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-6 mt-12"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
