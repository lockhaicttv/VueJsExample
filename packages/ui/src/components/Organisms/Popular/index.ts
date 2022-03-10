import { connect } from "vuex-connect";
import Popular from "./Popular.vue";
export default connect({
  gettersToProps: {
    players: "players/players",
  },
})("Popular", Popular);
