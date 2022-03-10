<template>
  <div class="position-relative spinner">
    <div class="spinner-grow position-absolute top-50 start-50" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import { Vue } from "vue-property-decorator";

export default class VSpinner extends Vue {}
</script>
<style scoped>
.spinner {
  min-height: 90vh;
}
</style>
