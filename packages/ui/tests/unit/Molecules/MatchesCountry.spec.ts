import { shallowMount } from "@vue/test-utils";
import MatchCountry from "@/components/Molecules/MatchCountry.vue";
import VImage from "@/components/Atoms/IconFlag.vue";

describe("MatchCountry.vue", () => {
  test("should contain VImage and source is correct", () => {
    const homeTeam = "https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_48x48.png";
    const awayTeam = "https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_48x48.png";

    const wrapper = shallowMount(MatchCountry, {
      propsData: {
        homeTeam: homeTeam,
        awayTeam: awayTeam,
      },
    });
    expect(wrapper.findAllComponents(VImage).exists()).toBe(true);
    expect(wrapper.findAllComponents(VImage).at(0).attributes().src).toBe(homeTeam);
    expect(wrapper.findAllComponents(VImage).at(1).attributes().src).toBe(homeTeam);
    expect(wrapper.findAllComponents(VImage).length).toBe(2);
  });
});
