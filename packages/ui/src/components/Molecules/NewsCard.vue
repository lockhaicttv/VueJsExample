<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex justify-content-between text-start">
        <div>
          <VHeading class="text-primary hover-underline" :tag="'h5'" :content="item.title" />
          <VSpan class-name="text-muted" :content="item.newspaperName" /> -
          <VSmall><VSpan class-name="text-muted" :content="item.time" /></VSmall>
        </div>
        <div>
          <VImage class-name="rounded" :src="item.img" alt="Image" :width="120" :height="100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import type { INews } from "@projectb/shared";
import VHeading from "@/components/Atoms/VHeading.vue";
import VImage from "@/components/Atoms/VImage.vue";
import VSpan from "@/components/Atoms/VSpan.vue";
import VSmall from "@/components/Atoms/VSmall.vue";

@Component({
  components: { VHeading, VSpan, VImage, VSmall },
})
export default class NewsCard extends Vue {
  @Prop(Object) item!: INews;
}
</script>
