<template>
  <div class="sidebar-body py-1" :class="!showSidebar ? 'compact' : 'expand'">
    <div
      class="option"
      :class="!showSidebar ? 'compact' : 'expand'"
      @click="redirectHome"
    >
      <v-icon>mdi-home</v-icon>
      <span>Home</span>
    </div>
    <div class="option" :class="!showSidebar ? 'compact' : 'expand'">
      <v-icon>mdi-compass-outline</v-icon>
      <span>Explore</span>
    </div>
    <div class="option" :class="!showSidebar ? 'compact' : 'expand'">
      <v-icon>mdi-youtube-subscription</v-icon>
      <span>Subscriptions</span>
    </div>
    <div class="divider"></div>
    <div class="extras" v-if="showSidebar">
      <div class="option" :class="!showSidebar ? 'compact' : 'expand'">
        <v-icon>mdi-music-box-multiple</v-icon>
        <span>Library</span>
      </div>
      <div class="option" :class="!showSidebar ? 'compact' : 'expand'">
        <v-icon>mdi-history</v-icon>
        <span>History</span>
      </div>
      <div class="option" :class="!showSidebar ? 'compact' : 'expand'">
        <v-icon>mdi-video-vintage</v-icon>
        <span>Your Videos</span>
      </div>
      <div class="option" :class="!showSidebar ? 'compact' : 'expand'">
        <v-icon>mdi-clock</v-icon>
        <span>Watch Later</span>
      </div>
      <div class="option" :class="!showSidebar ? 'compact' : 'expand'">
        <v-icon>mdi-thumb-up</v-icon>
        <span>Liked Videos</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(['showSidebar']),
  },
  methods: {
    redirectHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 300;
}
.sidebar-body {
  width: 250px;
  z-index: 2;
  position: fixed;
  top: 70px;
  left: 0;
  background-color: white;
  min-height: 100vh;
}
.sidebar-body.compact {
  max-width: 75px;
  z-index: 2;
}
.option {
  padding: 8px 25px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.option:hover {
  background-color: #eee;
}
.option span {
  margin-left: 20px;
}
.option.compact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.option.compact:hover {
  background-color: #eee;
}
.option.compact span {
  display: block;
  font-size: 11px;
  margin-top: 5px;
  margin-left: 0;
}
.divider {
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #ddd;
}
@media (max-width: 600px) {
  .sidebar-body {
    display: none;
  }
}
</style>
