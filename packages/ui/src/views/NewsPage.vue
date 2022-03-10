<template>
  <div v-if="isLoading">
    <VSpinner />
  </div>
  <div v-else class="news container bg-white shadow">
    <News />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import News from "@/components/Organisms/News";
import VSpinner from "@/components/Atoms/VSpinner.vue";

@Component({
  components: { News, VSpinner },
})
export default class NewsPage extends Vue {
  @Action("news/loadNews") loadNews!: () => void;
  @Getter("news/isLoading") isLoading!: boolean;
  mounted(): void {
    this.loadNews();
  }
}
</script>
<style lang="scss"></style>
