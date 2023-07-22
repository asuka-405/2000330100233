if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const AXIOS = require("axios")
const endpoints = require("../apiEndpoints.js")
const FS = require("fs")

const authCompany = () => {
  AXIOS.post(endpoints.auth, JSON.parse(FS.readFileSync("company.json")))
    .then((res) => {
      console.log(res.data)
      res.data["expires_at"] = Date.now() + res.data["expires_in"] * 1000
      FS.writeFileSync("bearer.json", JSON.stringify(res.data))
      res.send(res.data)
    })
    .catch((err) => {
      FS.writeFileSync("auth_error.txt", err)
      console.log("🚒 some err occured!! see auth_err.json for more details ❌")
    })
}

module.exports = authCompany
