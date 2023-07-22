const FS = require("fs")
const PATH = require("path")

function isCompanyRegistered(req, res, next) {
  if (FS.existsSync(PATH.join(__dirname, "company.json"))) return next()
  res.redirect("/auth/register")
}

function isCompanyAuthenticated(req, res, next) {
  if (FS.existsSync(PATH.join(__dirname, "bearer.json"))) return next()
  res.redirect("/auth/auth")
}

module.exports = {
  isCompanyRegistered,
  isCompanyAuthenticated,
}
