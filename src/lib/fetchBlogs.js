import axios from 'axios';
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(
      'https://intent-kit-16.hasura.app/api/rest/blogs',
      {
        headers: {
          'x-hasura-admin-secret':
            '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error in fetchBlogs:', error.message);
    throw error;
  }
};
