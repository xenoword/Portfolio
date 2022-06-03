<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Perso from './components/Perso.vue'
import Background from './components/Backgrounds/MainBackground.vue'

import Trapeze from './components/Backgrounds/BodyDiagonal.vue';
import BodyDiagonal from './components/Backgrounds/BodyDiagonal.vue';
</script>

<template>
  <div id="background">
    <Background/>
  </div>
  <div id="content">
    <div id="perso">
      <Perso/>
    </div> 
  </div>
  <div id="test">
    <!-- <Trapeze :width="'40vw'" :height="'2vw'" :color="'rgb(82,27,170)'" :IsReverse="true" :HasABorder="true"/> -->
    <BodyDiagonal :alignX="'left'" :alignY="'bottom'"/>
  </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#background{
  position: absolute;
  top: 0;
  left: 0;
}
#content{
  margin-top: 35vw;
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
