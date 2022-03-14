module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        primary: "var(--ui-primary)",
        secondary: "var(--ui-secondary)",
        background: "var(--ui-background)",
        type: "var(--ui-type)",
      },
      boxShadow: {
        case: "0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24)",
        "case-hover": "0 10px 28px rgba(0,0,0,.25), 0 8px 10px rgba(0,0,0,.22)",
        link: "inset 0 -4px 0 #6c63ff",
        "link-hover": "inset 0 -18px 0 #6c63ff",
        "link-dark": "inset 0 -4px 0 #b55400",
        "link-dark-hover": "inset 0 -18px 0 #b55400",
      },
      keyframes: {
        "skill-1": {
          "0%, 100%": { color: "var(--ui-type)" },
          "50%": { color: "var(--ui-primary)" },
        },
        "skill-2": {
          "0%, 100%": { color: "var(--ui-type)" },
          "50%": { color: "orange" },
        },
        "skill-3": {
          "0%, 100%": { color: "var(--ui-type)" },
          "50%": { color: "lightblue" },
        },
      },
      animation: {
        "skill-1": "skill-1 3s ease-in-out infinite",
        "skill-2": "skill-2 3s ease-in-out 1s infinite",
        "skill-3": "skill-3 3s ease-in-out 2s infinite",
      },
      rotate: {
        135: "135deg",
        "-135": "-135deg",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
};
