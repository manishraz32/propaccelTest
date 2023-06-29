/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "default-white": "#fff",
        light: "rgba(225, 166, 255, 0.4)",
        ghost: "#7a3199",
        whitesmoke: "#eee",
      },
      fontFamily: {
        "text-20-bold": "Poppins",
        "heading-heading-3": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "37xl-5": "56.5px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      xs: "12px",
      "13xl": "32px",
      sm: "14px",
      base: "16px",
      "21xl": "40px",
      "29xl": "48px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
