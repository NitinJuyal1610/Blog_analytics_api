// app.js
import express from 'express';
const app = express();

// Middleware
import { errorHandlerMiddleware } from './middleware/errorHandlerMiddleware.js';

// Routes
import { blogStatsRoute } from './routes/blogStats.js';
import { blogSearchRoute } from './routes/blogSearch.js';

// Define routes
app.use('/api/blog-stats', blogStatsRoute);
app.use('/api/blog-search', blogSearchRoute);

// Error handling middleware
app.use(errorHandlerMiddleware);

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
