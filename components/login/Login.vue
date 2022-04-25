<template>
  <div class="login">
    <div class="banner">
      <Banner />
    </div>
    <div class="login_form">
      <Test />
    </div>
  </div>
</template>
<style scoped>
.login {
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 15px;
}
.banner,
.login_form {
  display: flex;
}
.login_form {
  flex: auto;
}
</style>
