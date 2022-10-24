import { Context } from '.keystone/types';
import { FRAMES } from './Frames.data';

export async function insertFrames(context: Context) {
  const count = await context.query.Frame.count();

  if (!count) {
    await context.query.Frame.createMany({
      data: FRAMES,
    });
  }
}
