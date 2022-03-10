import RedCardDetail from "@/components/Molecules/RedCardDetail.vue";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import { shallowMount } from "@vue/test-utils";

describe("RedCardDetail.vue", () => {
  test("should have ", () => {
    const wrapper = shallowMount(RedCardDetail, {
      propsData: {
        homeTeam: {
          name: "Belgium",
          logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_48x48.png",
          shots: 10,
          shotsTarget: 4,
          possession: "46%",
          passes: 448,
          passAccuracy: "70%",
          fouls: 15,
          yellowCards: 2,
          redCards: [],
          offsides: 4,
          corners: 9,
        },
        awayTeam: {
          name: "Italy",
          logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/joYpsiaYi4GDCqhSRAq5Zg_48x48.png",
          shots: 12,
          shotsTarget: 10,
          possession: "53%",
          passes: 969,
          passAccuracy: "56%",
          fouls: 14,
          yellowCards: 1,
          redCards: [],
          offsides: 0,
          corners: 13,
        },
      },
    });
    expect(wrapper.findComponent(IconFlag).exists()).toBe(true);
  });
});
