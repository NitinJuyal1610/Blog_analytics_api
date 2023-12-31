// routes/blogSearch.js
import { Router } from 'express';
import { memoizedSearchFunction } from '../lib/searchKeyword.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const query = req.query.query;
    if (typeof query !== 'string' || query.trim() === '') {
      throw new Error('Invalid input: "query" must be a non-empty string.');
    }
    console.log(memoizedSearchFunction.cache.size);
    //search
    const filteredBlogs = await memoizedSearchFunction(query);
    res.json(filteredBlogs);
  } catch (error) {
    next(error);
  }
});

export { router as blogSearchRoute };
