import jwt from "jsonwebtoken";

const createTokenandSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss
    secure: true,
    sameSite: "strict", // csrf
  });
};

export default createTokenandSaveCookie;
