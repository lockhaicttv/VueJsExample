import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Molecules/Navbar.vue";
import VNavItem from "@/components/Atoms/VNavItem.vue";

describe("Navbar.vue", () => {
  test("should have 5 VNavItem", () => {
    const wrapper = shallowMount(Navbar);
    expect(wrapper.findAllComponents(VNavItem).length).toBe(5);
  });
});
