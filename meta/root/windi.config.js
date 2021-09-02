const { transform } = require("windicss/helpers");

module.exports = {
  plugins: [transform("daisyui")],
  daisyui: {
    logs: false,
    themes: [
      {
        g100: {
          primary: "#ff3e00",
          "primary-focus": "#c23000",
          "primary-content": "#ffffff",

          secondary: "#ffd0bf",
          "secondary-focus": "#e0b3a2",
          "secondary-content": "#000000",

          accent: "#ff3e00",
          "accent-focus": "#c23000",
          "accent-content": "#ffffff",

          neutral: "#303236",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",

          "base-100": "#303236",
          "base-200": "#2a2e37",
          "base-300": "#000000",
          "base-content": "#ebecf0",
        },
        g90: {
          primary: "#ff3e00",
          "primary-focus": "#c23000",
          "primary-content": "#ffffff",

          secondary: "#ffd0bf",
          "secondary-focus": "#e0b3a2",
          "secondary-content": "#000000",

          accent: "#ff3e00",
          "accent-focus": "#c23000",
          "accent-content": "#ffffff",

          neutral: "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",

          "base-100": "#3d4451",
          "base-200": "#2a2e37",
          "base-300": "#16181d",
          "base-content": "#ebecf0",
        },
        white: {
          primary: "#ff3e00",
          "primary-focus": "#c23000",
          "primary-content": "#ffffff",

          secondary: "#ffd0bf",
          "secondary-focus": "#e0b3a2",
          "secondary-content": "#000000",

          accent: "#ff3e00",
          "accent-focus": "#c23000",
          "accent-content": "#ffffff",

          neutral: "#ffffff",
          "neutral-focus": "#b8b8b8",
          "neutral-content": "#000000",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
        },
        g10: {
          primary: "#ff3e00",
          "primary-focus": "#c23000",
          "primary-content": "#ffffff",

          secondary: "#ffd0bf",
          "secondary-focus": "#e0b3a2",
          "secondary-content": "#000000",

          accent: "#ff3e00",
          "accent-focus": "#c23000",
          "accent-content": "#ffffff",

          neutral: "#faf7f5",
          "neutral-focus": "#b8b8b8",
          "neutral-content": "#000000",

          "base-100": "#faf7f5",
          "base-200": "#f9fafb",
          "base-300": "#ffd0bf",
          "base-content": "#1f2937",
        },
      },
    ],
  },
};
