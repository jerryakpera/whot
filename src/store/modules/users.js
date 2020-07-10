const whotAxios = require("../../services/axios/whotAxios");
const _ = require("../../services/utils/utils");

const state = {
  isLoggedIn: false,
  user: {}
};

const getters = {
  isLoggedIn: () => state.isLoggedIn,
  whotUser: () => state.user
};

const actions = {
  registerUser({
    commit
  }, user) {
    return new Promise((resolve, reject) => {
      whotAxios
        .post("/auth/register-user", user)
        .then(data => {
          const response = data.data;

          if (response.status === 200) {
            const user = response.data;

            // Encrypt the user data
            const encryptedWhotUserData = _.encryptObj(user);

            commit("setUser", user);
            commit("setLoggedIn", true);

            // Save the encrypted user data in local storage
            _.storage.save("whotUserData", encryptedWhotUserData);
            resolve(response);
          } else if (response.status === 400) {
            commit("setUser", {});
            commit("setLoggedIn", false);

            reject(response);
          }
        })
        .catch(err => {
          commit("setUser", {});
          commit("setLoggedIn", false);

          reject(err);
        });
    });
  },
  logUserIn({
    commit
  }, user) {
    return new Promise((resolve, reject) => {
      whotAxios
        .post("/auth/login", user)
        .then(data => {
          const response = data.data;

          if (response.status === 200) {
            const user = response.data;

            // Encrypt the user data
            const encryptedWhotUserData = _.encryptObj(user);

            commit("setUser", user);
            commit("setLoggedIn", true);

            // Save the encrypted user data in local storage
            _.storage.save("whotUserData", encryptedWhotUserData);
            resolve(response);
          } else if (response.status === 400) {
            const noUser = {}
            commit("setUser", noUser);
            commit("setLoggedIn", false);

            reject(response);
          }
        })
        .catch(err => {
          const noUser = {}
          commit("setUser", noUser);
          commit("setLoggedIn", false);

          reject(err);
        });
    });
  },
  logout({
    commit
  }) {
    return new Promise((resolve, reject) => {
      // Remove user from localstorage
      _.storage.remove("whotUserData");

      // Set app users state back to nothing
      const noUser = {};
      commit("setUser", noUser);
      commit("setLoggedIn", false);
      resolve()
    });
  },
  checkUserLogin({
    commit
  }) {
    return new Promise((resolve, reject) => {
      const encryptedWhotUserData = _.storage.get("whotUserData");
      if (!encryptedWhotUserData) {
        const noUser = {}
        commit("setUser", noUser)
        commit("setLoggedIn", false)
        reject("logout")
      }
      const whotUserData = _.decryptObj(encryptedWhotUserData);

      commit("setUser", whotUserData)
      commit("setLoggedIn", true)
      resolve()
    });
  }
};

const mutations = {
  setUser(state, user) {
    Object.assign(state.user, user);
  },
  setLoggedIn(state, loggedIn) {
    if (loggedIn) state.isLoggedIn = true
    if (!loggedIn) state.isLoggedIn = false
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
