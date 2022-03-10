import { connect } from "vuex-connect";
import Stats from "./Stats.vue";
export default connect({
  gettersToProps: {
    stats: "stats/stats",
  },
})("Stats", Stats);
