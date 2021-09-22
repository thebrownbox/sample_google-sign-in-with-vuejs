<template>
  <h4>Login using firebase</h4>

  <button v-if="userRef" @click="clickLogout()">Logout</button>
  <button v-else @click="clickLogin()">Login</button>
</template>

<script>
import * as firebase from "firebase/auth";
import { onBeforeMount, ref } from "@vue/runtime-core";

export default {
  setup() {
    const userRef = ref(null);

    const clickLogin = () => {
      console.log("Click login!");
      
      const provider = new firebase.GoogleAuthProvider();
      console.log(provider);
      const auth = firebase.getAuth();
      firebase.signInWithPopup(auth, provider).then((r)=>{
        console.log(r);
      }).catch((e) => {
        console.log("error:" + e);
      });
    };

    const clickLogout = () => {
      console.log("Click logout!");
      const auth = firebase.getAuth();
      auth
        .signOut()
        .then(() => {
          userRef.value = undefined;
        })
        .catch((e) => {
          console.log("error: " + e);
        });
    };

    onBeforeMount(() => {
      const auth = firebase.getAuth();
      firebase.onAuthStateChanged(auth, (user) => {
        userRef.value = user;
        if (!user) {
          console.log("You NOT logged in!");
        } else {
          console.log("LOGIN: OK!" + user.email);
        }
      });
    });

    return {
      clickLogin,
      clickLogout,
      userRef,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
