<template>
  <v-app>
    <v-main class="blue-text" style="background-color: #F5F5FF; font-family: Verdana, sans-serif;">
      <router-view class="pa-0" />
    </v-main>
  </v-app>
</template>
<style lang="scss" scoped>
.blue-text {
  color: #090954,
}
</style>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
