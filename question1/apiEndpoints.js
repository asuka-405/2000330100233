const apiURL = `http://20.244.56.144/train`

const endpoints = {
  register: `${apiURL}/register`,
  auth: `${apiURL}/auth`,
  getTrains: `${apiURL}/trains`,
}
module.exports = endpoints
