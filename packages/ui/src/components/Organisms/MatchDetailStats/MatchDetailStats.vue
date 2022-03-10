<template>
  <div class="table-responsive">
    <MatchStatsDetail :home-team-detail="matchDetailStats.homeTeam" :away-team-detail="matchDetailStats.awayTeam" />
    <div class="px-5 py-3 border-bottom border-top">
      <span class="text-success">Stadium: </span>
      <span class="text-primary">{{ matchDetailStats.stadium }}</span>
    </div>
    <div class="px-5 py-3">
      <p class="text-muted">Photos: Pool via REUTERS</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import type { IMatchDetailStats } from "@projectb/shared";
import MatchStatsDetail from "@/components/Molecules/MatchStatsDetail.vue";

@Component({
  components: { MatchStatsDetail },
})
export default class MatchDetailStats extends Vue {
  @Prop(Object) matchDetailStats!: IMatchDetailStats;
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
