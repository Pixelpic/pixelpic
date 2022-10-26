import React, { Fragment, useState, useEffect } from 'react';
import { generatePath } from 'react-router';
import { DTO } from '@admin/api';
import { AttachMoney } from '@mui/icons-material';
import { CellComponent } from '@keystone-6/core/types';
import { AlertDialog } from '@keystone-ui/modals';
import { useToasts } from '@keystone-ui/toast';
import { useRouter } from '@keystone-6/core/admin-ui/router';
import { useMutation, useLazyQuery } from '@keystone-6/core/admin-ui/apollo';
import { Root } from './Views.style';
import { GET_PRESALE, CREATE_SALE, DELETE_PRESALE } from './Views.gql';
import { RoutePath } from '../../../constants';

export const Cell: CellComponent = ({ field: { label }, item: { convertToSale: id, ...rest } }) => {
  const [isOpen, toggle] = useState(false);
  const { addToast } = useToasts();
  const { push } = useRouter();

  const [fetch, { loading: fetching, data: presale }] = useLazyQuery<DTO.Query>(GET_PRESALE, {
    variables: { id },
  });

  const [create, { loading: creating, data: sale }] = useMutation<DTO.Mutation>(CREATE_SALE);

  const [del, { loading: deleting, data: image }] = useMutation(DELETE_PRESALE);

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

  useEffect(() => {
    if (sale && presale && image) {
      addToast({
        title: `Sale #${sale?.createSale?.number}`,
        message: `Presale #${presale?.presale?.number} has been successfully converted to sale #${sale?.createSale?.number}`,
        tone: 'positive',
      });
      push({
        pathname: generatePath(RoutePath.SALE, { id: sale.createSale?.id || '' }),
      });
    }
  }, [sale, presale, image]);

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
