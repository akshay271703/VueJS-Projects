<template>
  <div class="home-body">
    <Sidebar />
    <VideoGrid />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import VideoGrid from "@/components/VideoGrid.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    VideoGrid,
  },
};
</script>

<style scoped>
.home-body {
  display: flex;
}
</style>
