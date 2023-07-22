if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const AXIOS = require("axios")
const EXPRESS = require("express")
const APP = EXPRESS()
const CORS = require("cors")
const PORT = 3000
const FS = require("fs")

const AUTH_ROUTER = require("./authRouter.js")
const { isCompanyAuthenticated } = require("./middleware.js")
const fetchTrains = require("./helpers/fetchTrains.js")
const endpoints = require("./apiEndpoints.js")
const CORS_OPTIONS = {
  origin: "*",
  optionsSuccessStatus: 200,
}

APP.use(CORS(CORS_OPTIONS))
APP.use("/auth", AUTH_ROUTER)

APP.get("/trains", isCompanyAuthenticated, async (req, res) => {
  const trains = await fetchTrains(endpoints.getTrains)
  res.status(200).send({ trains })
})

APP.get("/trains/:trainId", isCompanyAuthenticated, async (req, res) => {
  const train = await fetchTrains(
    endpoints.getTrains + `/${req.params.trainId}`
  )
  res.status(200).send({ train })
})

APP.listen(PORT, () => {
  console.log(`✨✨listening on port ${PORT}⚡⚡`)
})
