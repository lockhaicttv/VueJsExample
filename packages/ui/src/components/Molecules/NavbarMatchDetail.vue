<template>
  <div class="bg-dark p-3 ps-4 d-flex mStatsHeader">
    <button class="btn btn-link p-0" @click="directToHome">
      <IconFlag :src="iconBackSrc" :height="25" :width="25" />
    </button>
    <VHeading class="text-white px-3 mb-0 pt-1" tag="h5" :content="homeTeam + '-' + awayTeam" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VHeading from "@/components/Atoms/VHeading.vue";
import IconFlag from "@/components/Atoms/IconFlag.vue";

@Component({
  components: { IconFlag, VHeading },
})
export default class MatchDetailHeader extends Vue {
  @Prop(String) homeTeam!: string;
  @Prop(String) awayTeam!: string;

  private iconBackSrc = require("@/assets/left-arrow.svg");

  private directToHome = (): void => {
    this.$router.push("/");
  };
}
</script>
