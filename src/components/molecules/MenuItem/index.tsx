'use client';

import React, { forwardRef } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemProps,
  Tooltip,
  SxProps,
  Theme,
} from '@mui/material';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface MenuItemProps extends ListItemProps {
  icon: React.ReactElement<SvgIconProps> | React.ReactNode;
  collapsed: boolean;
  text?: string;
}

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ icon, text, collapsed, sx, ...props }, ref) => {
    return (
      <Tooltip title={text} disableHoverListener={!collapsed}>
        <ListItem ref={ref} sx={listItemSx(sx)} {...props}>
          <ListItemIcon sx={listItemIconSx(collapsed)}>{icon}</ListItemIcon>
          {!collapsed && <ListItemText primary={text} />}
        </ListItem>
      </Tooltip>
    );
  },
);

const listItemIconSx = (collapsed: boolean) => ({
  minWidth: 'fit-content',
  pr: !collapsed ? 2 : 0,
});
const listItemSx = (sx?: SxProps<Theme>) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  cursor: 'pointer',
  my: 1,
  ...sx,
});

MenuItem.displayName = 'MenuItem';
