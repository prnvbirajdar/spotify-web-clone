module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      15: "15%",
      25: "25%",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      footer: "#282828",
      body: "#121212",
    }),
    textColor: (theme) => ({ ...theme("colors"), sidebarFont: "#b3b3b3" }),
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      sidebarLine: "#282828",
    }),
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
