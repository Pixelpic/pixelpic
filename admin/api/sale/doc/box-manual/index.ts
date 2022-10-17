import { Router } from 'express';

const BoxManualRouter = Router();

BoxManualRouter.get('/', (req, res) => {
  res.send('123');
});

export { BoxManualRouter };
