<template>
  <div class="container bg-white">
    <MatchStats
      :stage="getMatchDetailsHeading.stage"
      :home-team="getMatchDetailsHeading.homeTeam"
      :away-team="getMatchDetailsHeading.awayTeam"
      :start-date-time="getMatchDetailsHeading.startDateTime"
    />
    <GoalDetail :home-team="getMatchDetailsHeading.homeTeam" :away-team="getMatchDetailsHeading.awayTeam" />
    <RedCardDetail :home-team="getMatchDetailStats.homeTeam" :away-team="getMatchDetailStats.awayTeam" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MatchStats from "@/components/Molecules/MatchStats.vue";
import GoalDetail from "@/components/Molecules/GoalDetail.vue";
import RedCardDetail from "@/components/Molecules/RedCardDetail.vue";
import type { IMatchDetailStats, IMatchDetailsHeading } from "@projectb/shared";

@Component({
  components: { RedCardDetail, GoalDetail, MatchStats },
})
export default class MatchDetailHeading extends Vue {
  @Prop(Object) getMatchDetailsHeading!: IMatchDetailsHeading;
  @Prop(Object) getMatchDetailStats!: IMatchDetailStats;
}
</script>
