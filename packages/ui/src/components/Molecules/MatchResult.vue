<template>
  <div class="col-7 match_result">
    <div class="match_result_item">
      <div class="team_name">
        <VSpan :content="homeTeam.name" />
        <VSpan :show="redcard && redcard.homeTeam !== 0"><IconFlag :src="redCard" class-name="red_card" /></VSpan>
      </div>
      <div v-if="score.homeTeam !== null" :class="[{ penalty: penalty !== null }, 'match_score']">
        <VSpan :content="score.homeTeam.toString()" />
        <VSpan :content="penalty ? ` (${penalty.homeTeam.toString()})` : ''" />
      </div>
      <svg
        v-if="winner === homeTeam.id && winner != undefined"
        class="img_winner"
        aria-label="Winner"
        height="8"
        role="img"
        width="6"
      >
        <polygon fill="#000" points="6,0 6,8 0,4"></polygon>
      </svg>
    </div>
    <div class="match_result_item">
      <div class="team_name">
        <VSpan :content="awayTeam.name" />
        <VSpan :show="redcard && redcard.awayTeam !== 0"><IconFlag :src="redCard" class-name="red_card" /></VSpan>
      </div>
      <div v-if="score.awayTeam !== null" :class="[{ penalty: penalty !== null }, 'match_score']">
        <VSpan :content="score.awayTeam.toString()" />
        <VSpan :content="penalty ? ` (${penalty.awayTeam.toString()})` : ''" />
      </div>
      <svg
        v-if="winner === awayTeam.id && winner != undefined"
        class="img_winner"
        aria-label="Winner"
        height="8"
        role="img"
        width="6"
      >
        <polygon fill="#000" points="6,0 6,8 0,4"></polygon>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import type { ITeam, IInfo } from "@projectb/shared";
import VSpan from "@/components/Atoms/VSpan.vue";
import IconFlag from "@/components/Atoms/IconFlag.vue";
@Component({
  components: {
    IconFlag,
    VSpan,
  },
})
export default class MatchResult extends Vue {
  @Prop(Object) homeTeam!: ITeam;
  @Prop(Object) awayTeam!: ITeam;
  @Prop(Object) redcard!: IInfo;
  @Prop(Object) penalty: IInfo | undefined;
  @Prop(Object) score!: IInfo;
  @Prop(Number) winner!: number | null;
  private redCard = "//ssl.gstatic.com/onebox/sports/soccer_timeline/red-card-right.svg";
}
</script>
