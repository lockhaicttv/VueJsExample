<template>
  <div>
    <VHeading tag="h4" content="Popular" />
    <div class="list">
      <div v-for="player in players" :key="player.id" class="card ml-1 rounded-3">
        <VExternalLink :link="player.url"> <PlayerCard :player="player" /> </VExternalLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import PlayerCard from "@/components/Molecules/PlayerCard.vue";
import VExternalLink from "@/components/Atoms/VExternalLink.vue";
import { IPlayers } from "@projectb/shared";
import VHeading from "@/components/Atoms/VHeading.vue";

@Component({
  components: { PlayerCard, VExternalLink, VHeading },
})
export default class Popular extends Vue {
  @Prop(Array) players!: Array<IPlayers>;
}
</script>
<style lang="scss">
@import "index.scss";
</style>
