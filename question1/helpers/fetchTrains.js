const AXIOS = require("axios")
const endpoints = require("../apiEndpoints.js")
const FS = require("fs")

const fetchTrains = async (url) => {
  await AXIOS.get(url, {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(FS.readFileSync("bearer.json"))["access_token"]
      }`,
    },
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      FS.writeFileSync("error.json", JSON.stringify(error))
      console.log("🚒 some err occured!! see err.json for more details ❌")
    })
}
module.exports = fetchTrains
