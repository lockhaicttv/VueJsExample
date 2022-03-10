<template>
  <tr :class="[checkTeamIndex(teamIndex), 'pointer-cursor', 'team']" @click="directToMatch(data.id)">
    <VTd>
      <div class="d-flex">
        <IconFlag class-name="icon-flag p-1" :src="data.flag" />
        <div class="px-2">{{ teamIndex }}</div>
        <TeamName class-name="px-2" :content="data.club" />
      </div>
    </VTd>
    <VTd :content="data.MP"> {{ data.MP }} </VTd>
    <VTd :content="data.MP"> {{ data.W }} </VTd>
    <VTd :content="data.MP"> {{ data.D }} </VTd>
    <VTd :content="data.MP"> {{ data.L }} </VTd>
    <VTd :content="data.MP"> {{ data.GF }} </VTd>
    <VTd :content="data.MP"> {{ data.GD }} </VTd>
    <VTd :content="data.MP"> {{ data.GA }} </VTd>
    <VTd :content="data.MP"> {{ data.Pts }} </VTd>
    <LastFiveStats :data="data.lastFive" />
  </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Title from "@/components/Atoms/VTitle.vue";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import LastFiveStats from "./LastFiveStats.vue";
import TeamName from "@/components/Atoms/TeamName.vue";
import VTd from "@/components/Atoms/VTd.vue";
import type { IGroupDetails } from "@projectb/shared";
import "@/router/index";
@Component({
  components: { VTd, LastFiveStats, Title, IconFlag, TeamName },
})
export default class Team extends Vue {
  @Prop(String) className!: string;
  @Prop(Object) data!: IGroupDetails;
  @Prop(Number) teamIndex!: number;

  checkTeamIndex(teamIndex: number): string {
    return teamIndex === 2 ? "bl-blue" : teamIndex === 3 ? "" : "bl-orange";
  }

  private directToMatch = (id: number): void => {
    this.$router.push(`matches/${id}`);
  };
}
</script>
