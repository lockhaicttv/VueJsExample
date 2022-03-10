import { shallowMount, createLocalVue } from "@vue/test-utils";
import VNavItem from "@/components/Atoms/VNavItem.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
describe("VNavItem.vue", () => {
  test("should contain nav-item and have the url /matches ", () => {
    const wrapper = shallowMount(VNavItem, {
      propsData: {
        url: "/matches",
        content: "Matches",
      },
      localVue,
      router,
    });
    expect(wrapper.attributes().class).toContain("nav-item");
    expect(wrapper.text()).toBe("Matches");
  });
});
