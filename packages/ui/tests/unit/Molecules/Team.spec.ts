import { shallowMount } from "@vue/test-utils";
import Team from "@/components/Molecules/Team.vue";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import VTd from "@/components/Atoms/VTd.vue";
import TeamName from "@/components/Atoms/TeamName.vue";
import LastFiveStats from "@/components/Molecules/LastFiveStats.vue";

describe("LastFiveStats.vue", () => {
  test("Should contain Team have VImage", () => {
    const wrapper = shallowMount(Team, {
      propsData: {
        className: "p-2",
        data: {
          id: 1,
          club: "Italy",
          flag: "https://ssl.gstatic.com/onebox/media/sports/logos/joYpsiaYi4GDCqhSRAq5Zg_48x48.png",
          MP: 3,
          W: 3,
          D: 0,
          L: 0,
          GF: 7,
          GA: 0,
          GD: 7,
          Pts: 9,
          lastFive: [1, 1, 1, "none", "none"],
        },
      },
    });
    expect(wrapper.findAllComponents(VTd).exists()).toBe(true);
    expect(wrapper.findAllComponents(IconFlag).exists()).toBe(true);
    expect(wrapper.findAllComponents(TeamName).exists()).toBe(true);
    expect(wrapper.findAllComponents(LastFiveStats).exists()).toBe(true);
  });
});
