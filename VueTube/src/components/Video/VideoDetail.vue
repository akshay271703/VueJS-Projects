<template>
  <div class="video-details">
    <span class="tag" v-for="tag in tags" :key="tag">#{{ tag }}</span>
    <p class="video-title">{{ title }}</p>
    <div class="stats">
      <div class="history">
        <span class="views">{{ views }} views</span>
        <span class="upload-date">{{ date }}</span>
      </div>
      <div class="options">
        <span>
          <v-icon class="mr-1">mdi-thumb-up</v-icon>
          {{ likes }}
        </span>
        <span>
          <v-icon class="mr-1">mdi-thumb-down</v-icon>
          {{ dislikes }}
        </span>
        <span>
          <v-icon class="mr-1" size="30">mdi-share</v-icon>
          SHARE
        </span>
      </div>
    </div>
    <div class="author mt-5">
      <div class="header">
        <p class="author-title">{{ uploader }}</p>
        <button>SUBSCRIBE</button>
      </div>

      <p class="intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quia ad
        numquam ipsam vitae omnis tempore sunt impedit similique dicta iusto ex
        distinctio cumque, perferendis mollitia. Accusamus nisi iure magnam.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tags: ["created", "by", "akshay", "bhargava"],
      title: "Demo video | Akshay Bhargava",
      views: "1,210,236",
      date: "Oct 15, 2021",
      likes: "58K",
      dislikes: "1.19K",
      uploader: "Akshay Bhargava",
      comments: "2417",
    };
  },
};
</script>

<style scoped>
.tag {
  color: #065fd4;
  margin-right: 2px;
  font-size: 13px;
}
.video-title {
  font-size: 25px;
  margin-bottom: 0;
}
.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.history span {
  margin-right: 10px;
  color: #666;
}
.options span {
  margin-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.header button {
  padding: 5px 20px;
  background-color: #c00;
  color: white;
  border-radius: 5px;
  border: none;
}
.author-title {
  font-size: 20px;
  margin-bottom: 0;
}
.author {
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
@media (max-width: 1200px) {
  .video-details {
    max-width: 100vw;
    padding: 20px;
  }
}
@media (max-width: 600px) {
  .video-title {
    font-size: 20px;
    margin-bottom: 0;
  }
  .options span {
    margin-right: 10px;
  }
  .stats span {
    font-size: 13px;
  }
}

@media (max-width: 500px) {
  .stats {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  }
  .history {
    margin-top: 10px;
  }
  .options {
    margin-top: 10px;
  }
  .options span {
    margin-right: 25px;
  }
  .stats span {
    font-size: 16px;
  }
}
</style>
