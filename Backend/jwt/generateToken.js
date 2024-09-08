import jwt from "jsonwebtoken";

const createTokenandSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "10d",
  });
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/', // Ensure the path is set correctly
  });
  
};

export default createTokenandSaveCookie;
