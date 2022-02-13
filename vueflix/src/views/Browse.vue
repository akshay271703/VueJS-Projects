<template>
  <div class="browse-body">
    <Header hide="false" />
    <div class="options">
      <h1 class="text-center heading">Who's Watching?</h1>
      <div class="user-grid mt-lg-7">
        <div class="user">
          <img src="@/assets/images/user-blue.png" class="user-image" />
          <p>Akshay</p>
        </div>
        <div class="user">
          <img src="@/assets/images/user-red.png" class="user-image" />
          <p>Ak</p>
        </div>
        <div class="user">
          <img src="@/assets/images/user-yellow.png" class="user-image" />
          <p>Home</p>
        </div>
        <div class="user">
          <img src="@/assets/images/user-child.png" class="user-image" />
          <p>Children</p>
        </div>
        <div class="user">
          <v-icon size="150px" color="#999" class="add-profile"
            >mdi-plus-circle</v-icon
          >
          <p>Add</p>
        </div>
      </div>
      <div class="text-center">
        <button class="manage">Manage Profiles</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue';
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.heading {
  font-weight: 400;
  font-size: 55px;
}
.browse-body {
  background-color: var(--themeDark);
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  max-height: 100vh;
  color: white;
}
.browse-body::-webkit-scrollbar {
  display: none;
}
.options {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.user-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
}
.user {
  text-align: center;
  cursor: pointer;
}
.user img {
  border: 3px solid transparent;
}
.user p {
  color: #999;
}
.user-image {
  width: 150px;
  height: 150px;
  border-radius: 8px;
}
.user:hover img {
  border-color: white;
}
.user:hover p {
  color: white;
}
button.manage {
  text-align: center;
  margin-top: 80px;
  background-color: transparent;
  border: 1px solid #999;
  padding: 5px 20px;
  color: #999;
  font-size: 20px;
  letter-spacing: 2px;
}
button.manage:hover {
  color: white;
  border-color: white;
}
.add-profile:hover {
  border-radius: 8px;
  background-color: white;
}
@media (max-width: 950px) {
  .user-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .user-image {
    width: 100px;
    height: 100px;
  }
  button.manage {
    margin-top: 30px;
  }
  .user:last-child {
    display: none;
  }
}
@media (max-width: 600px) {
  .user-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .user-image {
    width: 125px;
    height: 125px;
  }
  .heading {
    font-weight: 400;
    font-size: 40px;
    line-height: 2.5rem;
    margin-bottom: 10px;
  }
  button.manage {
    margin-top: 10px;
  }
}
</style>
