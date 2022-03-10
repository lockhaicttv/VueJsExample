import GroupHeader from "@/components/Molecules/GroupHeader.vue";
import Vtd from "@/components/Atoms/VTd.vue";
import { shallowMount } from "@vue/test-utils";

describe("GroupHeader.vue", () => {
  test("should have ", () => {
    const wrapper = shallowMount(GroupHeader, {
      propsData: {
        groupHeader: ["Team", "MP", "W", "D", "L", "GF", "GD", "GA", "Pts", "Last five"],
      },
    });
    expect(wrapper.findComponent(Vtd).exists()).toBe(true);
    expect(wrapper.findAllComponents(Vtd).length).toBe(1);
  });
});
