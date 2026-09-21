/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a1f1c",
          deep: "#061513",
          card: "#1a2a28",
          muted: "#2d4a46",
        },
        glow: {
          primary: "#00ffc8",
          orange: "#ff7b29",
          purple: "#9b59b6",
          red: "#e74c3c",
          gold: "#f1c40f",
        },
        text: {
          light: "#e8f5f2",
          muted: "#8fb5af",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 200, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 255, 200, 0.5)",
        "glow-orange": "0 0 20px rgba(255, 123, 41, 0.3)",
        "glow-purple": "0 0 20px rgba(155, 89, 182, 0.3)",
        "glow-red": "0 0 20px rgba(231, 76, 60, 0.3)",
        "glow-gold": "0 0 20px rgba(241, 196, 15, 0.3)",
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 200, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 255, 200, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
