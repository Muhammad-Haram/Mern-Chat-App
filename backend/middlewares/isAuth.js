import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({
        message: "user not authorized",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_KEY);

    if(!decode){
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    req.id = decode.userId;

    next();

  } catch (error) {
    console.log(error);
  }
};

export default isAuth;
