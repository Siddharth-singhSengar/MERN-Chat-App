import jwt from "jsonwebtoken";

const createTokenandSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "100d",
  });
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/', // Ensure the path is set correctly
  });
  
};

export default createTokenandSaveCookie;
