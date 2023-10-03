import _ from 'lodash';
import { fetchBlogs } from './fetchBlogs.js';
const searchFunction = async (query) => {
  try {
    const blogData = await fetchBlogs();
    if (!blogData || typeof blogData !== 'object' || !blogData.blogs) {
      throw new Error('Invalid blog data');
    }

    const { blogs } = blogData;

    const filteredBlogs = blogs.filter((blog) => {
      return _.includes(_.toLower(blog.title), _.toLower(query));
    });

    return filteredBlogs;
  } catch (error) {
    console.error('Error in searchKeyword:', error.message);
    throw error;
  }
};

export const memoizedSearchFunction = _.memoize(searchFunction);
