import { Context } from '.keystone/types';

export async function insertPalette(context: Context) {
  const count = await context.query.Palette.count();

  if (!count) {
    const connect = await context.query.Color.findMany();

    await context.query.Palette.createOne({
      data: {
        name: 'Full',
        colors: {
          connect,
        },
      },
    });
  }
}
