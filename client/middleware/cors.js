// middleware/cors.js
import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  // Add additional configurations as needed
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error if anything goes wrong
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function initMiddleware(req, res) {
  await runMiddleware(req, res, cors);
}