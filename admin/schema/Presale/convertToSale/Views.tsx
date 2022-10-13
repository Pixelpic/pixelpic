import React, { Fragment, useState } from 'react';
import { AttachMoney } from '@mui/icons-material';
import { CellComponent } from '@keystone-6/core/types';
import { AlertDialog } from '@keystone-ui/modals';
import { Root } from './Views.style';

export const Cell: CellComponent = ({ field: { label }, item: { share } }) => {
  const [isOpen, toggle] = useState(false);

  const handleOnCancel = () => {
    toggle((prev) => !prev);
  };

  const handleOnConfirm = () => {
    toggle((prev) => !prev);
  };

  return (
    <Fragment>
      <AlertDialog
        isOpen={isOpen}
        title="Convert to sale confirmation"
        actions={{
          cancel: {
            label: 'Cancel',
            action: handleOnCancel,
          },
          confirm: {
            label: 'Convert',
            action: handleOnConfirm,
          },
        }}
      >
        Are you sure you want to convert this presale to sale?
      </AlertDialog>
      <Root href="javascript:void(0)" onClick={() => toggle(true)}>
        <AttachMoney />
        <span>{label}</span>
      </Root>
    </Fragment>
  );
};
