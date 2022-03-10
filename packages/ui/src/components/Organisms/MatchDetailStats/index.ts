import { connect } from "vuex-connect";
import MatchDetailStats from "./MatchDetailStats.vue";

export default connect({
  gettersToProps: {
    matchDetailStats: "matchDetails/getMatchDetailStats",
  },
})("MatchDetailStats", MatchDetailStats);
