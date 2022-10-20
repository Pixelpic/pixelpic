import React from 'react';
import { Widgets } from '@mui/icons-material';
import { CellComponent } from '@keystone-6/core/types';
import { Root } from './Views.style';

export const Cell: CellComponent = ({ field: { label }, item: { userManual } }) => {
  return (
    <Root href={userManual} target="_blank">
      <Widgets />
      <span>{label}</span>
    </Root>
  );
};
