<template>
  <div class="landing-body">
    <h2 class="title-text bold">Unlimited movies, TV</h2>
    <h2 class="title-text bold">shows and more.</h2>
    <h4 class="sub-title-1 my-3">Watch anywhere. Cancel anytime.</h4>
    <h4 class="sub-title-2">
      Ready to watch? Enter your email to create or restart your membership.
    </h4>
    <div class="input-box mt-5">
      <input type="text" placeholder="Emaill Address" />
      <button @click="redirect">GET STARTED</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push('/browse');
    },
  },
};
</script>

<style scoped>
.landing-body {
  text-align: center;
  color: #fff;
  position: absolute;
  width: 800px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
}
h2 {
  letter-spacing: 2px;
  line-height: 4.5rem;
}
.title-text {
  font-size: 65px;
}
.bold {
  font-weight: 500;
}
.sub-title-1 {
  font-size: 25px;
  font-weight: 400;
}
.sub-title-2 {
  font-size: 20px;
  font-weight: 300;
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
  .landing-body {
    width: 600px;
  }
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
  .title-text {
    font-size: 55px;
  }
  h2 {
    letter-spacing: 2px;
    line-height: 3.5rem;
  }
}
@media (max-width: 650px) {
  .landing-body {
    width: 70%;
  }
  .title-text {
    font-size: 30px;
  }
  h2 {
    letter-spacing: 2px;
    line-height: 3rem;
  }
  .sub-title-1 {
    font-size: 18px;
    font-weight: 400;
  }
  .sub-title-2 {
    font-size: 15px;
    font-weight: 300;
  }
}
</style>
