if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const AXIOS = require("axios")
const endpoints = require("../apiEndpoints.js")

const registerCompany = () => {
  AXIOS.post(endpoints.register, {
    companyName: "Asuka Railway Company Ltd.",
    ownerName: "Suryansh Kapil",
    rollNo: "2000330100233",
    ownerEmail: "suryanshkapil405@gmail.com",
    accessCode: process.env.API_KEY,
  })
    .then((response) => {
      console.log(response.data)
      FS.writeFileSync("../company.json", JSON.stringify(response.data))
      res.send(response.data)
    })
    .catch((error) => {
      FS.writeFileSync("../reg_error.json", JSON.stringify(error))
      console.log("🚒 some err occured!! see err.json for more details ❌")
    })
}

module.exports = registerCompany
