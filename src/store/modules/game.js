const state = {
  fullDeck: [{
      id: "0",
      no: 1,
      shape: 'star',
      value: 2,
    },
    {
      id: "1",
      no: 1,
      shape: 'triangle',
      value: 1,
    },
    {
      id: "2",
      no: 1,
      shape: 'circle',
      value: 1,
    },
    {
      id: "3",
      no: 1,
      shape: 'cross',
      value: 1,
    },
    {
      id: "4",
      no: 1,
      shape: 'square',
      value: 1,
    },
    {
      id: "5",
      no: 2,
      shape: 'circle',
      value: 2,
    },
    {
      id: "6",
      no: 2,
      shape: 'triangle',
      value: 2,
    },
    {
      id: "7",
      no: 2,
      shape: 'square',
      value: 2,
    },
    {
      id: "8",
      no: 2,
      shape: 'star',
      value: 4,
    },
    {
      id: "9",
      no: 2,
      shape: 'cross',
      value: 2,
    },
    {
      id: "10",
      no: 3,
      shape: 'cross',
      value: 3,
    },
    {
      id: "11",
      no: 3,
      shape: 'star',
      value: 6,
    },
    {
      id: "12",
      no: 3,
      shape: 'triangle',
      value: 3,
    },
    {
      id: "13",
      no: 3,
      shape: 'circle',
      value: 3,
    },
    {
      id: "14",
      no: 3,
      shape: 'square',
      value: 3,
    },
    {
      id: "15",
      no: 4,
      shape: 'triangle',
      value: 4,
    },
    {
      id: "16",
      no: 4,
      shape: 'circle',
      value: 4,
    },
    {
      id: "17",
      no: 4,
      shape: 'star',
      value: 8,
    },
    {
      id: "18",
      no: 5,
      shape: 'triangle',
      value: 5,
    },
    {
      id: "19",
      no: 5,
      shape: 'circle',
      value: 5,
    },
    {
      id: "20",
      no: 5,
      shape: 'cross',
      value: 5,
    },
    {
      id: "21",
      no: 5,
      shape: 'square',
      value: 5,
    },
    {
      id: "22",
      no: 5,
      shape: 'star',
      value: 10,
    },
    {
      id: "23",
      no: 7,
      shape: 'triangle',
      value: 7,
    },
    {
      id: "24",
      no: 7,
      shape: 'circle',
      value: 7,
    },
    {
      id: "25",
      no: 7,
      shape: 'cross',
      value: 7,
    },
    {
      id: "26",
      no: 7,
      shape: 'square',
      value: 7,
    },
    {
      id: "27",
      no: 7,
      shape: 'star',
      value: 14,
    },
    {
      id: "28",
      no: 8,
      shape: 'triangle',
      value: 8,
    },
    {
      id: "29",
      no: 8,
      shape: 'circle',
      value: 8,
    },
    {
      id: "30",
      no: 8,
      shape: 'star',
      value: 16,
    },
    {
      id: "31",
      no: 10,
      shape: 'triangle',
      value: 10,
    },
    {
      id: "32",
      no: 10,
      shape: 'square',
      value: 10,
    },
    {
      id: "33",
      no: 10,
      shape: 'cross',
      value: 10,
    },
    {
      id: "34",
      no: 10,
      shape: 'circle',
      value: 10,
    },
    {
      id: "35",
      no: 11,
      shape: 'square',
      value: 11,
    },
    {
      id: "36",
      no: 11,
      shape: 'cross',
      value: 11,
    },
    {
      id: "37",
      no: 11,
      shape: 'circle',
      value: 11,
    },
    {
      id: "38",
      no: 11,
      shape: 'triangle',
      value: 11,
    },
    {
      id: "39",
      no: 12,
      shape: 'triangle',
      value: 12,
    },
    {
      id: "40",
      no: 12,
      shape: 'circle',
      value: 12,
    },
    {
      id: "41",
      no: 13,
      shape: 'cross',
      value: 13,
    },
    {
      id: "42",
      no: 13,
      shape: 'circle',
      value: 13,
    },
    {
      id: "43",
      no: 13,
      shape: 'triangle',
      value: 13,
    },
    {
      id: "44",
      no: 13,
      shape: 'square',
      value: 13,
    },
    {
      id: "45",
      no: 14,
      shape: 'square',
      value: 14,
    },
    {
      id: "46",
      no: 14,
      shape: 'triangle',
      value: 14,
    },
    {
      id: "47",
      no: 14,
      shape: 'cross',
      value: 14,
    },
    {
      id: "48",
      no: 14,
      shape: 'circle',
      value: 14,
    },
    {
      id: "49",
      no: 20,
      shape: 'whot',
      value: 20,
    },
    {
      id: "50",
      no: 20,
      shape: 'whot',
      value: 20,
    },
    {
      id: "51",
      no: 20,
      shape: 'whot',
      value: 20,
    },
    {
      id: "52",
      no: 20,
      shape: 'whot',
      value: 20,
    },
    {
      id: "53",
      no: 20,
      shape: 'whot',
      value: 20,
    },
  ],
  game: {},
  games: [],
  colors: [
    "red",
    "indigo",
    "green",
    "orange",
    "blue-grey",
    "blue"
  ],
  selectedCards: [],
  settings: {
    sound: true
  },
  gameShout: {}
};

