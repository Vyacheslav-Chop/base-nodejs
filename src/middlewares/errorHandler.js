export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    messaage: 'Something went wrong!',
    error: err.messaage,
  });
};
