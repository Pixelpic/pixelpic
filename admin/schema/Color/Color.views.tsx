import React from 'react';
import { CellComponent } from '@keystone-6/core/types';

export const Cell: CellComponent = ({
  item: {
    RGB: [r, g, b],
  },
}) => {
  return <>{[r, g, b].join('/')}</>;
};
