import { shallowMount } from "@vue/test-utils";
import NewsCard from "@/components/Molecules/NewsCard.vue";
import VSmall from "@/components/Atoms/VSmall.vue";
import VSpan from "@/components/Atoms/VSpan.vue";
import VHeading from "@/components/Atoms/VHeading.vue";
import VImage from "@/components/Atoms/VImage.vue";

describe("NewsCard.vue", () => {
  test("should contain  VSmall, VSpan, VHeading and VImage", () => {
    const wrapper = shallowMount(NewsCard, {
      propsData: {
        item: {
          id: 1,
          title: "Trường hợp Bồ Đào Nha bị loại khỏi Euro 2020",
          newspaperName: "Tuổi trẻ",
          time: "6 hours ago",
          img: "https://static.bongda24h.vn/medias/standard/2021/6/20/video-morata-ghi-ban.jfif",
          link: "https://tuoitre.vn/truong-hop-nao-khien-bo-dao-nha-bi-loai-khoi-euro-2020-20210623050816606.htm",
        },
      },
    });
    expect(wrapper.findComponent(VSmall).exists()).toBe(true);
    expect(wrapper.findAllComponents(VSpan).length).toBe(2);
    expect(wrapper.findComponent(VHeading).exists()).toBe(true);
    expect(wrapper.findComponent(VImage).exists()).toBe(true);
  });
});
