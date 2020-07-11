const axios = require("axios")

const whotAxios = axios.create({
  baseURL: "https://whotserver.herokuapp.com/api/v1/"
  // baseURL: "http://localhost:3002/api/v1"
})

module.exports = whotAxios
