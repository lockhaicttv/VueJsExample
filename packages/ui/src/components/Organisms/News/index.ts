import { connect } from "vuex-connect";
import News from "./News.vue";
export default connect({
  gettersToProps: {
    news: "news/news",
  },
})("News", News);
