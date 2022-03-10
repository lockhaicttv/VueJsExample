<template>
  <div class="trending-container">
    <VHeading tag="h4" content="Trending" />
    <div class="trending">
      <div v-for="item in trending" :key="item.playerID" class="trending-item">
        <NewspaperCard :newspaper="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NewspaperCard from "@/components/Molecules/NewspaperCard.vue";
import { ITrending } from "@projectb/shared";
import VHeading from "@/components/Atoms/VHeading.vue";
@Component({
  components: { NewspaperCard, VHeading },
})
export default class Trending extends Vue {
  @Prop(Array) trending!: Array<ITrending>;
}
</script>
<style lang="scss" scoped>
@import "index.scss";
</style>
