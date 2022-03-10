<template>
  <div v-if="checkTeam()">
    <NavbarMatchDetail
      :home-team="getMatchDetailsHeading.homeTeam.name"
      :away-team="getMatchDetailsHeading.awayTeam.name"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NavbarMatchDetail from "@/components/Molecules/NavbarMatchDetail.vue";
import type { IMatchDetailsHeading } from "@projectb/shared";

@Component({
  components: { NavbarMatchDetail },
})
export default class MatchDetailHeader extends Vue {
  @Prop(Object) getMatchDetailsHeading!: IMatchDetailsHeading;
  checkTeam(): boolean {
    return !!(this.getMatchDetailsHeading.homeTeam && this.getMatchDetailsHeading.awayTeam);
  }
}
</script>

<style scoped></style>
