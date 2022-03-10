import { Commit } from "vuex";
import { IPlayers, ITrending, IPlayerState } from "@projectB/shared";
import axios, { AxiosResponse } from "axios";
import { logger } from "@/../ultis/logger";

const state = (): IPlayerState => ({
  players: [],
  trending: [],
});
const getters = {
  players: (state: IPlayerState): Array<IPlayers> => state.players,
  trending: (state: IPlayerState): Array<ITrending> => state.trending,
  isLoading: (state: IPlayerState): boolean => state.players.length === 0 && state.trending.length === 0,
};
const mutations = {
  savePlayers: (state: IPlayerState, data: IPlayers[]): void => {
    state.players = data;
  },
  saveTrending: (state: IPlayerState, data: ITrending[]): void => {
    state.trending = data;
  },
};
const actions = {
  loadPlayers: async ({ commit }: { commit: Commit }): Promise<void> => {
    axios
      .get("/players")
      .then((res: AxiosResponse) => {
        const results: IPlayers = res.data.players;
        commit("savePlayers", results);
      })
      .catch((error: Error) => {
        logger.error("Get player data data error", error);
      });
  },
  loadTrending: async ({ commit }: { commit: Commit }): Promise<void> => {
    axios
      .get("/players/trending")
      .then((res: AxiosResponse) => {
        const results: ITrending = res.data.trending;
        commit("saveTrending", results);
      })
      .catch((error: Error) => {
        logger.error("Get trending data error", error);
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
