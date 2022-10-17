import { Router } from 'express';

const UserManualRouter = Router();

UserManualRouter.get('/', (req, res) => {
  res.send('123');
});

export { UserManualRouter };
