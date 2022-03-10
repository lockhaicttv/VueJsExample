<template>
  <div>
    <VSpinner v-if="isLoading" />
    <div v-else>
      <MatchDetailHeader />
      <div class="container px-0 col-xs-12 col-sm-12 col-lg-7 border bg-white shadow">
        <MatchDetailHeading />
        <NavbarDetailMatch />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import NavbarDetailMatch from "@/components/Molecules/NavDetailMatch.vue";
import MatchDetailHeading from "@/components/Organisms/MatchDetailHeading";
import MatchDetailHeader from "@/components/Organisms/MatchDetailHeader";
import VSpinner from "@/components/Atoms/VSpinner.vue";

@Component({
  components: { MatchDetailHeading, NavbarDetailMatch, MatchDetailHeader, VSpinner },
})
export default class MatchDetailPage extends Vue {
  @Action("matchDetails/getDataMatchesById") getDataMatchesById!: (id: string) => void;
  @Getter("matchDetails/isLoading") isLoading!: boolean;

  mounted(): void {
    this.getDataMatchesById(this.$route.params.id);
  }
}
</script>
