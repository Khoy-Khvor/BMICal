/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blue: "#3D3BF3",
        white1: "#EBEAFF",
        pink: "#9694FF",
        red: "#FF2929",
      },
      textShadow: {
        custom: "0 0 2px white",
      },
      screens: {
        'sm': '340px',
        // => @media (min-width: 640px) { ... }

        'md': '640px',
        // => @media (min-width: 768px) { ... }

        'lg': '789px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1024px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1236px',
        '3xl': '1376px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugin: [],
};
