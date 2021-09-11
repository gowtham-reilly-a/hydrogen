const withOpacity = (variableName) => {
  return ({ opacityValue }) => `rgb(var(--${variableName}),${opacityValue})`;
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: withOpacity("background-base"),
          highlight: withOpacity("background-highlight"),
          accent: withOpacity("background-accent"),
          negative: withOpacity("background-negative"),
          "negative-muted": withOpacity("background-negative-muted"),
        },
      },
      textColor: {
        skin: {
          base: withOpacity("text-base"),
          accent: withOpacity("text-accent"),
          "accent-muted": withOpacity("text-accent-muted"),
          subdued: withOpacity("text-subdued"),
          negative: withOpacity("text-negative"),
        },
      },
      borderColor: {
        skin: {
          base: withOpacity("border-base"),
          accent: withOpacity("border-accent"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
