<template>
  <div class="faq-body">
    <div class="content">
      <h3 class="section-heading">Frequently Asked Questions</h3>
      <FAQDropDown />
      <p class="title text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div class="input-box mt-5">
        <input type="text" placeholder="Emaill Address" />
        <button>GET STARTED</button>
      </div>
    </div>
  </div>
</template>

<script>
import FAQDropDown from '@/components/Home/FAQDropDown.vue';
export default {
  components: {
    FAQDropDown,
  },
};
</script>

<style scoped>
.faq-body {
  background-color: black;
  color: white;
  padding: 30px;
}
h3.section-heading {
  font-size: 45px;
  padding: 20px 0;
  text-align: center;
}
.content {
  max-width: 800px;
  margin: auto;
}
.input-box {
  width: 100%;
  display: flex;
}
.input-box input {
  padding: 20px;
  width: 68%;
  background-color: white;
}
.input-box button {
  background-color: var(--themeRed);
  width: 32%;
  border: 1px solid var(--themeRed);
  font-size: 25px;
  padding: 5px;
}
@media (max-width: 950px) {
  .input-box {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .input-box input {
    width: 100%;
    padding: 10px;
  }
  .input-box button {
    width: 200px;
    margin-top: 20px;
    font-size: 18px;
  }
  h3.section-heading {
    font-size: 35px;
    padding: 20px 0;
    text-align: center;
  }
}
</style>
