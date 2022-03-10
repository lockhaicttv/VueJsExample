<template>
  <table class="table table-borderless text-center">
    <tbody v-if="checkTeam()" class="mStatsDetail">
      <tr>
        <td class="column-stats">
          <IconFlag :src="homeTeamDetail.logoUrl" :width="24" :height="24" />
        </td>
        <td>TEAM STATS</td>
        <td class="column-stats">
          <IconFlag :src="awayTeamDetail.logoUrl" :width="24" :height="24" />
        </td>
      </tr>
      <MatchDetail
        :home-team="homeTeamDetail.shots.toString()"
        :away-team="awayTeamDetail.shots.toString()"
        :title="'Shots'"
      />
      <MatchDetail
        :home-team="homeTeamDetail.shotsTarget.toString()"
        :away-team="awayTeamDetail.shotsTarget.toString()"
        :title="'Shots on target'"
      />
      <MatchDetail
        :home-team="homeTeamDetail.possession.toString()"
        :away-team="awayTeamDetail.possession.toString()"
        :title="'Possession'"
      />
      <MatchDetail
        :home-team="homeTeamDetail.passes.toString()"
        :away-team="awayTeamDetail.passes.toString()"
        :title="'Passes'"
      />
      <MatchDetail
        :home-team="homeTeamDetail.passAccuracy.toString()"
        :away-team="awayTeamDetail.passAccuracy.toString()"
        :title="'Pass accuracy'"
      />
      <MatchDetail
        :home-team="homeTeamDetail.fouls.toString()"
        :away-team="awayTeamDetail.fouls.toString()"
        :title="'Fouls'"
      />
      <MatchDetail
        :home-team="homeTeamDetail.yellowCards.toString()"
        :away-team="awayTeamDetail.yellowCards.toString()"
        :title="'Yellow cards'"
      />
      <MatchDetail
        :home-team="homeTeamDetail.redCards.length.toString()"
        :away-team="awayTeamDetail.redCards.length.toString()"
        :title="'Red cards'"
      />
      <MatchDetail
        :home-team="homeTeamDetail.offsides.toString()"
        :away-team="awayTeamDetail.offsides.toString()"
        :title="'Offsides'"
      />
      <MatchDetail
        :home-team="homeTeamDetail.corners.toString()"
        :away-team="awayTeamDetail.corners.toString()"
        :title="'Corners'"
      />
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import MatchDetail from "@/components/Molecules/MatchDetail.vue";
import type { IMatchTeamStats } from "@projectb/shared";

@Component({
  components: { MatchDetail, IconFlag },
})
export default class MatchStatsDetail extends Vue {
  @Prop(Object) homeTeamDetail!: IMatchTeamStats;
  @Prop(Object) awayTeamDetail!: IMatchTeamStats;
  checkTeam(): boolean {
    return !!(this.homeTeamDetail && this.awayTeamDetail);
  }
}
</script>
