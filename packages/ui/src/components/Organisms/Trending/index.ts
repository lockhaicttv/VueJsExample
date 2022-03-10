import { connect } from "vuex-connect";
import Trending from "./Trending.vue";
export default connect({
  gettersToProps: {
    trending: "players/trending",
  },
})("Trending", Trending);
