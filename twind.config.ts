import { animation, css } from "twind/css";
import type { Options } from "$fresh/plugins/twind.ts";

const options: Omit<Options, "selfURL"> = {
  plugins: {
    "fillwhite": {"fill": "white"},
    "fillblack": {"fill": "black"},
    "shadow-inset": {"box-shadow" : "inset 0 0 0 1px #e5e5e5" },
    "max-inline": {"inline-size": "max-content"}
  },
  theme: {
    extend: {
      colors: {
        primary: "#2FD180",
        "custom-gray": "#f4f4f4",
        "primary-red": "#D10923",
        "primary-red-light": "#DA262B",
        "primary-red-dark": "#A1061A",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};

export default options;
