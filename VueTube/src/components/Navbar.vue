<template>
  <div class="navbar-body px-5 py-3">
    <v-icon class="icon menu" @click="toggleSidebar">mdi-menu</v-icon>
    <div class="layout">
      <span class="branding">VueTube</span>
      <div class="search-box">
        <div class="search-bar">
          <input type="text" class="search" placeholder="Search" />
          <button><v-icon>mdi-magnify</v-icon></button>
        </div>
        <v-icon class="microphone-icon icon">mdi-microphone</v-icon>
      </div>
      <div class="icons">
        <v-icon class="icon">mdi-video-outline</v-icon>
        <v-icon class="icon">mdi-dots-grid</v-icon>
        <v-icon class="icon">mdi-bell</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    toggleSidebar() {
      this.$store.dispatch("displaySidebar", !this.showSidebar);
    },
  },
  computed: {
    ...mapGetters(["showSidebar"]),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Raleway:wght@100;200;300;400&display=swap");
* {
  font-family: "Raleway", sans-serif;
}
.navbar-body {
  display: flex;
  align-items: center;
  position: fixed;
  width: 100vw;
  z-index: 3;
  background-color: white;
}
.layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.branding {
  font-size: 25px;
}
.icon {
  margin-right: 20px;
  cursor: pointer;
}
.icon.menu {
  padding-bottom: 10px;
  margin-left: 5px;
}
.search-box {
  display: flex;
}
.search-box input {
  min-width: 400px;
  padding: 5px 20px;
}
.search-box button {
  background-color: #eee;
  padding: 5px 10px;
}
.search-bar {
  border: 1px solid #ccc;
}
.microphone-icon {
  margin-left: 10px;
}

@media (max-width: 850px) {
  .icon {
    margin-right: 10px;
  }
  .search-box input {
    min-width: 300px;
  }
}

@media (max-width: 660px) {
  .search-box input {
    min-width: 200px;
    max-width: 200px;
    padding: 2px 5px;
    font-size: 13px;
  }
  .search-box button {
    padding: 2px 5px;
  }
  .icon {
    font-size: 10px;
  }
  .branding {
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .icons {
    display: none;
  }
  .search-box input {
    min-width: 150px;
    max-width: 150px;
  }
  .icon.menu {
    display: none;
  }
}
@media (max-width: 400px) {
  .search-box input {
    min-width: 100px;
    max-width: 100px;
  }
  .branding {
    font-size: 16px;
  }
}
</style>
