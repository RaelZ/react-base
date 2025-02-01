"use client"

import React from "react"
import { useAtom } from "jotai"
import { themeModeAtom } from "@/store/theme"
import { ThemeProvider } from "@mui/material"
import { darkTheme, lightTheme } from "@/themes"
import { MainLayout } from "@/components"

export const ThemeConsumer = ({ children }: { children: React.ReactNode }) => {
  const [themeMode] = useAtom(themeModeAtom)

  const currentTheme = themeMode === "dark" ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  )
}
