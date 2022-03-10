<template>
  <td>
    <div class="d-flex justify-content-center pt-2">
      <VImage v-for="(match, index) in data" :key="index" :src="checkSrc(match)" class-name="icon-ratio mx-1" />
    </div>
  </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VImage from "@/components/Atoms/VImage.vue";
@Component({
  components: { VImage },
})
export default class LastFiveStats extends Vue {
  @Prop(Array) data!: Array<string | number>;
  @Prop(String) className!: string;
  icon = {
    iconWinSrc: require("@/assets/win.svg"),
    iconLoseSrc: require("@/assets/lose.svg"),
    iconTieSrc: require("@/assets/tie.svg"),
    iconNoneSrc: require("@/assets/none.svg"),
  };
  checkSrc(match: string | number): string {
    return match === 1
      ? this.icon.iconWinSrc
      : match === -1
      ? this.icon.iconLoseSrc
      : match === 0
      ? this.icon.iconTieSrc
      : this.icon.iconNoneSrc;
  }
}
</script>
