import { shallowMount } from "@vue/test-utils";
import NewspaperCardHeader from "@/components/Molecules/NewspaperCardHeader.vue";
import VExternalLink from "@/components/Atoms/VExternalLink.vue";
import VHeading from "@/components/Atoms/VHeading.vue";
import VImage from "@/components/Atoms/VImage.vue";
import VSpan from "@/components/Atoms/VSpan.vue";
import VSmall from "@/components/Atoms/VSmall.vue";

describe("NewspaperCardHeader.vue", () => {
  test("should have NewspaperCardHeader,VExternalLink, VHeading, VImage, VSpan, VSmall", () => {
    const wrapper = shallowMount(NewspaperCardHeader, {
      propsData: {
        player: {
          playerID: "MMEng",
          name: "Mason Mount",
          avatar:
            "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR9PKJm4nxEEu3S7-gnCWAJ_RvPO4IMdM6I0KC-i0VW-7xijlUeVKGlTHzY6_3c",
          url: "https://www.google.com/search?q=Mason+Mount&sxsrf=ALeKk005GIIB7dq6-0lkXzRzq3fj_12u6A%3A1625624726508&ei=lhDlYPLFHtC4mAXXxoSwCw&oq=Mason+Mount&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELADECcyBQgAELADMgsIABCxAxCDARCwAzIFCAAQsAMyBQgAELADMgUIABCwAzIFCAAQsAMyBQgAELADMgUIABCwAzIFCAAQsANKBAhBGAFQAFgAYPUJaAFwAHgAgAFriAFrkgEDMC4xmAEAqgEHZ3dzLXdpesgBCsABAQ&sclient=gws-wiz&ved=0ahUKEwjy6PGC9M_xAhVQHKYKHVcjAbYQ4dUDCA4&uact=5",
          rank: 5,
          goals: 2,
          flag_country: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
          country: "England",
          position: "Midfielder",
          newspaper: [
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
      },
    });
    expect(wrapper.findComponent(VExternalLink).exists()).toBe(true);
    expect(wrapper.findComponent(VHeading).exists()).toBe(true);
    expect(wrapper.findComponent(VImage).exists()).toBe(true);
    expect(wrapper.findComponent(VSmall).exists()).toBe(true);
    expect(wrapper.findAllComponents(VSpan).length).toBe(2);
  });
});
