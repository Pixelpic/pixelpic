import React from 'react';
import {
  NavigationProps,
  NavigationContainer,
  NavItem,
} from '@keystone-6/core/admin-ui/components';
import { RoutePath } from '../../constants';
import { NavigationGroup } from './NavigationGroup/NavigationGroup';

export const Navigation = ({ lists, authenticatedItem }: NavigationProps) => {
  return (
    <NavigationContainer authenticatedItem={authenticatedItem}>
      <NavItem href={RoutePath.CONSTRUCTOR}>Constructor</NavItem>
      <NavigationGroup title="ORDERS" lists={lists} include={['Presale', 'Sale']} />
      <NavigationGroup title="RESOURCES" lists={lists} include={['Color', 'Palette', 'Frame']} />
      <NavigationGroup title="CONTACTS" lists={lists} include={['User']} />
      <NavigationGroup title="META" lists={lists} include={['Image']} />
    </NavigationContainer>
  );
};
