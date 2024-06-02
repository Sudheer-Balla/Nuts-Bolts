const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
      colors: {
        background: "#F0F2F5",
        "primary-button": "#1F2937",
        "secondary-button": "#6B7280",
        text: "#374151",
        "heading-home": "#111827",
        "heading-listing": "#4B5563",
        "heading-form": "#9CA3AF",
        accent: "#60A5FA",
        border: "#D1D5DB",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
