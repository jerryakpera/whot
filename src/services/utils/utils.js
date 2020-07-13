var base64 = require("base-64");
var utf8 = require("utf8");

function encryptObj(obj) {
  const str = JSON.stringify(obj);
  var bytes = utf8.encode(str);
  return base64.encode(bytes);
}

function decryptObj(obj) {
  return JSON.parse(base64.decode(obj));
}

function checkUserTurn(currentUser, playerName) {
  console.log("checking user")
}

const storage = {
  save: (name, data) => {
    localStorage.setItem(name, data);
  },
  get: name => {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name);
    } else return false;
  },
  remove: name => {
    if (localStorage.getItem(name)) {
      localStorage.removeItem(name);
    }
  }
};

module.exports = {
  encryptObj,
  decryptObj,
  storage,
  checkUserTurn
};
