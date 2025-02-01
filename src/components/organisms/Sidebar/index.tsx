"use client"

import React, { FC, useCallback, useState } from "react"
import {
  Drawer,
  List,
  Toolbar,
  Box,
  IconButton,
  SxProps,
  Theme,
  Divider,
} from "@mui/material"
import {
  MenuOpen,
  Menu,
  Home,
  CatchingPokemon,
  AccountCircle,
  DarkMode,
  LightMode,
} from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { MenuItem } from "@/components"
import { useAtom } from "jotai"
import { themeModeAtom } from "@/store"

interface SidebarProps {
  openInitially?: boolean
  onClose?: () => void
}

const drawerWidth = 240
const collapsedDrawerWidth = 64

export const Sidebar: FC<SidebarProps> = ({
  openInitially = true,
  onClose,
}) => {
  const { t } = useTranslation()

  const [themeMode, setThemeMode] = useAtom(themeModeAtom)
  const [collapsed, setCollapsed] = useState(!openInitially)

  const toggleTheme = () =>
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"))
  const toggleCollapsed = useCallback(() => setCollapsed((prev) => !prev), [])

  return (
    <Drawer
      variant="permanent"
      open={!collapsed}
      onClose={onClose}
      sx={drawerSx(collapsed)}
    >
      <Box role="presentation" sx={boxSx}>
        <Toolbar sx={toolbarSx(collapsed)}>
          <IconButton onClick={toggleCollapsed}>
            {collapsed ? <Menu /> : <MenuOpen />}
          </IconButton>
        </Toolbar>
        <List sx={listSx}>
          <MenuItem
            icon={<Home />}
            collapsed={collapsed}
            text={t("sidebar.home")}
            onClick={() => console.log("Ir para Home")}
          />
          <Divider />
          <MenuItem
            icon={<CatchingPokemon color="success" />}
            collapsed={collapsed}
            text={t("sidebar.livingdex")}
            onClick={() => console.log("Ir para Pokédex")}
          />
          <MenuItem
            icon={<CatchingPokemon color="primary" />}
            collapsed={collapsed}
            text={t("sidebar.pokedex")}
            onClick={() => console.log("Ir para Pokédex")}
          />
        </List>
      </Box>
      <Box>
        <List sx={listSx}>
          <MenuItem
            icon={themeMode === "light" ? <LightMode /> : <DarkMode />}
            text={t(`theme.${themeMode}`)}
            collapsed={collapsed}
            onClick={toggleTheme}
          />
          <Divider />
          <MenuItem
            icon={<AccountCircle />}
            text={t("sidebar.profile")}
            collapsed={collapsed}
            onClick={() => console.log("Ir para Perfil")}
          />
        </List>
      </Box>
    </Drawer>
  )
}

const drawerSx = (collapsed: boolean): SxProps<Theme> => ({
  width: collapsed ? collapsedDrawerWidth : drawerWidth,
  minHeight: "100vh",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    justifyContent: "space-between",
    position: "relative",
    whiteSpace: "nowrap",
    width: collapsed ? collapsedDrawerWidth : drawerWidth,
    boxSizing: "border-box",
  },
})
const toolbarSx = (collapsed: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  justifyContent: collapsed ? "center" : "flex-start",
  px: [1],
})
const listSx: SxProps<Theme> = { py: 0 }
const boxSx: SxProps<Theme> = {
  overflowX: "hidden",
}
