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
  min-height:100vh;
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
  margin-left:15px;
}
@media (max-width:800px){
  .login{
    display:block;
  }
  .login_form {
    margin:0;
    padding:25px 0
  }
  .banner{
    max-width:100%;
    max-height:300px;
  }
}
</style>
