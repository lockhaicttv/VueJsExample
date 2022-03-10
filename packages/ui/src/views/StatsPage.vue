<template>
  <div class="border bg-white shadow-sm">
    <VSpinner v-if="isLoading" />
    <Stats v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import Stats from "@/components/Organisms/Stats";
import VSpinner from "@/components/Atoms/VSpinner.vue";

@Component({
  components: { Stats, VSpinner },
})
export default class PlayersPage extends Vue {
  @Action("stats/getStatsData") loadStats!: () => void;
  @Getter("stats/isLoading") isLoading!: boolean;

  mounted(): void {
    this.loadStats();
  }
}
</script>
