import { shallowMount } from "@vue/test-utils";
import LastFiveStats from "@/components/Molecules/LastFiveStats.vue";
import VImage from "@/components/Atoms/VImage.vue";

describe("LastFiveStats.vue", () => {
  test("Should contain LastFiveStats have VImage", () => {
    const wrapper = shallowMount(LastFiveStats, {
      propsData: {
        className: "p-2",
        data: [0, 1, 1, 1, 1],
      },
    });
    expect(wrapper.findAllComponents(VImage).exists()).toBe(true);
  });
});
