import { shallowMount } from "@vue/test-utils";
import IconFlag from "@/components/Atoms/IconFlag.vue";
describe("IconFlag.vue", () => {
  test("Should contain IconFlag p-2", () => {
    const wrapper = shallowMount(IconFlag, {
      propsData: {
        className: "p-2",
      },
    });
    expect(wrapper.attributes().class).toContain("p-2");
  });
});
