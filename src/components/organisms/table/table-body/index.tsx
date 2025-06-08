import { TableBody } from '@mui/material';
import React from 'react';

export const CustomTableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TableBody
      sx={{
        '& tr > td:first-of-type': {
          borderRight: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: (theme) => theme.palette.background.default,
        },
        '& tr:last-of-type > td': {
          borderBottom: 0,
        },
      }}
    >
      {children}
    </TableBody>
  );
};
