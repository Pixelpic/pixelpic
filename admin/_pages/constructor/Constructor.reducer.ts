import { ConstructorActions } from './Constructor.actions';
import { ConstructorState } from './Constructor.types';

export const constructorReducer = (
  state: ConstructorState,
  action: ConstructorActions.All
): ConstructorState => {
  switch (action.type) {
    case ConstructorActions.Types.SET_STATE:
      return {
        ...state,
        ...action.state,
      };
    default:
      return state;
  }
};
