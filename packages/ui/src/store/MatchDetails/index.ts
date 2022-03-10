import { IMatchDetailsState, IMatchDetailStats, IMatchDetailsHeading } from "@projectb/shared";
import { Commit } from "vuex";
import axios from "axios";
import { logger } from "@/../ultis/logger";

const state = (): IMatchDetailsState => ({
  matchDetailStats: {} as IMatchDetailStats,
  matchDetailsHeading: {} as IMatchDetailsHeading,
});

// getters
const getters = {
  getMatchDetailsHeading: (state: IMatchDetailsState): IMatchDetailsHeading => {
    return state.matchDetailsHeading;
  },
  getMatchDetailStats: (state: IMatchDetailsState): IMatchDetailStats => {
    return state.matchDetailStats;
  },
  isLoading: (state: IMatchDetailsState): boolean =>
    state.matchDetailStats.awayTeam === undefined && state.matchDetailsHeading.homeTeam === undefined,
};

// actions
const actions = {
  getDataMatchesById: async ({ commit }: { commit: Commit }, id: string): Promise<void> => {
    await axios
      .get(`/details/${id}`)
      .then((res) => {
        if (res.data) {
          commit("GET_MATCH_DETAILS_STATS_BY_ID", res.data.MatchDetailStats);
          commit("GET_MATCH_DETAILS_HEADING_BY_ID", res.data.MatchDetailsHeading);
        }
      })
      .catch((err: Error) => {
        logger.error("Get matches data error", err);
      });
  },
};

// mutations
const mutations = {
  GET_MATCH_DETAILS_STATS_BY_ID: (state: IMatchDetailsState, data: IMatchDetailStats): void => {
    state.matchDetailStats = data;
  },
  GET_MATCH_DETAILS_HEADING_BY_ID: (state: IMatchDetailsState, data: IMatchDetailsHeading): void => {
    state.matchDetailsHeading = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
