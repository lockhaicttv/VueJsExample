<template>
  <div class="card">
    <div class="card-header">
      <NewspaperCardHeader :player="newspaper" />
    </div>
    <NewspaperCardBody :newspapers="newspaper.newspaper" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NewspaperCardHeader from "./NewspaperCardHeader.vue";
import NewspaperCardBody from "./NewspaperCardBody.vue";
import type { ITrending } from "@projectb/shared";

@Component({
  components: { NewspaperCardHeader, NewspaperCardBody },
})
export default class NewspaperCard extends Vue {
  @Prop(Object) newspaper!: ITrending;
}
</script>
