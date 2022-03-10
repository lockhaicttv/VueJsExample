import { shallowMount } from "@vue/test-utils";
import VExternalLink from "@/components/Atoms/VExternalLink.vue";

describe("VExternalLink", () => {
  test("should contain a tag", () => {
    const wrapper = shallowMount(VExternalLink);
    expect(wrapper.get("a").element.tagName).toBe("A");
  });
  test("should contain correct prop link and slot", () => {
    const wrapper = shallowMount(VExternalLink, {
      propsData: {
        link: "https://www.marca.com/en/football/uefa-euro/2021/06/21/60d1028746163fa4278b4622.html",
      },
      slots: {
        default: "Con đường cứu vãn sự nghiệp của Eden Hazard",
      },
    });
    expect(wrapper.attributes().href).toBe(
      "https://www.marca.com/en/football/uefa-euro/2021/06/21/60d1028746163fa4278b4622.html",
    ),
      expect(wrapper.text()).toBe("Con đường cứu vãn sự nghiệp của Eden Hazard");
  });
});
