import React, { Fragment, useState } from 'react';
import { DTO } from '@admin/api';
import { AttachMoney } from '@mui/icons-material';
import { CellComponent } from '@keystone-6/core/types';
import { AlertDialog } from '@keystone-ui/modals';
import { useMutation, useLazyQuery } from '@keystone-6/core/admin-ui/apollo';
import { Root } from './Views.style';
import { GET_PRESALE, CREATE_SALE, DELETE_PRESALE } from './Views.gql';

export const Cell: CellComponent = ({ field: { label }, item: { convertToSale: id } }) => {
  const [isOpen, toggle] = useState(false);

  const [fetch, { loading: fetching }] = useLazyQuery<DTO.Query>(GET_PRESALE, {
    variables: { id },
  });

  const [create, { loading: creating }] = useMutation(CREATE_SALE);

  const [del, { loading: deleting }] = useMutation(DELETE_PRESALE);

  const handleOnCancel = () => {
    toggle((prev) => !prev);
  };

  const handleOnConfirm = () => {
    fetch()
      .then(({ data }) =>
        create({
          variables: {
            price: data?.presale?.frame?.price,
            image: data?.presale?.image?.id,
            frame: data?.presale?.frame?.id,
          },
        })
      )
      .then(() =>
        del({
          variables: { id },
        })
      )
      .then(() => toggle(false));
  };

  const loading = fetching || creating || deleting;

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
            loading,
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
