const EXPRESS = require("express")
const AUTH_ROUTER = EXPRESS.Router()
const FS = require("fs")

const registerCompany = require("./helpers/createCompany.js")
const authCompany = require("./helpers/authCompany.js")

const { isCompanyRegistered } = require("./middleware.js")

if (!FS.existsSync("company.json")) {
  AUTH_ROUTER.post("/register", (req, res) => {
    registerCompany()
  })
}
AUTH_ROUTER.post("/auth", isCompanyRegistered, (req, res) => {
  // if (FS.readFileSync("bearer.json")["expires_at"] < Date.now()) {
  //   console.log(" earlier token active, using it")
  //   return res.send(JSON.parse(FS.readFileSync("bearer.json")))
  // }
  authCompany()
  return res.send(JSON.parse(FS.readFileSync("bearer.json")))
})

module.exports = AUTH_ROUTER
