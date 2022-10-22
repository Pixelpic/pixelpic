import { castArray } from 'lodash';
import {
  MaybeSessionFunction,
  BaseListTypeInfo,
  ListOperationAccessControl,
} from '@keystone-6/core/types';
import { UserRole } from '../constants';

type Operation = 'create' | 'update' | 'query' | 'delete';

export const isAdmin = (predicate: boolean): MaybeSessionFunction<boolean, BaseListTypeInfo> => {
  return ({
    session: {
      data: { role },
    },
  }) => {
    return (role === UserRole.ADMIN) === predicate;
  };
};

export const listOperationAccessControl = <T extends Operation>(
  role: UserRole | UserRole[]
): ListOperationAccessControl<T, BaseListTypeInfo> => {
  return ({
    session: {
      data: { role: currentRole },
    },
  }) => {
    return role === currentRole;
  };
};
