<template>
  <div class="row">
    <div class="col-12">
      <VImage :src="player.avatar" alt="Player's VImage" class-name="avatar" :width="100" :height="100" />
    </div>
    <div class="col-12 info m-2">
      <VSpan :content="player.name" :class-name="'d-inline-block'" />
      <VSmall><VSpan :content="player.position" class-name="text-muted" /></VSmall>
      <div>
        <VSmall
          ><IconFlag :src="player.flag_country" alt="Flag country" :width="20" :height="20" />&nbsp;
          <VSpan :content="player.country" class-name="text-muted" />
        </VSmall>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VImage from "@/components/Atoms/VImage.vue";
import VSpan from "@/components/Atoms/VSpan.vue";
import VSmall from "@/components/Atoms/VSmall.vue";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import type { IPlayers } from "@projectb/shared";

@Component({
  components: { VSpan, VImage, IconFlag, VSmall },
})
export default class PlayerCard extends Vue {
  @Prop(Object) player!: IPlayers;
}
</script>

<style lang="scss" scoped>
.row {
  height: 230px;
}
</style>
