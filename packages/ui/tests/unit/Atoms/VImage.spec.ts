import { shallowMount } from "@vue/test-utils";
import VImage from "@/components/Atoms/VImage.vue";
describe("VImage.vue", () => {
  test("should transfer the corect props", () => {
    const wrapper = shallowMount(VImage, {
      propsData: {
        src: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR9PKJm4nxEEu3S7-gnCWAJ_RvPO4IMdM6I0KC-i0VW-7xijlUeVKGlTHzY6_3c",
        alt: "avatar",
        height: 50,
        width: 50,
        className: "rounded",
      },
    });
    expect(wrapper.attributes().src).toBe(
      "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR9PKJm4nxEEu3S7-gnCWAJ_RvPO4IMdM6I0KC-i0VW-7xijlUeVKGlTHzY6_3c",
    );
    expect(wrapper.attributes().alt).toBe("avatar");
    expect(wrapper.attributes().height).toBe("50");
    expect(wrapper.attributes().width).toBe("50");
    expect(wrapper.attributes().class).toContain("rounded");
  });
});
