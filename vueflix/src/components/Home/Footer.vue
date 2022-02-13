<template>
  <div class="footer-body">
    <div class="content">
      <span class="mb-5 ml-5 d-block title"
        >Questions? Don't call us bruh!</span
      >
      <div class="footer-grids">
        <ul class="grid">
          <li>FAQ</li>
          <li>Investors Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
          <li class="s-mobile">Media Centre</li>
        </ul>
        <ul class="grid">
          <li>Help Centre</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
          <li class="s-mobile">Terms of Use</li>
        </ul>
        <ul class="grid">
          <li>Account</li>
          <li>Ways to watch</li>
          <li>Corporate Information</li>
          <li>Only On Netflix</li>
          <li class="s-mobile">Contact Us</li>
        </ul>
        <ul class="grid h-mobile">
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-body {
  border-top: 10px solid rgb(32, 32, 32);
  padding: 30px 30px 50px 30px;
  background-color: black;
  color: #757575;
}
.content {
  max-width: 900px;
  margin: auto;
}
.footer-grids {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  align-items: flex-start;
}
li {
  list-style: none;
  font-size: 14px;
  line-height: 2rem;
}
.s-mobile {
  display: none;
}
@media (max-width: 768px) {
  .s-mobile {
    display: block;
  }
  .h-mobile {
    display: none;
  }
  .footer-grids {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .s-mobile {
    display: none;
  }
  .h-mobile {
    display: block;
  }
  .footer-grids {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
