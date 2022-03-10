import { shallowMount } from "@vue/test-utils";
import NewspaperCardBody from "@/components/Molecules/NewspaperCardBody.vue";
import VExternalLink from "@/components/Atoms/VExternalLink.vue";
import VSpan from "@/components/Atoms/VSpan.vue";

describe("NewspaperCardBody.vue", () => {
  test("should have 4 VSpan and 2 VExternalLink", () => {
    const wrapper = shallowMount(NewspaperCardBody, {
      propsData: {
        newspapers: [
          {
            id: 1,
            newspaperName: "Báo Thanh Niên",
            time: "1 day ago",
            title: "EURO 2020: Tuyển Anh ngao ngán khi 'bộ đôi' Chelsea bị cách ly khẩn cấp",
            url: "https://thanhnien.vn/the-thao/euro-2020/euro-2020-tuyen-anh-ngao-ngan-khi-bo-doi-chelsea-bi-cach-ly-khan-cap-136606t.html",
          },
          {
            id: 2,
            newspaperName: "BBC",
            time: "10 hours ago",
            title: "Mason Mount and Ben Chilwell absence 'bizarre', says England boss Gareth Southgate",
            url: "https://www.bbc.com/sport/football/57564682",
          },
        ],
      },
    });
    expect(wrapper.findAllComponents(VSpan).length).toBe(4);
    expect(wrapper.findAllComponents(VExternalLink).length).toBe(2);
  });
});
