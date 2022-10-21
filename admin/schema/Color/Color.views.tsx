import React, { FC } from 'react';
import { CellComponent, FieldProps } from '@keystone-6/core/types';
import { FieldContainer, FieldLabel, TextInput } from '@keystone-ui/fields';

export const Cell: CellComponent = ({
  item: {
    RGB: [r, g, b],
  },
}) => {
  return <>{[r, g, b].join('/')}</>;
};

export const Field: FC<FieldProps<any>> = ({ field, onChange, value: [r, g, b] }) => {
  return (
    <FieldContainer as="fieldset">
      <FieldLabel>{field.label}</FieldLabel>
      <TextInput type="text" disabled={!onChange} value={[r, g, b].join('/')} />
    </FieldContainer>
  );
};
