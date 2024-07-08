/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        purple: "#4B006E",
        golden: "#eef9a6",
        skyblue: "#eeffff",
        cherry: "#de2e35",
        peach: "#d3a58e",
        mintblue: "#15a39c",
      },
    },
  },
  plugins: [],
};
