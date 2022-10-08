import {
  ConstructorCropArea,
  ConstructorCropAspect,
  ConstructorCropPoint,
} from './ConstructorCrop.types';

export namespace ConstructorCropActions {
  interface Action<T> {
    type: T;
  }

  export enum Types {
    SET_ZOOM,
    SET_AREA,
    SET_SOURCE,
    SET_ASPECT,
    SET_CROP,
  }

  export class SetZoom implements Action<Types> {
    public readonly type = Types.SET_ZOOM;
    constructor(public zoom: number) {}
  }

  export class SetArea implements Action<Types> {
    public readonly type = Types.SET_AREA;
    constructor(public area: ConstructorCropArea) {}
  }

  export class SetSource implements Action<Types> {
    public readonly type = Types.SET_SOURCE;
    constructor(public source: string) {}
  }

  export class SetAspect implements Action<Types> {
    public readonly type = Types.SET_ASPECT;
    constructor(public aspect: ConstructorCropAspect) {}
  }

  export class SetCrop implements Action<Types> {
    public readonly type = Types.SET_CROP;
    constructor(public crop: ConstructorCropPoint) {}
  }

  export type All = SetZoom | SetArea | SetSource | SetAspect | SetCrop;
}
