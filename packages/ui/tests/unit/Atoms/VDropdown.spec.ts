import { shallowMount } from "@vue/test-utils";
import VDropdown from "@/components/Atoms/VDropdown.vue";
describe("VDropdown.vue", () => {
  test("Should contain VDropdown p-2", () => {
    const wrapper = shallowMount(VDropdown, {
      propsData: {
        className: "p-2",
        data: ["1", "2", "3"],
      },
    });
    expect(wrapper.attributes().class).toContain("p-2");
  });
});
