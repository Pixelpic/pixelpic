import { ConstructorActions } from './Constructor.actions';
import { ConstructorStepId } from './Constructor.types';

export interface ConstructorState {
  step: ConstructorStepId;
  source: File[];
  crop: string;
  frame: string;
}

export const constructorReducer = (
  state: ConstructorState,
  action: ConstructorActions.All
): ConstructorState => {
  switch (action.type) {
    case ConstructorActions.Types.SET_STEP:
      return {
        ...state,
        step: action.step,
      };
    case ConstructorActions.Types.SET_IMAGE:
      return {
        ...state,
        step: ConstructorStepId.CROP,
        source: action.source,
      };
    case ConstructorActions.Types.SET_CROP:
      return {
        ...state,
        step: ConstructorStepId.PALETTE,
        frame: action.frame,
        crop: action.crop,
      };
    default:
      return state;
  }
};
