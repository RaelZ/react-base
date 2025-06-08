import { TableContainer } from '@mui/material';
import React from 'react';

export const CustomTableContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TableContainer
      sx={{
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
      }}
    >
      {children}
    </TableContainer>
  );
};
