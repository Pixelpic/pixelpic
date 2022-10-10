import { ConstructorStepId } from './Constructor.types';

export namespace ConstructorActions {
  interface Action<T> {
    type: T;
  }

  export enum Types {
    SET_STEP,
    SET_IMAGE,
    SET_CROP,
  }

  export class SetStep implements Action<Types> {
    public readonly type = Types.SET_STEP;
    constructor(public step: ConstructorStepId) {}
  }

  export class SetImage implements Action<Types> {
    public readonly type = Types.SET_IMAGE;
    constructor(public source: File[]) {}
  }

  export class SetCrop implements Action<Types> {
    public readonly type = Types.SET_CROP;
    constructor(public frame: string, public cropped: string) {}
  }

  export type All = SetStep | SetImage | SetCrop;
}
