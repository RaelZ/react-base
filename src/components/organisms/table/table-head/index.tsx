import { TableHead } from '@mui/material';
import React from 'react';

export const CustomTableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TableHead
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      {children}
    </TableHead>
  );
};
