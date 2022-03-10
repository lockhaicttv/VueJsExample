import { IMatches, IStateMatches } from "@projectb/shared";
import { Commit } from "vuex";
import axios from "axios";
import { logger } from "@/../ultis/logger";

const state = (): IStateMatches => ({
  matches: {
    SEMI_FINAL: [],
    QUARTER_FINAL: [],
    FINAL: [],
    DATA: [],
  },
});

// getters
const getters = {
  getMatches: (state: IStateMatches): IMatches => state.matches,
  getLoading: (state: IStateMatches): boolean =>
    state.matches?.DATA?.length === 0 || state.matches?.QUARTER_FINAL?.length === 0,
};

// actions
const actions = {
  getDataMatches: async ({ commit }: { commit: Commit }): Promise<void> => {
    await axios
      .get<IMatches>("/matches")
      .then((res) => {
        if (res.data) {
          commit("SAVE_DATA_MATCH", res.data);
        }
      })
      .catch((error: Error) => {
        logger.error("Get matches data error", error);
      });
  },
  getDataMatchesbyId: async ({ commit }: { commit: Commit }, id: number): Promise<void> => {
    await axios
      .get<IMatches>(`/matches/${id}`)
      .then((res) => {
        if (res.data) {
          commit("SAVE_DATA_MATCH_BY_ID", res.data);
        }
      })
      .catch((error: Error) => {
        logger.error("Get matches data error", error);
      });
  },
};

// mutations
const mutations = {
  SAVE_DATA_MATCH: (state: IStateMatches, data: IMatches): void => {
    state.matches = data;
  },
  SAVE_DATA_MATCH_BY_ID: (state: IStateMatches, data: IMatches): void => {
    state.matches = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