const getters = {
  cards: () => state.fullDeck,
  whotGame: () => state.game,
  openGames: () => state.games,
  currentPlayer: () => state.game.players[state.game.currentPlayer],
  whotColors: () => state.colors,
  selectedCards: () => state.selectedCards,
  lastPlayedCards: () => state.game.lastPlayedCards,
  playerShouts: () => state.game.shouts,
  whotSettings: () => state.settings,
  checkTurn() {
    return state.game.players[state.game.currentPlayer].name
  },
  gameShouts: () => state.gameShout
};

const actions = {
  updateGame({
    commit
  }, game) {
    return new Promise((resolve, reject) => {
      commit("clearSelectedCards")
      commit("updateGame", game)
      resolve()
    })
  },
  setWhotShape({
    commit
  }, shape) {
    return new Promise((resolve, reject) => {
      commit("updateWhotShape", shape)
      resolve()
    })
  },
  updateGamesList({commit}, games) {
    return new Promise((resolve, reject) => {
      commit("updateGamesList", games)
      resolve()
    })
  },
  selectACard({
    commit
  }, card) {
    return new Promise((resolve, reject) => {
      commit("selectCard", card)
      resolve()
    })
  },
  removeCard({
    commit
  }, card) {
    return new Promise((resolve, reject) => {
      commit("removeCard", card)
      resolve()
    })
  },
  setShout({commit}, shoutType) {
    commit("setShout", shoutType)
  },
  updateSound({commit}) {
    commit("updateSound")
  },
  updateShout({commit}, gameShout) {
    return new Promise((resolve, reject) => {
      commit("updateShout", gameShout)
      resolve()
    })
  }
};

const mutations = {
  updateGame(state, game) {
    Object.assign(state.game, game)
  },
  updateShout(state, gameShout) {
    state.game.shouts = []
    state.game.shouts = [...gameShout]
  },
  updateSound(state) {
    state.settings.sound = !state.settings.sound
  },
  updateWhotShape(state, shape) {
    const whot = {
      state: true,
      shape
    }

    Object.assign(state.game.whot, whot)
  },
  updateGamesList(state, games) {
    state.games = [ ...games ]
  },
  selectCard(state, card) {
    if (state.selectedCards.length == 0) {
      state.selectedCards.push(card.id)
      return
    } else {
      let firstCard = state.fullDeck.filter(deckCard => deckCard.id === state.selectedCards[0])[0]

      const newCard = state.fullDeck.filter(deckCard => deckCard.id === card.id)[0]
      if (firstCard.no === newCard.no) {
        state.selectedCards.push(card.id)
      }
    }
  },
  removeCard(state, card) {
    const index = state.selectedCards.findIndex(id => card.id == id)
    state.selectedCards.splice(index, 1)
  },
  clearSelectedCards(state) {
    state.selectedCards = []
  },
  setShout(state) {
    console.log("Shouting")
    const currentPlayerID = state.game.players[state.game.currentPlayer].id

    console.log(currentPlayerID)
    
    if (state.game.shouts.length == 0) {
      state.game.shouts.push(currentPlayerID)
    }

    if (state.game.shouts.includes(currentPlayerID)) {
      const shoutIndex = state.game.shouts.findIndex(shout => shout === currentPlayerID)
      state.game.shouts.splice(shoutIndex, 1)
    }

    console.log(0, state.game.shouts)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
