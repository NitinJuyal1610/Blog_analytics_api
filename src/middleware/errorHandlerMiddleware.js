export function errorHandlerMiddleware(err, req, res, next) {
  let status = 500;
  let message = 'Internal Server Error';

  // Handle API errors
  if (err.response) {
    status = err.response.status;
    message = err.response.data.message || 'Error from external API';
  } else if (
    err instanceof SyntaxError &&
    err.status === 400 &&
    'body' in err
  ) {
    // Handle invalid JSON
    status = 400;
    message = 'Bad Request - Invalid JSON';
  } else if (err.message === 'Invalid blog data') {
    // Handle Invalid blog data error
    status = 400;
    message = 'Bad Request - Invalid blog data';
  }

  console.error(err);
  res.status(status).json({ error: message });
}
