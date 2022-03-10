<template>
  <div>
    <VExternalLink class-name="name-player" :link="player.url">
      <div>
        <VSpan :content="player.name" />
      </div>
      <IconFlag :src="player.flag_country" :alt="'Flag country'" :width="20" :height="20" />&nbsp;
      <VSpan :content="player.country" :class-name="'text-muted'" />
    </VExternalLink>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VSpan from "@/components/Atoms/VSpan.vue";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import VExternalLink from "@/components/Atoms/VExternalLink.vue";
import type { IPlayers } from "@projectb/shared";

@Component({
  components: { VSpan, IconFlag, VExternalLink },
})
export default class PlayerCard extends Vue {
  @Prop(Object) player!: IPlayers;
}
</script>
