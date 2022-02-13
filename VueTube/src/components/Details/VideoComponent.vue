<template>
  <div class="vido-component-cover">
    <div class="video-component-body">
      <div class="video">
        <VideoPlayer />
        <VideoDetail />
        <VideoComments class="hide-on-mobile" />
      </div>
      <div class="suggestion">
        <VideoSuggestions />
      </div>
    </div>
    <VideoComments class="show-on-mobile" />
  </div>
</template>

<script>
import VideoPlayer from "@/components/Video/VideoPlayer.vue";
import VideoDetail from "@/components/Video/VideoDetail.vue";
import VideoComments from "@/components/Video/VideoComments.vue";
import VideoSuggestions from "@/components/Details/Suggestions.vue";
export default {
  components: {
    VideoPlayer,
    VideoDetail,
    VideoComments,
    VideoSuggestions,
  },
  props: ["video"],
};
</script>

<style scoped>
.video-component-body {
  margin-left: 80px;
  display: grid;
  grid-template-columns: 60% 40%;
}
.suggestion {
  width: 100%;
  min-height: 100vh;
}
.show-on-mobile {
  display: none;
}
@media (max-width: 1200px) {
  .video-component-body {
    margin-left: 0px;
    grid-template-columns: 100%;
  }
  .show-on-mobile {
    display: block;
  }
  .hide-on-mobile {
    display: none;
  }
}
</style>
