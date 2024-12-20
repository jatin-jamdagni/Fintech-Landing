import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Captcha() {
  const [captchaText, setCaptchaText] = useState("UKN9Y");

  const regenerateCaptcha = () => {
    // In a real implementation, this would call an API to generate a new captcha
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let newCaptcha = "";
    for (let i = 0; i < 5; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(newCaptcha);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <motion.div
          className="bg-blue-50 p-4 rounded-lg relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={captchaText}
        >
          {/* Decorative dots background */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-500 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Captcha text */}
          <div className="relative">
            <span
              className="font-bold text-2xl tracking-wider text-blue-800 font-mono"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                letterSpacing: "0.25em",
              }}
            >
              {captchaText}
            </span>
          </div>
        </motion.div>

        <Button
          variant="ghost"
          size="icon"
          onClick={regenerateCaptcha}
          className="h-10 w-10"
          aria-label="Regenerate Captcha"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
