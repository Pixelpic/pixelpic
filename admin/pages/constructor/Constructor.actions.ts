export namespace ConstructorActions {
  interface Action<T> {
    type: T;
  }

  export enum Types {
    SET_IMAGE,
    SET_CROP,
  }

  export class SetImage implements Action<Types> {
    public readonly type = Types.SET_IMAGE;
    constructor(public source: File[]) {}
  }

  export class SetCrop implements Action<Types> {
    public readonly type = Types.SET_CROP;
    constructor(public frame: string, public crop: string) {}
  }

  export type All = SetImage | SetCrop;
}
