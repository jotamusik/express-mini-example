
const isUserAuthenticated = (token) => token === 'token';


const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if ( isUserAuthenticated(token) ) {
    return next();
  }
  throw new Error('Unauthorized');
};

module.exports = {
  authenticate,
}
