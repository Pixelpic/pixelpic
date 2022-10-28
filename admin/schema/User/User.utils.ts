import { BaseListTypeInfo, MaybeItemFunction } from '@keystone-6/core/types';
import { UserRole } from '../../constants';

export const itemViewFieldMode: MaybeItemFunction<'edit' | 'read' | 'hidden', BaseListTypeInfo> = ({
  session: {
    data: { id: sessionId, role },
  },
  item: { id: userId },
}) => {
  if (role === UserRole.ADMIN) {
    return 'edit';
  }
  if (sessionId === userId) {
    return 'edit';
  }
  return 'read';
};
