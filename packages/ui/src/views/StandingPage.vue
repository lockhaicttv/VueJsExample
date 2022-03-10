<template>
  <div v-if="isLoading">
    <div class="container p-0 shadow pt-0">
      <div class="container-fluid p-0">
        <StandingHeader class-name="title-color title-bp-color pb-1 justify-content-start" />
        <StandingDetails />
      </div>
    </div>
  </div>
  <div v-else>
    <VSpinner />
  </div>
</template>

<script lang="ts">
import StandingDetails from "@/components/Organisms/StandingDetails";
import StandingHeader from "@/components/Organisms/StandingHeader";
import { Vue, Component } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import VSpinner from "@/components/Atoms/VSpinner.vue";

@Component({
  components: { VSpinner, StandingDetails, StandingHeader },
})
export default class StandingPage extends Vue {
  @Action("standing/getAllData") getAllData!: () => Promise<void>;
  @Getter("standing/isLoading") isLoading!: () => boolean;

  mounted(): void {
    this.getAllData();
  }
}
</script>

<style scoped></style>
