<template>
  <div class="cover">
    <div class="showcase-body">
      <div class="text" :class="position === 'left' ? 'order-1' : 'order-2'">
        <p class="header-title">{{ title }}</p>
        <p class="header-subtitle">{{ subtitle }}</p>
      </div>
      <div :class="position === 'left' ? 'order-2' : 'order-1'">
        <img :src="image" alt="" class="section-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'image', 'position'],
};
</script>

<style scoped>
.cover {
  border-top: 8px solid rgb(32, 32, 32);
}
.showcase-body {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 50vh;
}
.showcase-body div {
  padding: 20px;
}
.section-image {
  max-width: 100%;
  height: auto;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
}
.order-1 {
  order: 1;
}
.order-2 {
  order: 2;
}
p.header-title {
  font-size: 55px;
  font-weight: bold;
  margin-bottom: 10px;
}
p.header-subtitle {
  font-size: 25px;
  letter-spacing: 1px;
}
@media (max-width: 950px) {
  .showcase-body {
    max-width: 100%;
    margin: auto;
    grid-template-columns: 100%;
    min-height: 50vh;
    text-align: center;
  }
  .text {
    align-items: center;
  }
  .text {
    order: 1 !important;
  }
  p.header-title {
    font-size: 40px;
    margin-bottom: 0;
  }
  p.header-subtitle {
    font-size: 20px;
  }
}
@media (max-width: 650px) {
  p.header-title {
    font-size: 30px;
  }
  p.header-subtitle {
    font-size: 15px;
  }
}
</style>
