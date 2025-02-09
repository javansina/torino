/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      minS: "300px",
      STxsA: "350px",
      STxsB: "380px",
      STxsC: "400px",
      STxsD: "430px",
      STxsE: "460px",
      xs: "480px",
      xsB: "530px",
      xsC: "580px",
      sm: "640px",
      smB: "680px",
      smC: "720px",
      md: "768px",
      mdB: "808px",
      mdC: "908px",
      lg: "1024px",
      lgB: "1124px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        VazirDigit: "Vazir-Digit",
        VazirDigitThin: "Vazir-Digit-Thin",
        VazirDigitRegular: "Vazir-Digit-Regular",
        VazirDigitBold: "Vazir-Digit-Bold",
        VazirBlack: "Vazir-Black",
        VazirBold: "Vazir-Bold",
        VazirLight: "Vazir-Light",
        VazirMedium: "Vazir-Medium",
        VazirRegular: "Vazir-Regular",
        VazirThin: "Vazir-Thin",
      },
      colors: {
        background: "#ffffff",
        myGreen: {
          90: "#e7f9eb",
          100: "#D8FFE1",
          200: "#28A745",
          300: "#10411B",
        },
        myGray: {
          100: "#F8F8F8",
          105: "#F4F4F4",
          110: "#F3F3F3",
          140: "#D9D9D9",
          120: "#DBDBDB",
          130: "#B3B3B3",
          200: "#808080",
          210: "#7D7D7D",
          300: "#616161",
          310: "#595959",
          320: "#444444",
          400: "#2C2C2C",
          410: "#282828",
        },
        myBlue: {
          100: "#009ECA",
        },
        myYellow: {
          100: "#D1B900",
        },
        myRed: {
          100: "#D40000",
        },
      },
      container: {
        center: true,
        padding: {
          minS: "0.438rem",
          STxs: "0.938rem",
          STxsA: "0.938rem",
          STxsB: "0.938rem",
          STxsC: "0.938rem",
          STxsD: "0.938rem",
          STxsE: "0.938rem",
          xs: "1.088rem",
          xsB: "1.088rem",
          xsC: "1.088rem",
          sm: "2.288rem",
          smB: "2.288rem",
          smC: "2.288rem",
          md: "2.288rem",
          mdB: "3.388rem",
          mdC: "3.488rem",
          lg: "3.988rem",
          lgB: "3.988rem",
          xl: "4.088rem",
          "2xl": "7.875rem",
        },
      },
      aspectRatio: {
        "66/100": "50 / 33",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "3px",
            height: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#b6d8be",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#95b09c",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
