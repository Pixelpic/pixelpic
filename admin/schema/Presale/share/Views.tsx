import React from 'react';
import { Link } from '@mui/icons-material';
import { CellComponent } from '@keystone-6/core/types';
import { Root } from './Views.style';

export const Cell: CellComponent = ({ field: { label }, item: { share } }) => {
  return (
    <Root href={share} target="_blank">
      <Link />
      <span>{label}</span>
    </Root>
  );
};
