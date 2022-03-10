<template>
  <div class="container border">
    <div class="p-5 mt-2 border">
      <VHeading class="SHeading" tag="h4" content="Goals" />
      <div class="table-responsive">
        <table class="table">
          <thead>
            <StatsTableHeader />
          </thead>
          <tbody class="stats">
            <tr v-for="item in stats" :key="item.id">
              <VTd class="text-center fw-bolder">{{ item.rank }}</VTd>
              <VTd class="text-start">
                <PlayerInfo :player="item" />
              </VTd>
              <VTd class="text-end">{{ item.goals }}</VTd>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IPlayers } from "@projectb/shared";
import StatsTableHeader from "@/components/Molecules/StatsTableHeader.vue";
import PlayerInfo from "@/components/Molecules/PlayerInfo.vue";
import VHeading from "@/components/Atoms/VHeading.vue";
import VTd from "@/components/Atoms/VTd.vue";

@Component({
  components: { StatsTableHeader, PlayerInfo, VHeading, VTd },
})
export default class Stats extends Vue {
  @Prop(Array) stats!: Array<IPlayers>;
}
</script>

<style lang="scss">
@import "index.scss";
</style>
