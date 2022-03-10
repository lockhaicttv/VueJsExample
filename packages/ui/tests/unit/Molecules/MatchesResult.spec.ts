import { shallowMount } from "@vue/test-utils";
import MatchResult from "@/components/Molecules/MatchResult.vue";
import VImage from "@/components/Atoms/IconFlag.vue";
import VSpan from "@/components/Atoms/VSpan.vue";

describe("MatchResult.vue", () => {
  test("should contain  VSpan, VImage", () => {
    const homeTeam = {
      id: 1,
      name: "Switzerland",
      logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_48x48.png",
    };
    const awayTeam = {
      id: 2,
      name: "Spain",
      logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/5hLkf7KFHhmpaiOJQv8LmA_48x48.png",
    };
    const score = {
      awayTeam: 1,
      homeTeam: 1,
    };
    const penalty = {
      awayTeam: 3,
      homeTeam: 1,
    };
    const redcard = {
      awayTeam: 0,
      homeTeam: 1,
    };
    const winner = 2;
    const wrapper = shallowMount(MatchResult, {
      propsData: {
        homeTeam: homeTeam,
        awayTeam: awayTeam,
        score: score,
        penalty: penalty,
        redcard: redcard,
        winner: winner,
      },
    });
    expect(wrapper.findComponent(VImage).exists()).toBe(true);
    expect(wrapper.findAllComponents(VSpan).at(0).exists()).toBe(true);
    expect(wrapper.findAllComponents(VSpan).at(4).exists()).toBe(true);
    expect(wrapper.findAllComponents(VSpan).length).toBe(8);
  });
});
