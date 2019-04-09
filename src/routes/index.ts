import { Router, Request, Response } from 'express';

const router = Router();

router.get('/any', (req: Request, res: Response) => {
  console.log('ANYY');
});

export default router;
