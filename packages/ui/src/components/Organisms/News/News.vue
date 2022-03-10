<template>
  <div class="list">
    <NewsCardList :news="news" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { INews } from "@projectb/shared";
import NewsCardList from "@/components/Molecules/NewsCardList.vue";
@Component({
  components: { NewsCardList },
})
export default class News extends Vue {
  @Prop(Array) news!: Array<INews>;
}
</script>

<style lang="scss">
@import "index.scss";
</style>
