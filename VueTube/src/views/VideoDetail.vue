<template>
  <div class="video-detail-body">
    <Sidebar class="sidebar" />
    <VideoComponent />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import VideoComponent from "@/components/Details/VideoComponent.vue";
export default {
  components: {
    Sidebar,
    VideoComponent,
  },
};
</script>

<style scoped>
@media (max-width: 1200px) {
  .sidebar {
    display: none;
  }
}
</style>
