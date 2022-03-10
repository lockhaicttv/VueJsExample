<template>
  <div>
    <div v-for="newspaper in newspapers" :key="newspaper.id" class="item border-top p-3">
      <div>
        <VSpan :content="newspaper.newspaperName" />&nbsp;<VSpan class-name="text-muted" :content="newspaper.time" />
      </div>
      <VExternalLink :link="newspaper.url">
        {{ newspaper.title }}
      </VExternalLink>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { INews } from "@projectB/shared";
import VExternalLink from "@/components/Atoms/VExternalLink.vue";
import VSpan from "@/components/Atoms/VSpan.vue";
@Component({
  components: { VExternalLink, VSpan },
})
export default class NewspaperCardBody extends Vue {
  @Prop(Array) newspapers!: Array<INews>;
}
</script>
