<template>
  <div>
    <div v-for="item in news" :key="item.id" class="mb-3 news-card">
      <VExternalLink :link="item.link"> <NewsCard :item="item" /> </VExternalLink>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { INews } from "@projectb/shared";
import VExternalLink from "@/components/Atoms/VExternalLink.vue";
import NewsCard from "@/components/Molecules/NewsCard.vue";
@Component({
  components: { VExternalLink, NewsCard },
})
export default class NewsCardList extends Vue {
  @Prop(Array) news!: Array<INews>;
}
</script>
