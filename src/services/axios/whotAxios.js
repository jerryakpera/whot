const axios = require("axios")

const whotAxios = axios.create({
  baseURL: "http://localhost:3002/api/v1"
})

module.exports = whotAxios
