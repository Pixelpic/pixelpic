import { ConstructorStepId, ConstructorState } from './Constructor.types';

export namespace ConstructorActions {
  interface Action<T> {
    type: T;
  }

  export enum Types {
    SET_STEP,
    SET_IMAGE,
    SET_CROP,
    SET_STATE,
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

  export class SetState implements Action<Types> {
    public readonly type = Types.SET_STATE;
    constructor(public state: Partial<ConstructorState>) {}
  }

  export type All = SetStep | SetImage | SetCrop | SetState;
}
