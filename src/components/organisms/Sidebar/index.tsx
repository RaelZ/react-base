'use client';
import React, { FC, useCallback, useState } from 'react';
import { Drawer, List, Toolbar, Box, IconButton, SxProps, Theme, Divider } from '@mui/material';
import { MenuOpen, Menu, AccountCircle, Home } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { MenuItem, ChangeTheme, ChangeLanguage } from '@/components';
import { routes } from '@/routes';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  openInitially?: boolean;
  onClose?: () => void;
}

const drawerWidth = 240;
const collapsedDrawerWidth = 64;

export const Sidebar: FC<SidebarProps> = ({ openInitially = true, onClose }) => {
  const { push } = useRouter();
  const { t, i18n } = useTranslation();
  const lang = `/${i18n.language}`;

  const [collapsed, setCollapsed] = useState(!openInitially);
  const toggleCollapsed = useCallback(() => setCollapsed((prev) => !prev), []);

  return (
    <Drawer variant='permanent' open={!collapsed} onClose={onClose} sx={drawerSx(collapsed)}>
      <Box role='presentation' sx={boxSx}>
        <Toolbar sx={toolbarSx(collapsed)}>
          <IconButton onClick={toggleCollapsed}>{collapsed ? <Menu /> : <MenuOpen />}</IconButton>
        </Toolbar>
        <List sx={listSx}>
          <MenuItem
            icon={<Home />}
            collapsed={collapsed}
            text={t(`sidebar.home`)}
            onClick={() => push(lang)}
          />
          <Divider />
          {routes.map(({ color, icon: Icon, path, text }) => {
            const route = lang + path;

            return (
              <MenuItem
                key={text}
                icon={<Icon color={color} />}
                collapsed={collapsed}
                text={t(`sidebar.${text}`)}
                onClick={() => push(route)}
              />
            );
          })}
        </List>
      </Box>
      <Box>
        <List sx={listSx}>
          <Divider />
          <MenuItem
            icon={<AccountCircle />}
            text={t('sidebar.profile')}
            collapsed={collapsed}
            onClick={() => console.log('Ir para Perfil')}
          />
          <Divider />
          <Box
            display='flex'
            p={1}
            gap={1}
            flexDirection={collapsed ? 'column-reverse' : 'row'}
            alignItems='center'
          >
            <ChangeTheme />
            <ChangeLanguage />
          </Box>
        </List>
      </Box>
    </Drawer>
  );
};

const drawerSx = (collapsed: boolean): SxProps<Theme> => ({
  width: collapsed ? collapsedDrawerWidth : drawerWidth,
  minHeight: '100vh',
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    justifyContent: 'space-between',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: collapsed ? collapsedDrawerWidth : drawerWidth,
    boxSizing: 'border-box',
  },
});
const toolbarSx = (collapsed: boolean): SxProps<Theme> => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: collapsed ? 'center' : 'flex-start',
  px: [1],
});
const listSx: SxProps<Theme> = { py: 0 };
const boxSx: SxProps<Theme> = {
  overflowX: 'hidden',
};
