import { shallowMount } from "@vue/test-utils";
import VSpan from "@/components/Atoms/VSpan.vue";
describe("VSmall.vue", () => {
  test("should contain class class-test and text is props data", () => {
    const wrapper = shallowMount(VSpan, {
      propsData: {
        className: "class-test",
        content: "test content",
      },
    });
    expect(wrapper.attributes().class).toContain("class-test");
    expect(wrapper.text()).toBe("test content");
  });
});
