/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { NavigationProps, NavigationContainer, NavItem, ListNavItems } from '@keystone-6/core/admin-ui/components';
import { RoutePath } from '../../constants';
import { NavItemSectionTitle } from './Navigation.style';

export const Navigation = ({ lists, authenticatedItem }: NavigationProps) => {
  return (
    <NavigationContainer authenticatedItem={authenticatedItem}>
      <NavItem href={RoutePath.CONSTRUCTOR}>Constructor</NavItem>
      <NavItemSectionTitle>ORDERS</NavItemSectionTitle>
      <ListNavItems lists={lists} include={['Presale', 'Sale']} />
      <NavItemSectionTitle>RESOURCES</NavItemSectionTitle>
      <ListNavItems lists={lists} include={['Color', 'Palette', 'Frame']} />
      <NavItemSectionTitle>CONTACTS</NavItemSectionTitle>
      <ListNavItems lists={lists} include={['User']} />
    </NavigationContainer>
  );
};
