import React from 'react';
import { Button } from '@mui/material';
import { Link } from '@mui/icons-material';
import { CellComponent } from '@keystone-6/core/types';

export const Cell: CellComponent = ({ field: { label }, item: { share } }) => {
  return (
    <Button href={share} target="_blank" startIcon={<Link />}>
      {label}
    </Button>
  );
};
