<template>
  <div>
    <VExternalLink :link="player.url">
      <div>
        <VImage class-name="rounded-circle" :src="player.avatar" alt="avatar" :width="50" :height="50" />
        <div class="float-end">
          <VHeading tag="h6" :content="player.name" />
          <div>
            <VSmall>
              <VSpan class-name="text-muted" :content="player.country" /> -
              <VSpan class-name="text-muted" :content="player.position" />
            </VSmall>
          </div>
        </div>
      </div>
    </VExternalLink>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import type { ITrending } from "@projectB/shared";
import VExternalLink from "@/components/Atoms/VExternalLink.vue";
import VHeading from "@/components/Atoms/VHeading.vue";
import VImage from "@/components/Atoms/VImage.vue";
import VSpan from "@/components/Atoms/VSpan.vue";
import VSmall from "@/components/Atoms/VSmall.vue";
@Component({
  components: { VHeading, VSpan, VImage, VExternalLink, VSmall },
})
export default class NewspaperCardHeader extends Vue {
  @Prop(Object) player!: ITrending;
}
</script>
