<script setup>

import Header from './Header.vue'
import Body from './Body.vue'
import BodyContent from './BodyContent.vue';
</script>

<template>
  <div id="background_container">
    <div id="header">
        <Header/>
    </div>
    <div id="body">
        <Body/>
        <BodyContent :align="'left'"/>
        <BodyContent/>
        <Body/>
    </div>
    <div id="footer">

    </div>
  </div>
</template>

<style scoped>
#background_container{
  background-color: rgb(60, 60, 60);
  -webkit-animation: 1.6s linear infinite alternate pulsating_bgnd;
          animation: 1.6s linear infinite alternate pulsating_bgnd;
}
div{
    width: 100vw;
    overflow: hidden;
}

#header{
  height:28vw;
  z-index: 1;
}
#body{
  position:relative;
  z-index: 2;
}
/* animation fond */
@-webkit-keyframes pulsating_bgnd { 0%,5% { background-color: rgb(60, 60, 60); } 95%,100% { background-color: rgb(80, 80, 80); }  }
        @keyframes pulsating_bgnd { 0%,5% { background-color: rgb(60, 60, 60); } 90%,100% { background-color: rgb(80, 80, 80); }  }

/* une animation de lmière qui bouge */
.cylon_eye {
  background-color: red;
  background-image:         linear-gradient(to right, rgba( 0,0,0,0.9 ) 25%, rgba( 0,0,0,0.1 ) 50%, rgba( 0,0,0,0.9 ) 75%);
  color: white;
  height: 100%;
  width: 20%;

  -webkit-animation: 4s linear 0s infinite alternate move_eye;
          animation: 4s linear 0s infinite alternate move_eye;
}

@-webkit-keyframes move_eye { from { margin-left:-20%; } to { margin-left:100%; }  }
        @keyframes move_eye { from { margin-left:-20%; } to { margin-left:100%; }  }
</style>
