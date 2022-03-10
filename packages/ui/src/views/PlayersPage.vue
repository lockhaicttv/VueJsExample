<template>
  <div v-if="isLoading">
    <VSpinner />
  </div>
  <div v-else class="players container bg-white shadow">
    <div class="content">
      <Trending />
      <Popular />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import Trending from "@/components/Organisms/Trending";
import Popular from "@/components/Organisms/Popular";
import VSpinner from "@/components/Atoms/VSpinner.vue";

@Component({
  components: { Trending, Popular, VSpinner },
})
export default class PlayersPage extends Vue {
  @Action("players/loadPlayers") loadPlayers!: () => void;
  @Action("players/loadTrending") loadTrending!: () => void;
  @Getter("players/isLoading") isLoading!: boolean;

  mounted(): void {
    this.loadPlayers();
    this.loadTrending();
  }
}
</script>
<style>
.players {
  background-color: #f9f9fa;
  border: solid 1px #ebebeb;
}
.content {
  margin-left: 20px;
}
</style>
