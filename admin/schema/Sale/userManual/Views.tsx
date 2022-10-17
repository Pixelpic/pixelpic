import React from 'react';
import { Link } from '@mui/icons-material';
import { CellComponent } from '@keystone-6/core/types';
import { Root } from './Views.style';

export const Cell: CellComponent = ({ field: { label }, item: { userManual } }) => {
  return (
    <Root href={userManual} target="_blank">
      <Link />
      <span>{label}</span>
    </Root>
  );
};
