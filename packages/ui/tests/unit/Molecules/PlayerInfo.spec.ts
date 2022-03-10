import PlayerInfo from "@/components/Molecules/PlayerInfo.vue";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import VSpan from "@/components/Atoms/VSpan.vue";
import VExternalLink from "@/components/Atoms/VExternalLink.vue";
import { shallowMount } from "@vue/test-utils";

describe("PlayerInfo.vue", () => {
  test("should have ", () => {
    const wrapper = shallowMount(PlayerInfo, {
      propsData: {
        player: {
          id: "CRPor",
          name: "Cristiano Ronaldo",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/200px-Cristiano_Ronaldo_2018.jpg",
          url: "https://www.google.com/search?sxsrf=ALeKk01AHDOmpHgN6T_YqLfS-XpSBhHNgA:1625564926204&q=Cristiano+Ronaldo&stick=H4sIAAAAAAAAAONgVuLUz9U3MKooMSt8xGjCLfDyxz1hKe1Ja05eY1Tl4grOyC93zSvJLKkUEudig7J4pbi5ELp4FrEKOhdlFpdkJublKwTl5yXmpOQDAG36-UJYAAAA",
          rank: 1,
          goals: 3,
          flag_country: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
          country: "Portugal",
          position: "Forward",
        },
      },
    });
    expect(wrapper.findComponent(IconFlag).exists()).toBe(true);
    expect(wrapper.findComponent(VSpan).exists()).toBe(true);
    expect(wrapper.findComponent(VExternalLink).exists()).toBe(true);
    expect(wrapper.findAllComponents(VSpan).length).toBe(2);
  });
});
