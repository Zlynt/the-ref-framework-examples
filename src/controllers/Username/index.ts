import { Router, Request, Response } from 'express';
import RandomName from '../../models/RandomName';

const router = Router({ mergeParams: true });

//#region Routes

router.post('/', (req: Request, res: Response) => {
  const username = new RandomName();
  res.header(200).end(username.get());
});

//#endregion

export default router;
