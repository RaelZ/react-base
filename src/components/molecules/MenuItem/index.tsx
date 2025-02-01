"use client"

import React, { forwardRef } from "react"
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemProps,
  Tooltip,
} from "@mui/material"
import { SvgIconProps } from "@mui/material/SvgIcon"

interface MenuItemProps extends ListItemProps {
  icon: React.ReactElement<SvgIconProps> | React.ReactNode
  collapsed: boolean
  text?: string
}

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ icon, text, collapsed, sx, ...props }, ref) => {
    return (
      <Tooltip title={text} disableHoverListener={!collapsed}>
        <ListItem
          ref={ref}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            cursor: "pointer",
            my: 1,
            ...sx,
          }}
          {...props}
        >
          <ListItemIcon sx={{ minWidth: "fit-content", pr: !collapsed ? 2 : 0 }}>
            {icon}
          </ListItemIcon>
          {!collapsed && <ListItemText primary={text} />}
        </ListItem>
      </Tooltip>
    )
  }
)

MenuItem.displayName = "MenuItem"
