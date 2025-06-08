'use client';
import React from 'react';
import { ChangeLanguage, ChangeTheme, CustomButton, CustomPage } from '@/components';
import { Card, TextField, Typography, Checkbox, FormControlLabel, Grid2, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@/contexts';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('{{t("pages.login.errors.emailInvalid")}}')
    .required('{{t("pages.login.errors.emailRequired")}}'),
  password: Yup.string().required('{{t("pages.login.errors.passwordRequired")}}'),
});

const gridSize = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

export default function Login() {
  const { t } = useTranslation();
  const { setAuth } = useAuth();

  return (
    <CustomPage>
      <Card sx={{ p: 4, maxWidth: 400, mx: 'auto' }} elevation={0}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h5" gutterBottom>
            {t('pages.login.title')}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <ChangeLanguage />
            <ChangeTheme />
          </Box>
        </Box>
        <Formik
          initialValues={{ email: '', password: '', remember: false }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setAuth('1', 'token');
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, handleChange, values, touched, errors }) => (
            <Form>
              <Grid2 container spacing={2}>
                <Grid2 size={gridSize}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label={t('pages.login.email')}
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid2>
                <Grid2 size={gridSize}>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label={t('pages.login.password')}
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Grid2>
                <Grid2 size={gridSize}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="remember"
                        name="remember"
                        checked={values.remember}
                        onChange={handleChange}
                      />
                    }
                    label={t('pages.login.remember')}
                  />
                </Grid2>
                <Grid2 size={gridSize}>
                  <CustomButton
                    fullWidth
                    variant="outlined"
                    label={t('pages.login.submit')}
                    type="submit"
                    disabled={isSubmitting}
                    disableElevation
                  />
                </Grid2>
              </Grid2>
            </Form>
          )}
        </Formik>
      </Card>
    </CustomPage>
  );
}
