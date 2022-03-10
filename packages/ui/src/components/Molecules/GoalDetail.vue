<template>
  <div v-if="checkTeam()" class="row text-center pt-3">
    <div class="col-4">
      <div v-for="(goal, index) in homeTeam.goals" :key="index" class="text-muted">
        {{ getGoalDetail(goal.scorer, goal.minute, goal.penalty) }}
      </div>
    </div>
    <div class="col">
      <IconFlag :src="require('@/assets/soccer-ball.png')" :height="24" :width="24" />
    </div>
    <div class="col-4">
      <div v-for="(goal, index) in awayTeam.goals" :key="index" class="text-muted">
        {{ getGoalDetail(goal.scorer, goal.minute, goal.penalty) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import type { IMatchDetailsTeam } from "@projectb/shared";

@Component({
  components: { IconFlag },
})
export default class GoalDetail extends Vue {
  @Prop(Object) homeTeam!: IMatchDetailsTeam;
  @Prop(Object) awayTeam!: IMatchDetailsTeam;
  checkTeam(): boolean {
    return !!(this.homeTeam && this.awayTeam);
  }
  getGoalDetail(gScorer: string, gMinute: string, gPenalty: boolean): string {
    return gScorer + gMinute + (gPenalty ? "P" : "");
  }
}
</script>
