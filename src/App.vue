<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Perso from './components/Perso.vue'

import Header from './components/Header.vue';
import Body from './components/Body.vue';
import BodyContent from './components/BodyContent.vue';
undefined
</script>

<template>
  <div class="header">
    <Header/>
  </div>
  <div class="body">
    <Body/>
    <BodyContent/>
    <Body/>
    <BodyContent :align="'left'"/>
    <Body/>
  </div>
  <div id="test">
    
  </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
@-webkit-keyframes breathing { from { background-color: rgb(60, 60, 60); } to { background-color: rgb(75, 75, 75); }  }
        @keyframes breathing { from { background-color: rgb(60, 60, 60); } to { background-color: rgb(75, 75, 75); }  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(60, 60, 60);
  -webkit-animation: 1.7s linear 0s infinite alternate breathing;
          animation: 1.7s linear 0s infinite alternate breathing;
}

#perso{
  display: none;
  position:absolute;
  top:20vw;
  right:15vw;
  width:170px;
  padding:15px;
  z-index:99;
}
#test{
  display: none;
  opacity: 1;
  z-index: 999;
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: green;
  padding-top: 200px;
}

</style>
