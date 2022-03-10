<template>
  <div class="text-center">
    <div class="d-flex justify-content-between pb-3">
      <div class="d-flex">
        <a class="text-decoration-none">UEFA EURO 2020 </a>
        <div class="text-muted ps-2">• {{ convertDate(startDateTime) }}</div>
      </div>
      <div class="text-muted">Full-time</div>
    </div>
    <div v-if="checkTeam()" class="d-flex justify-content-between container col-xl-7 col-sm-12 mStats">
      <div>
        <IconFlag :src="homeTeam.logoUrl" :height="48" :width="48" />
        <TeamName :content="homeTeam.name" />
      </div>
      <div class="h1">{{ homeTeam.score }}</div>
      <div class="h1 text-muted">-</div>
      <div class="h1">{{ awayTeam.score }}</div>
      <div>
        <IconFlag :src="awayTeam.logoUrl" :height="48" :width="48" />
        <TeamName :content="awayTeam.name" />
      </div>
    </div>
    <div class="text-muted pb-3">
      {{ stage }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import TeamName from "@/components/Atoms/TeamName.vue";
import type { ITeamScore } from "@projectb/shared";
import moment from "moment";
@Component({
  components: { TeamName, IconFlag },
})
export default class MatchStats extends Vue {
  @Prop(String) stage!: string;
  @Prop(Object) homeTeam!: ITeamScore;
  @Prop(Object) awayTeam!: ITeamScore;
  @Prop(String) startDateTime!: string;

  convertDate(time: string): string {
    let day = moment(time).calendar();
    let date = day.split(" ");
    if (date[0] === "Yesterday" || date[0] === "Tomorrow") {
      return date[0];
    }

    return moment(time).format("ddd, MMM YYYY");
  }

  checkTeam(): boolean {
    return !!(this.homeTeam && this.awayTeam);
  }
}
</script>
