/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)", 
        foreground: "hsl(240, 10%, 3.9%)", 
        primary: "hsl(142, 76%, 36%)", 
        "primary-foreground": "hsl(355, 100%, 97%)",
        secondary: "hsl(240, 4.8%, 95.9%)",
        "secondary-foreground": "hsl(240, 5.9%, 10%)",
        muted: "hsl(240, 4.8%, 95.9%)",
        "muted-foreground": "hsl(240, 3.8%, 46.1%)",
        accent: "hsl(240, 4.8%, 95.9%)",
        "accent-foreground": "hsl(240, 5.9%, 10%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
        "destructive-foreground": "hsl(0, 0%, 98%)",
        border: "hsl(240, 5.9%, 90%)",
        input: "hsl(240, 5.9%, 90%)",
        ring: "hsl(142, 76%, 36%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
