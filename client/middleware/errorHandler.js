const errorHandler = (fn) => async (req, res) => {
	try {
	  await fn(req, res);
	} catch (err) {
	  console.error(err); // Or use a more sophisticated error logging mechanism
	  res.status(500).json({ message: 'Internal Server Error' });
	}
  };
  export default errorHandler;