import _ from 'lodash';
import { fetchBlogs } from './fetchBlogs';
const analyzeFunction = async () => {
  try {
    const blogData = await fetchBlogs();
    if (!blogData || typeof blogData !== 'object' || !blogData.blogs) {
      throw new Error('Invalid blog data');
    }

    const totalBlogs = _.size(blogs);
    const longestTitledBlog = _.maxBy(blogs, _.property('title.length'));
    const blogsWithPrivacy = _.filter(blogs, ({ title }) => {
      return _.includes(_.toLower(title), 'privacy');
    });
    257;
    const uniqueBlogs = _.map(_.uniqBy(blogs, 'title'), 'title');

    const analyticsResult = {
      totalBlogs: totalBlogs,
      longestTitledBlog: longestTitledBlog,
      blogsWithPrivacy: _.size(blogsWithPrivacy),
      uniqueBlogs: uniqueBlogs,
    };
    return analyticsResult;
  } catch (error) {
    console.error('Error in analyzeData:', error.message);
    throw error;
  }
};

console.log(memoizedAnalyzeFunction.cache.size);
export const memoizedAnalyzeFunction = _.memoize(analyzeFunction);
