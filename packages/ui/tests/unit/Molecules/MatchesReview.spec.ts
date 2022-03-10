import { shallowMount } from "@vue/test-utils";
import MatchReview from "@/components/Molecules/MatchReview.vue";
import VSpan from "@/components/Atoms/VSpan.vue";

describe("MatchReview.vue", () => {
  test("should contain  class match_status and match_time", () => {
    const wrapper = shallowMount(MatchReview, {
      propsData: {
        status: "FINISHED",
      },
    });
    expect(wrapper.findAll("div").at(2).attributes().class).toBe("match_status");
    expect(wrapper.findAll("div").at(3).attributes().class).toBe("match_time");
    expect(wrapper.findComponent(VSpan).exists()).toBe(true);
    expect(wrapper.findAllComponents(VSpan).length).toBe(3);
  });
});
