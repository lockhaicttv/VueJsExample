import { shallowMount } from "@vue/test-utils";
import VSmall from "@/components/Atoms/VSmall.vue";
describe("VSmall.vue", () => {
  test("should contain class text-muted and text is Cristiano Ronaldo", () => {
    const wrapper = shallowMount(VSmall, {
      propsData: {
        className: "text-muted",
      },
      slots: {
        default: "Cristiano Ronaldo",
      },
    });
    expect(wrapper.attributes().class).toContain("text-muted");
    expect(wrapper.text()).toBe("Cristiano Ronaldo");
  });
});
