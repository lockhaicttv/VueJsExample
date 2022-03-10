<template>
  <div v-if="isLoading">
    <VSpinner />
  </div>
  <Matches v-else />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import Matches from "@/components/Organisms/Matches";
import VSpinner from "@/components/Atoms/VSpinner.vue";
@Component({
  components: {
    Matches,
    VSpinner,
  },
})
export default class MatchesPage extends Vue {
  @Action("matchs/getDataMatches") getDataMatches!: () => void;
  @Action("matchs/getDataMatchesbyId") getDataMatchesbyId!: (id: string) => void;
  @Getter("matchs/getLoading") isLoading!: boolean;
  mounted(): void {
    if (this.$route?.params?.id) {
      this.getDataMatchesbyId(this.$route.params.id);
    } else {
      this.getDataMatches();
    }
  }
}
</script>
