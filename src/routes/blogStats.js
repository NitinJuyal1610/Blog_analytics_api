import { Router } from 'express';
import { memoizedAnalyzeFunction } from '../lib/analyzeData.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    //analysis using loadash
    console.log(memoizedAnalyzeFunction.cache.size);
    const analyticsResult = await memoizedAnalyzeFunction();
    //response
    res.json(analyticsResult);
  } catch (error) {
    next(error);
  }
});

export { router as blogStatsRoute };
