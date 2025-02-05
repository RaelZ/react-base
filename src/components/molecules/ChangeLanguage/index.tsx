'use client';

import { languages } from '@/translations/langs';
import { IconButton, Menu, MenuItem, SxProps, Theme, Typography } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtom } from 'jotai';
import { languageAtom } from '@/store';

export const ChangeLanguage: React.FC = () => {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [selectedLanguage, setSelectedLanguage] = useAtom(languageAtom);

  useEffect(() => {
    if (selectedLanguage && selectedLanguage !== i18n.language) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [selectedLanguage, i18n]);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = useCallback(
    (lang: string) => {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
        localStorage.setItem('language', lang);

        if (pathname) {
          const path = pathname.split('/');
          path[1] = lang;
          push(path.join('/'));
        }
      }
      handleCloseMenu();
    },
    [i18n, pathname, push, setSelectedLanguage],
  );

  return (
    <>
      <IconButton
        sx={iconButtonSx}
        onClick={handleOpenMenu}
        aria-controls={anchorEl ? 'language-menu' : undefined}
        aria-haspopup='true'
      >
        <Typography>{i18n.language.toUpperCase()}</Typography>
      </IconButton>
      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} onClick={() => handleChangeLanguage(lang.code)}>
            {t(lang.label).toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const iconButtonSx: SxProps<Theme> = {
  maxHeight: 24,
  maxWidth: 24,
};
