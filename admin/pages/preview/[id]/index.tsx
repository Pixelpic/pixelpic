import React, { FC } from 'react';
import { useRouter } from '@keystone-6/core/admin-ui/router';

const Preview: FC = () => {
  const {
    query: { id },
  } = useRouter();

  return <>{id}</>;
};

export default Preview;
