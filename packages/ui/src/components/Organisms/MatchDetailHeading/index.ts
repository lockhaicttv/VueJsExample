import { connect } from "vuex-connect";
import MatchDetailHeading from "./MatchDetailHeading.vue";

export default connect({
  gettersToProps: {
    getMatchDetailsHeading: "matchDetails/getMatchDetailsHeading",
    getMatchDetailStats: "matchDetails/getMatchDetailStats",
  },
})("matchDetailHeading", MatchDetailHeading);
