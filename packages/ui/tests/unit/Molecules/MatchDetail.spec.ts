import { shallowMount } from "@vue/test-utils";
import MatchDetail from "@/components/Molecules/MatchDetail.vue";
import VTd from "@/components/Atoms/VTd.vue";

describe("MatchDetailPage.vue", () => {
  test("Should contain MatchDetail have VTd", () => {
    const wrapper = shallowMount(MatchDetail, {
      propsData: {
        homeTeam: "2",
        title: "Yellow Cards",
        awayTeam: "1",
      },
    });
    expect(wrapper.findAllComponents(VTd).exists()).toBe(true);
  });
});
