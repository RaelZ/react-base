"use client"
import { createTheme, ThemeOptions } from "@mui/material/styles"
import { PaletteMode } from "@mui/material"

/**
 * Paletas de cores base para light e dark
 */
const lightPalette = {
  background: {
    default: "#f7f7f7",
    paper: "#FFFFFF",
  },
  text: {
    primary: "#1a1a1a",
    secondary: "#666666",
  },
  primary: {
    main: "#ff8400", // cor de destaque
  },
  secondary: {
    main: "#1a1a1a",
  },
}

const darkPalette = {
  background: {
    default: "#1a1a1a",
    paper: "#2c2c2c",
  },
  text: {
    primary: "#f7f7f7",
    secondary: "#bfbfbf",
  },
  primary: {
    main: "#ff8400", // cor de destaque
  },
  secondary: {
    main: "#f7f7f7",
  },
}

/**
 * Gera o objeto de opções de tema baseado no modo (light ou dark).
 */
const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light" ? lightPalette : darkPalette),
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
      // Você pode adicionar outras fontes personalizadas
    ].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.4,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8, // base spacing (1x = 8px)
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

/**
 * Exporte instâncias prontas de tema para uso.
 * Você pode trocar entre lightTheme e darkTheme dinamicamente
 * caso queira oferecer um toggle de tema.
 */
export const lightTheme = createTheme(getDesignTokens("light"))
export const darkTheme = createTheme(getDesignTokens("dark"))
