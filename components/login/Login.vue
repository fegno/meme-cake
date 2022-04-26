<template>
  <div class="login">
    <div class="banner">
      <Banner />
    </div>
    <div class="login_form">
      <Form />
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
.login_form{
}
.banner{
  flex:auto ;
  max-width:600px;
}
.login_form {
  flex: auto;
  justify-content: center;
  align-items: center;
}
</style>
