import { shallowMount } from "@vue/test-utils";
import VHeading from "@/components/Atoms/VHeading.vue";
describe("VHeading.vue", () => {
  test("should contain class text-5xl and UEFA EURO 2020 text", () => {
    const wrapper = shallowMount(VHeading, {
      propsData: {
        tag: "h1",
        content: "UEFA EURO 2020",
      },
    });
    expect(wrapper.attributes().class).toContain("text-5xl");
    expect(wrapper.text()).toBe("UEFA EURO 2020");
  });
});
