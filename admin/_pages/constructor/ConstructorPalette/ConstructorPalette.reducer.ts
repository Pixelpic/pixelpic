import { ConstructorPaletteActions } from './ConstructorPalette.actions';

export interface ConstructorPaletteState {
  palette: string;
}

export const constructorPaletteReducer = (
  state: ConstructorPaletteState,
  action: ConstructorPaletteActions.All
): ConstructorPaletteState => {
  switch (action.type) {
    case ConstructorPaletteActions.Types.SET_PALETTE:
      return { ...state, palette: action.palette };

    default:
      return state;
  }
};
