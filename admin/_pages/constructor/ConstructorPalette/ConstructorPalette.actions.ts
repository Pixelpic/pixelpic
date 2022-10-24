export namespace ConstructorPaletteActions {
  interface Action<T> {
    type: T;
  }

  export enum Types {
    SET_PALETTE,
  }

  export class SetPalette implements Action<Types> {
    public readonly type = Types.SET_PALETTE;
    constructor(public palette: string) {}
  }

  export type All = SetPalette;
}
