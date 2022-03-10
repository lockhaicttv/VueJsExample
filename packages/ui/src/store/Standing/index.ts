import axios, { AxiosResponse } from "axios";
import { IStanding } from "@projectb/shared";
import { Commit } from "vuex";
import { logger } from "@/../ultis/logger";

export interface IStandingState {
  standing: IStanding[];
}

const state = (): IStandingState => ({
  standing: [],
});

const mutations = {
  GET_ALL_DATA: (state: IStandingState, data: IStanding[]): void => {
    state.standing = data;
  },
};

const actions = {
  getAllData: async ({ commit }: { commit: Commit }): Promise<void> => {
    await axios
      .get(`/standing`)
      .then((res: AxiosResponse) => {
        commit("GET_ALL_DATA", res?.data);
      })
      .catch((err: Error) => {
        logger.error(err, "Loading standing data error");
      });
  },
};

const getters = {
  standing: (state: IStandingState): Array<IStanding> => state.standing,
  isLoading: (state: IStandingState): boolean => state.standing.length > 0,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
