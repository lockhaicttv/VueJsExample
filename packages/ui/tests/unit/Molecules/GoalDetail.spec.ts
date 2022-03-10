import GoalDetail from "@/components/Molecules/GoalDetail.vue";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import { shallowMount } from "@vue/test-utils";

describe("GroupHeader.vue", () => {
  test("should have ", () => {
    const wrapper = shallowMount(GoalDetail, {
      propsData: {
        homeTeam: {
          name: "Belgium",
          logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_48x48.png",
          score: 1,
          goals: [
            {
              scorer: "Romelu Lukaku",
              minute: "45+2'",
              OG: false,
              penalty: true,
            },
          ],
        },
        awayTeam: {
          name: "Italy",
          logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/joYpsiaYi4GDCqhSRAq5Zg_48x48.png",
          score: 2,
          goals: [
            {
              scorer: "Nicolò Barella",
              minute: "31'",
              OG: false,
              penalty: false,
            },
            {
              scorer: "Lorenzo Insigne",
              minute: "44'",
              OG: false,
              penalty: false,
            },
          ],
        },
      },
    });
    expect(wrapper.findComponent(IconFlag).exists()).toBe(true);
  });
});
