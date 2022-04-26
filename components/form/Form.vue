<template>
  <div class="auth">
    <div class="form">
      <form @submit="login">
      <div class="overlay" v-if="isLoading"></div>
        <div class="title">
          <h1>Welcome Back</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span v-if="user">{{ user.uid }}</span>
        </div>
        <div class="form_item">
          <Input
            type="text"
            name="email"
            label="Username or email*"
            placeholder="Enter your mail or username"
            :value="email"
            :onChange="onChangeHanlder"
          />
          <Input
            type="password"
            name="password"
            label="Password*"
            placeholder="Enter your password"
            :value="password"
            :onChange="onChangeHanlder"
          />
          <div class="block text-right mt-2">
            <NuxtLink to="/reset">Forgot password</NuxtLink>
          </div>
          <div class="block">
            <button class="submit" type="submit">Login to your account</button>
          </div>
          <div class="block text-center py-2 error" v-if="error">
            {{ error }}
          </div>
          <div class="block text-center mt-3">
            Don't have and account?
            <NuxtLink to="/reset">Signup for free</NuxtLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.auth {
  display: block;
  width: 100%;
}
.overlay{
  position  :absolute ;
  right: 0 ;
  left : 0 ;
  top: 0 ;
  bottom : 0 ;
  z-index:1 ;
  background-color : rgba(255,255,255,.5);
}
.form {
  display: block;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  position: relative ;
}
.form a {
  color: #000;
  font-weight: 500;
}
.form_item {
}
.title {
  text-align: left;
}
.title p {
  color: #7e7e7e;
}
.submit {
  background: linear-gradient(90deg, #8a217e -7.5%, #f85754 115%);
  padding: 8px 15px;
  border: none;
  width: 100%;
  color: #fff;
  margin-top: 15px;
  border-radius: 25px;
}
.error {
  color: #f00;
}
</style>
<script>
import { auth } from "../../plugins/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      isLoading : false 
    };
  },
  computed: {
    user() {
      return this.$store.state.user || null;
    },
  },
  methods: {
    onChangeHanlder(e) {
      let allowed = ["email", "password"],
        name = (e.target.getAttribute("name") || "").trim();
      if (!name || allowed.indexOf(name) === -1) {
        return;
      }
      this[name] = e.target.value;
    },
    login(e) {
      e.preventDefault();
      if (this.isLoading) {
        return;
      }
      if (!this.email || !this.password) {
        this.error = "Please fill all the required field";
        return;
      }
      this.error = "";
      this.isLoading = true;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          this.isLoading = false;
          res && res.user && this.$store.commit("SIGN_IN", res.user);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.isLoading = false;
          const errorCode = error.code;
          if (errorCode === "auth/user-not-found") {
            this.error = "User not found";
          }
          if (errorCode === "auth/wrong-password") {
            this.error = "Invalid password";
          }
        });
    },
  },
};
</script>
