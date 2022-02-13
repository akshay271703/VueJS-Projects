<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
:root {
  --themeRed: #e50914;
  --themeDark: #141414;
}
* {
  box-sizing: border-box;
}
</style>
