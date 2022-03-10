<template>
  <div class="rounds shadow">
    <div class="page-size">
      <div v-for="(match, key) in matches" :key="key" class="round_item">
        <VTitle class-name="round_title fs-6 font-mono-space ps-3 py-1" :content="key" />
        <div class="matchs_container row">
          <div v-for="item in match" :key="item.id" class="match_item col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <router-link :to="'/match/' + item.id + '/stats'">
              <div class="match row">
                <MatchCountry :home-team="item.homeTeam.logoUrl" :away-team="item.awayTeam.logoUrl" />
                <MatchResult
                  :home-team="item.homeTeam"
                  :away-team="item.awayTeam"
                  :score="item.score"
                  :penalty="checkData(item.penalty)"
                  :redcard="checkData(item.redcard)"
                  :winner="checkData(item.winner)"
                />
                <MatchReview
                  :status="item.status"
                  :start-date-time="item.startDateTime"
                  :penalty="checkData(item.penalty)"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="align-text-bottom">
      <VTitle class-name="round_title fst-italic p-3 bg-white border-top" content="All times are in Viet Nam Time" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import type { IMatches } from "@projectb/shared";
import MatchCountry from "@/components/Molecules/MatchCountry.vue";
import MatchResult from "@/components/Molecules/MatchResult.vue";
import MatchReview from "@/components/Molecules/MatchReview.vue";
import VTitle from "@/components/Atoms/VTitle.vue";
@Component({
  components: {
    VTitle,
    MatchCountry,
    MatchResult,
    MatchReview,
  },
})
export default class Matches extends Vue {
  @Prop(Object) matches!: IMatches;
  checkData(data: number | string): number | string | null {
    return data ? data : null;
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
