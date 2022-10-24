import React, { FC } from 'react';
import {
  NavigationProps,
  NavigationContainer,
  NavItem,
  ListNavItems,
} from '@keystone-6/core/admin-ui/components';
import { Title } from './NavigationGroup.style';

interface NavigationGroupProps {
  title: string;
  include: string[];
  lists: NavigationProps['lists'];
}

export const NavigationGroup: FC<NavigationGroupProps> = ({ title, lists, include }) => {
  const exists = lists.some(({ key }) => include.includes(key));

  if (exists) {
    return (
      <>
        <Title>{title}</Title>
        <ListNavItems lists={lists} include={include} />
      </>
    );
  }

  return null;
};
