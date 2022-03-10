import { connect } from "vuex-connect";
import StandingDetails from "./StandingDetails.vue";

export default connect({
  gettersToProps: {
    standingData: "standing/standing",
  },
})("standingDetails", StandingDetails);
