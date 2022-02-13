<template>
  <div class="video" @click="handleClick">
    <img :src="video.img" :alt="video.title" />
    <div class="details">
      <p class="video-title">{{ video.title }}</p>
      <span class="uploader custom-text">{{ video.uploader }}</span>
      <span class="views custom-text"
        >{{ getRandomViews }} {{ video.views }} views</span
      >
      <span class="date custom-text"
        >{{ getRandomDate }} {{ video.date }} years ago</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['video'],
  methods: {
    handleClick() {
      this.$router.push('/play');
    },
  },
  computed: {
    getRandomDate() {
      return Math.floor(Math.random() * 5) + 1;
    },
    getRandomViews() {
      return Math.floor(Math.random() * 123455);
    },
  },
};
</script>

<style scoped>
.video img {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}
.video {
  padding-bottom: 10px;
  max-height: 400px;
  width: 100%;
}

.video-title {
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0;
}
.uploader {
  display: block;
  margin-top: 10px;
}
.custom-text {
  color: #999;
  margin-left: 20px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 0;
}
.video:hover {
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.8);
  transform: scale(1.006);
  transition: all 0.3s ease;
  cursor: pointer;
}
</style>
