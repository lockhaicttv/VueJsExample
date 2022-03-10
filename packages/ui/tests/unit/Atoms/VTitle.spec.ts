import { shallowMount } from "@vue/test-utils";
import VTitle from "@/components/Atoms/VTitle.vue";
describe("VTitle.vue", () => {
  test("Should contain VTitle ml-2 h4 text-muted", () => {
    const wrapper = shallowMount(VTitle, {
      propsData: {
        className: "ml-2 h4 text-muted",
        content: "Đây là VTitle",
      },
    });
    expect(wrapper.attributes().class).toContain("ml-2 h4 text-muted");
    expect(wrapper.text()).toBe("Đây là VTitle");
  });
});
