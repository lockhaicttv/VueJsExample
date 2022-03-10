import Vue from "vue";
import Vuex from "vuex";

import stats from "./Stats";
import standing from "./Standing";
import matchs from "./Matchs";
import news from "./News";
import players from "./Players";
import matchDetails from "./MatchDetails";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    matchs,
    standing,
    news,
    stats,
    players,
    matchDetails,
  },
});
