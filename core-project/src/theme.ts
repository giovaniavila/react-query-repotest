import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const scrollbarStyle = {
  "&::-webkit-scrollbar": {
    width: "8px",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    mt: "1.25rem",
  },
};

const theme = extendTheme({
  config,
  colors: {
    text: {
      title: "#FFFFFF",
      subtitle: "#AAB5D0",
      default: "#E4EBFB",
    },
    background: {
      50: "#121E31",
    },
    gray: {
      50: "#f9f9f9",
      100: "#f2f2f2",
      200: "#e6e6e6",
      300: "#cccccc",
      400: "#b3b3b3",
      500: "#999999",
      600: "#666666",
      700: "#4d4d4d",
      800: "#333333",
      900: "#1a1a1a",
    },
    blue: {
      50: "#e0f2f1",
      100: "#b9e0e0",
      200: "#8cd3e6",
      300: "#62b2d8",
      400: "#42a0d8",
      500: "#1e8bcd",
      600: "#007bb5",
      700: "#005f8d",
      800: "#003f5c",
      900: "#001f2e",
    },
    brand: {
      50: "#e5e4ff",
      100: "#c4c3ff",
      200: "#a2a1ff",
      300: "#807eff",
      400: "#5e5bff",
      500: "#6C63FF", // Cor base
      600: "#4a49cc",
      700: "#383799",
      800: "#262566",
      900: "#131233",
    },
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280pxs
    "2xl": "96em", // 1536px
    "3xl": "120em", // 1920px
  },
  styles: {
    global: {
      ...scrollbarStyle,
    },
  },
});

export default theme;
