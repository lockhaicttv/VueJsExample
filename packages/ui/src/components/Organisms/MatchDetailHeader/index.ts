import { connect } from "vuex-connect";
import MatchDetailHeader from "./MatchDetailHeader.vue";

export default connect({
  gettersToProps: {
    getMatchDetailsHeading: "matchDetails/getMatchDetailsHeading",
  },
})("MatchDetailHeader", MatchDetailHeader);
