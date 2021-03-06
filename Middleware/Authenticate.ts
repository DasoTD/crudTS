const jwt = require('jsonwebtoken');

require('dotenv').config();

const {SECRET_KEY, EXPIRES_IN} = process.env;

const authenticate = async (user: any) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.userRole,
    time: new Date(),
  };

  const token = await jwt.sign(payload, SECRET_KEY, {
    expiresIn: EXPIRES_IN,
  });

  return token;
};
export { authenticate}