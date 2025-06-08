import { Box, SxProps } from '@mui/material';
import React from 'react';

export const CustomPage: React.FC<{ children: React.ReactNode; sx?: SxProps }> = ({
  children,
  sx,
}) => {
  return (
    <Box p={2} sx={{ backgroundColor: (theme) => theme.palette.background.default, ...sx }}>
      {children}
    </Box>
  );
};
