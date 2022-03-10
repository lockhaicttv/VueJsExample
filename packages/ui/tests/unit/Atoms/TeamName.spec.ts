import { shallowMount } from "@vue/test-utils";
import TeamName from "@/components/Atoms/TeamName.vue";

describe("TeamName", () => {
  test("should contain content 'Techbase Vietnam Dept 3'", () => {
    const wrapper = shallowMount(TeamName, {
      propsData: {
        content: "Techbase Vietnam Dept 3",
      },
    });
    expect(wrapper.text()).toBe("Techbase Vietnam Dept 3");
  });
});
