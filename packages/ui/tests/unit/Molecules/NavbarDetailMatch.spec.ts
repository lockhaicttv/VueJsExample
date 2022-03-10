import { shallowMount, createLocalVue } from "@vue/test-utils";
import NavbarDetailMatch from "@/components/Molecules/NavDetailMatch.vue";
import VNavItem from "@/components/Atoms/VNavItem.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
describe("MatchDetailPage.vue", () => {
  test("Should contain NavbarDetailMatch have VNavItem", () => {
    const wrapper = shallowMount(NavbarDetailMatch, {
      propsData: {
        navbar: [
          { url: "/matches/0/timeline", content: "TIMELINE" },
          { url: "/matches/0/lineups", content: "LINEUPS" },
          { url: "/matches/0", content: "STATS" },
          { url: "/matches/0/news", content: "NEWS" },
        ],
      },
      localVue,
      router,
    });
    expect(wrapper.findAllComponents(VNavItem).exists()).toBe(true);
  });
});
