import React, { FC } from 'react';
import { CellComponent, FieldProps } from '@keystone-6/core/types';
import { FieldContainer, FieldLabel, TextInput } from '@keystone-ui/fields';
import { Brick } from './brick.style';

export const Cell: CellComponent = ({ item: { brick } }) => {
  return <Brick rgb={brick} />;
};
