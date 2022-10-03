import { Context } from '.keystone/types';
import { COLORS } from './Colors.data';

export async function insertColors(context: Context) {
  const count = await context.query.Color.count();
  console.log(count);

  if (!count) {
    console.log(123);
    await context.query.Color.createMany({
      data: COLORS,
    });
  }
}
