import React, { FC } from 'react';
import { DTO } from '@admin/api';
import { useQuery } from '@keystone-6/core/admin-ui/apollo';
import { Backdrop, CircularProgress } from '@mui/material';
import { useRouter } from '@keystone-6/core/admin-ui/router';
import { Root, Image } from './Preview.style';
import { GET_PRESALE } from './Preview.gql';

const Preview: FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { loading, data } = useQuery<DTO.Query>(GET_PRESALE, {
    variables: { id },
  });

  const src = data?.presale?.image?.image?.publicUrl;

  return (
    <Root>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {src && <Image src={src} />}
    </Root>
  );
};

export default Preview;
