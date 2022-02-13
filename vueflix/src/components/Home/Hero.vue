<template>
  <div class="backdrop">
    <div class="content">
      <div class="slot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.backdrop {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: url('../../assets/images/home-cover.jpg') no-repeat center
    center/cover;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
}
.slot {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
