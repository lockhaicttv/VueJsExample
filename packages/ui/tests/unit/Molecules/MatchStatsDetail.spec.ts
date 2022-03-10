import { shallowMount } from "@vue/test-utils";
import MatchStatsDetail from "@/components/Molecules/MatchStatsDetail.vue";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import MatchDetail from "@/components/Molecules/MatchDetail.vue";

describe("MatchDetailPage.vue", () => {
  test("Should contain MatchStatsDetail.spec have IconFlag and MatchDetail", () => {
    const wrapper = shallowMount(MatchStatsDetail, {
      propsData: {
        homeTeamDetail: {
          id: 1,
          name: "Switzerland",
          logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_48x48.png",
          shots: 8,
          shotsTarget: 2,
          possession: "27%",
          passes: 369,
          passAccuracy: "70%",
          fouls: 15,
          yellowCards: 2,
          redCards: [
            {
              player: "Remo Freuler",
              minute: "77'",
            },
          ],
          offsides: 4,
          corners: 9,
          score: 1,
          penalty: 1,
          goals: [
            {
              scorer: "Xherdan Shaqiri",
              minute: "68'",
              OG: false,
              penalty: false,
            },
          ],
        },
        awayTeamDetail: {
          id: 2,
          name: "Spain",
          logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/5hLkf7KFHhmpaiOJQv8LmA_48x48.png",
          shots: 28,
          shotsTarget: 10,
          possession: "73%",
          passes: 969,
          passAccuracy: "90%",
          fouls: 14,
          yellowCards: 1,
          redCards: [],
          offsides: 0,
          corners: 13,
          score: 1,
          penalty: 3,
          goals: [
            {
              scorer: "Denis Zakaria",
              minute: "8'",
              OG: true,
              penalty: false,
            },
          ],
        },
      },
    });
    expect(wrapper.findAllComponents(MatchDetail).exists()).toBe(true);
    expect(wrapper.findAllComponents(IconFlag).exists()).toBe(true);
  });
});
