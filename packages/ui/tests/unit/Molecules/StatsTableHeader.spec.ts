import StatsTableHeader from "@/components/Molecules/StatsTableHeader.vue";
import VTd from "@/components/Atoms/VTd.vue";
import { shallowMount } from "@vue/test-utils";

describe("StatsTableHeader.vue", () => {
  test("should have ", () => {
    const wrapper = shallowMount(StatsTableHeader, {
      propsData: {},
    });
    expect(wrapper.findComponent(VTd).exists()).toBe(true);
    expect(wrapper.findAllComponents(VTd).length).toBe(4);
  });
});
