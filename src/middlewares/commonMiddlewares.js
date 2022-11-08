const headerValidation = (req,res,next) => {
  const authHeader = req.headers.isfreeappuser
  if(authHeader) {
    next();
  }
  else {
    return res.send("Header is missing")
  }
}

module.exports.headerValidation = headerValidation