const headerValidation = (req,res,next) => {
  const authHeader = req.headers.isfreeappuser;
  if(authHeader) {
    let authHeader = authHeader.toString() === "true"? true: false
    req.authHeader = authHeader
    next();
  }
  else {
    return res.send("Header is missing")
  }
}

module.exports.headerValidation = headerValidation