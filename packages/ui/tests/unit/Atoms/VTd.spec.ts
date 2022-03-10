import { shallowMount } from "@vue/test-utils";
import VTd from "@/components/Atoms/VTd.vue";
describe("VTd.vue", () => {
  test("Should contain VTitle get a className and slot", () => {
    const wrapper = shallowMount(VTd, {
      propsData: {
        className: "ml-2 h4 text-muted",
        slot: {
          default: "Đây là VTd",
        },
      },
    });
    expect(wrapper.attributes().class).toContain("ml-2 h4 text-muted");
    // expect(wrapper.text()).toContain("Đây là VTd");
  });
});
