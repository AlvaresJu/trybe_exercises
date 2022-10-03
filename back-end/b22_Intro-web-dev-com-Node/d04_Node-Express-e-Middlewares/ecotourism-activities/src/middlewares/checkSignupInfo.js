const checkSignupInfo = (req, _res, next) => {
  const requireInfo = ['email', 'password', 'firstName', 'phone'];
  const requestData = { ...req.body };
  if (requireInfo.some((info) => !requestData[info])) {
    const err = { statusCode: 401, message: 'Campos ausentes!' };
    next(err);
  } else {
    next();
  }
};

module.exports = checkSignupInfo;
