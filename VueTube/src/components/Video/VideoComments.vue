<template>
  <div class="comments">
    <div class="comment mt-4" v-for="(comment, index) in comments" :key="index">
      <p class="user">
        {{ comment.name }}
        <span>{{ Math.floor(Math.random() * 15) }} min ago</span>
      </p>
      <span
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        praesentium esse quo aperiam, quaerat expedita!</span
      >
      <div class="stats my-2">
        <span class="mr-5">
          <v-icon size="20">mdi-thumb-up-outline</v-icon>
          {{ Math.floor(Math.random() * 1000) }}
        </span>
        <span>
          <v-icon size="20">mdi-thumb-down-outline</v-icon>
          {{ Math.floor(Math.random() * 100) }}
        </span>
      </div>
      <p class="link">View Replies</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      comments: [],
    };
  },
  async created() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.comments = result.data;
  },
};
</script>

<style scoped>
span {
  font-size: 14px;
}
p.user {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0;
}
.user span {
  font-weight: 300;
}
.link {
  color: blue;
  cursor: pointer;
  margin-left: 15px;
}
.stats {
  display: flex;
  align-items: center;
}

@media (max-width: 1200px) {
  .comments {
    padding: 10px 30px;
  }
}
</style>
