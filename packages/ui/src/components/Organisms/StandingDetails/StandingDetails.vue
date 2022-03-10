<template>
  <div class="pt-3">
    <div v-for="group in standingData" :key="group.groupName" class="group px-2">
      <Title class-name="group-title h5 fw-bold " :content="group.groupName" />
      <div class="table-responsive">
        <table class="table table-hover text-center">
          <GroupHeader class-name="text-muted" :data="groupHeader" />
          <tbody v-for="(team, index) in group.groupDetails" :key="team.club">
            <Team :data="team" :team-index="index" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IStanding } from "@projectB/shared";
import GroupHeader from "@/components/Molecules/GroupHeader.vue";
import Team from "@/components/Molecules/Team.vue";
import Title from "@/components/Atoms/VTitle.vue";
import VSpinner from "@/components/Atoms/VSpinner.vue";

@Component({
  components: { VSpinner, Title, Team, GroupHeader },
})
export default class StandingDetails extends Vue {
  @Prop(Array) standingData!: IStanding[];

  private groupHeader: Array<string> = ["Team", "MP", "W", "D", "L", "GF", "GD", "GA", "Pts", "Last five"];
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
