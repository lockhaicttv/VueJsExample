import { shallowMount } from "@vue/test-utils";
import NewsCardList from "@/components/Molecules/NewsCardList.vue";
import VExternalLink from "@/components/Atoms/VExternalLink.vue";
import NewsCard from "@/components/Molecules/NewsCard.vue";

describe("NewsCardList.vue", () => {
  test("should have 3 VExternalLink and 3 NewsCard", () => {
    const wrapper = shallowMount(NewsCardList, {
      propsData: {
        news: [
          {
            id: 1,
            title: "Trường hợp Bồ Đào Nha bị loại khỏi Euro 2020",
            newspaperName: "Tuổi trẻ",
            time: "6 hours ago",
            img: "https://static.bongda24h.vn/medias/standard/2021/6/20/video-morata-ghi-ban.jfif",
            link: "https://tuoitre.vn/truong-hop-nao-khien-bo-dao-nha-bi-loai-khoi-euro-2020-20210623050816606.htm",
          },
          {
            id: 2,
            title: "EURO 2020 nhận cảnh báo có thể gây ‘khủng hoảng’ dịch bệnh mới",
            newspaperName: "Báo thanh niên",
            time: "2 hours ago",
            img: "https://image.thanhnien.vn/2048/uploaded/taynguyen/2021_06_23/who2_trwo.jpg",
            link: "https://thanhnien.vn/the-thao/euro-2020/euro-2020-nhan-canh-bao-co-the-gay-khung-hoang-dich-benh-moi-136651t.html",
          },
          {
            id: 3,
            title:
              "Soi kèo, dự đoán kết quả EURO 2020 tuyển Pháp vs tuyển Bồ Đào Nha (2 giờ, 24.6): Dễ hòa ít bàn thắng",
            newspaperName: "Báo thanh niên",
            time: "57 minutes ago",
            img: "https://image.thanhnien.vn/2048/uploaded/hoangquynh/2021_06_23/tuyenbodaonha2306afp_pzdt.jpg",
            link: "https://thanhnien.vn/the-thao/euro-2020/soi-keo-du-doan-ket-qua-euro-2020-tuyen-phap-vs-tuyen-bo-dao-nha-2-gio-246-de-hoa-it-ban-thang-136661t.html",
          },
        ],
      },
    });
    expect(wrapper.findAllComponents(VExternalLink).length).toBe(3);
    expect(wrapper.findAllComponents(NewsCard).length).toBe(3);
  });
});
