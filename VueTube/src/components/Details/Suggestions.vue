<template>
  <div class="suggestion-body">
    <div class="suggestion" v-for="item in suggestions" :key="item.id">
      <img :src="item.img" alt="" class="suggestion-img" />
      <div>
        <span class="suggestion-title"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, error?
        </span>
        <span class="uploader">Uploader Demo name</span>
        <span class="stats"
          >{{ Math.floor(Math.random() * 100000) }} views •
          {{ Math.floor(Math.random() * 5) }} years ago</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import getDummyTemplates from "@/assets/dummyTemplates.js";
export default {
  data: () => {
    return {
      suggestions: getDummyTemplates(),
    };
  },
};
</script>

<style scoped>
.suggestion-body {
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  margin-top: 55px;
}
.suggestion-img {
  max-height: auto;
  width: 200px;
}
.suggestion {
  display: flex;
  justify-content: baseline;
  margin-bottom: 20px;
}
.suggestion div {
  margin-left: 10px;
}
span.suggestion-title {
  font-size: 14px;
  font-weight: 500;
  display: block;
}
span.uploader,
span.stats {
  font-size: 14px;
  font-weight: 300;
  margin-top: 10px;
  display: block;
}

@media (max-width: 1200px) {
  .suggestion-body {
    min-height: 0;
    padding: 20px 0;
    margin-top: 20px;
  }
}
</style>
