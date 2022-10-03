import { Context } from '.keystone/types';
import { COLORS } from './Colors.data';

export async function insertColors(context: Context) {
  const count = await context.query.Color.count();

  if (!count) {
    await context.query.Color.createMany({
      data: COLORS,
    });
  }
}
