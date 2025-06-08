'use client';
import {
  ChangeLanguage,
  ChangeTheme,
  CustomTableContainer,
  CustomTableHead,
  CustomTableBody,
  CustomPage,
  CustomButton,
} from '@/components';
import { RootState } from '@/configs';
import { useAuth } from '@/contexts';
import { Logout } from '@mui/icons-material';
import { Box, Card, Table, TableCell, TableRow, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Settings() {
  const { t, i18n } = useTranslation();
  const { clearAuth } = useAuth();

  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <CustomPage>
      <Typography variant="h1">{t('pages.settings.title')}</Typography>
      <CustomButton
        variant="outlined"
        label={t('pages.settings.logout')}
        sx={{ mt: 2 }}
        onClick={() => clearAuth()}
        endIcon={<Logout />}
        disableElevation
      />
      <Card sx={{ p: 2, mt: 2 }} elevation={0}>
        <CustomTableContainer>
          <Table size="small">
            <CustomTableHead>
              <TableRow>
                <TableCell>{t('pages.settings.table.item')}</TableCell>
                <TableCell>{t('pages.settings.table.value')}</TableCell>
                <TableCell align="center">{t('pages.settings.table.actions')}</TableCell>
              </TableRow>
            </CustomTableHead>
            <CustomTableBody>
              <TableRow>
                <TableCell>{t('pages.settings.language')}</TableCell>
                <TableCell>{t(`pages.settings.languages.${i18n.language}`)}</TableCell>
                <TableCell>
                  <ChangeLanguage />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('pages.settings.theme')}</TableCell>
                <TableCell>{t(`pages.settings.themes.${theme}`)}</TableCell>
                <TableCell>
                  <Box display="flex" justifyContent="center">
                    <ChangeTheme />
                  </Box>
                </TableCell>
              </TableRow>
            </CustomTableBody>
          </Table>
        </CustomTableContainer>
      </Card>
    </CustomPage>
  );
}
