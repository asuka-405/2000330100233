const AXIOS = require("axios")
const FS = require("fs")

const fetchTrains = async (url) => {
  const res = await AXIOS.get(url, {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(FS.readFileSync("bearer.json"))["access_token"]
      }`,
    },
  })
    .then((response) => {
      return response
    })
    .catch((error) => {
      FS.writeFileSync("error.json", error)
      console.log("🚒 some err occured!! see err.json for more details ❌")
    })
  return res
}
module.exports = fetchTrains
