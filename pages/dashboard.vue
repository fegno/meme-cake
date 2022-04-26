<template>
  <div v-if="user">
    <h1>DASHBOARD</h1>
    {{ user.uid }}
  </div>
</template>
<script>
export default {
  middleware : "auth",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
