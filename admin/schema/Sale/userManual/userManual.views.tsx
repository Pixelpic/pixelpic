import React, { FC } from 'react';
import { Widgets } from '@mui/icons-material';
import { CellComponent, FieldProps } from '@keystone-6/core/types';
import { FieldContainer, FieldLabel } from '@keystone-ui/fields';
import { Link } from '../Sale.style';

export const Cell: CellComponent = ({ field: { label }, item: { userManual } }) => {
  return (
    <Link href={userManual} target="_blank">
      <Widgets />
      <span>{label}</span>
    </Link>
  );
};

export const Field: FC<FieldProps<any>> = ({ field, onChange, value }) => {
  return (
    <FieldContainer as="fieldset">
      <FieldLabel>{field.label}</FieldLabel>
      <Link href={value} target="_blank">
        <Widgets />
        <span>{field.label}</span>
      </Link>
    </FieldContainer>
  );
};
