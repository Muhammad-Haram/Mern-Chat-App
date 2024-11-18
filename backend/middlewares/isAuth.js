const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    next()
  } catch (error) {
    console.log(error);
  }
};

export default isAuth;
