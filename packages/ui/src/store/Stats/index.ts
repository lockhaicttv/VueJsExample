import axios from "axios";
import { Commit } from "vuex";
import { IPlayers, IStatsState } from "@projectB/shared";
import { logger } from "@/../ultis/logger";

const state = (): IStatsState => ({
  stats: [],
});

const getters = {
  stats: (state: IStatsState): IPlayers[] => state.stats,
  isLoading: (state: IStatsState): boolean => state.stats.length === 0,
};

const mutations = {
  GET_STATS_DATA: (state: IStatsState, data: IPlayers[]): void => {
    state.stats = data;
  },
};

const actions = {
  getStatsData: async ({ commit }: { commit: Commit }): Promise<void> => {
    await axios
      .get("/players")
      .then((res) => {
        commit("GET_STATS_DATA", res?.data.players);
      })
      .catch((err: Error) => {
        logger.error("Get stats data error", err);
      });
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
