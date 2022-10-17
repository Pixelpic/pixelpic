import React from 'react';
import { MenuBook } from '@mui/icons-material';
import { CellComponent } from '@keystone-6/core/types';
import { Root } from './Views.style';

export const Cell: CellComponent = ({ field: { label }, item: { boxManual } }) => {
  return (
    <Root href={boxManual} target="_blank">
      <MenuBook />
      <span>{label}</span>
    </Root>
  );
};
