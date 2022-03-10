<template>
  <div class="text-center py-3 border-top bg-white footer">
    @Copyright
    <TeamName content="Techbase Vietnam Dept 3" />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import TeamName from "@/components/Atoms/TeamName.vue";

@Component({
  components: { TeamName },
})
export default class Footer extends Vue {}
</script>

<style scoped>
.footer {
  height: 10vh;
}
</style>
