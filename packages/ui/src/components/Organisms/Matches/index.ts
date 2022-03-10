import { connect } from "vuex-connect";
import Matches from "./Matches.vue";
import { IStateMatches } from "@projectb/shared";
interface IState {
  matchs: IStateMatches;
}

export default connect({
  stateToProps: {
    matches: (state: IState) => state.matchs.matches,
  },
})("MatchesList", Matches);
