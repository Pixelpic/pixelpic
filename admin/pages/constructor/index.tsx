/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { Heading } from '@keystone-ui/core';

export default function Constructor() {
  return <PageContainer header={<Heading type="h3">Constructor</Heading>}>123</PageContainer>;
}
