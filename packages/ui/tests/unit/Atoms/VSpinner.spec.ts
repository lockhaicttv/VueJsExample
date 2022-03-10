import { shallowMount } from "@vue/test-utils";
import VSpinner from "@/components/Atoms/VSpinner.vue";

describe("VSpinner", () => {
  test("should contain a tag", () => {
    const wrapper = shallowMount(VSpinner);
    expect(wrapper.attributes().class).toContain("position-relative spinner");
  });
});
