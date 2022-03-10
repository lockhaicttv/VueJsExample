import { Commit } from "vuex";
import { INewsState, INews } from "@projectb/shared";
import axios, { AxiosResponse } from "axios";
import { logger } from "@/../ultis/logger";

const state = (): INewsState => ({
  news: [],
});
const getters = {
  news: (state: INewsState): INews[] => state.news,
  isLoading: (state: INewsState): boolean => state.news.length === 0,
};
const mutations = {
  saveNews: (state: INewsState, data: INews[]): void => {
    state.news = data;
  },
};
const actions = {
  loadNews: async ({ commit }: { commit: Commit }): Promise<void> => {
    axios
      .get("/news")
      .then((res: AxiosResponse) => {
        const results: INews = res.data.news;
        commit("saveNews", results);
      })
      .catch((error: Error) => {
        logger.error("Get news data error", error);
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
