import { castArray } from 'lodash';
import {
  MaybeSessionFunction,
  BaseListTypeInfo,
  ListOperationAccessControl,
  MaybeItemFunction,
} from '@keystone-6/core/types';
import { UserRole } from '../constants';

type Operation = 'create' | 'update' | 'query' | 'delete';
type View = 'read' | 'edit' | 'hidden';

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
    return castArray(role).includes(currentRole);
  };
};

export const fieldMode = <T extends View>(
  permissions: Record<UserRole, View>
): { fieldMode: MaybeItemFunction<T, BaseListTypeInfo> } => {
  return {
    fieldMode: ({
      session: {
        data: { role: currentRole },
      },
    }) => {
      return permissions[currentRole as UserRole] as T;
    },
  };
};
