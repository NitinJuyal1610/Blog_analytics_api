import { Router } from 'express';
import { memoizedAnalyzeFunction } from '../lib/analyzeData';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    //analysis using loadash
    const analyticsResult = await memoizedAnalyzeFunction();
    //response
    res.json(analyticsResult);
  } catch (error) {
    next(error);
  }
});

export { router as blogStatsRoute };
