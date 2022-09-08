<script setup>
import Header from './components/Header.vue';
import Body from './components/Body.vue';
import BodyContent from './components/BodyContent.vue';

import MeTabOne from './components/Content/Me/TabOne.vue';
import MeTabTwo from './components/Content/Me/TabTwo.vue';

import CookieTabOne from './components/Content/Cookie/TabOne.vue';

import PersonalProjectTabOne from './components/Content/PersonalProject/TabOne.vue';

import Content from './js/content';
import Tab from './js/tab';

</script>

<script>
export default {
  data() {
        return {
            contentArray : [
              new Content(
                'me',
                [
                  new Tab('Info de base','Info de base', MeTabOne ),
                  new Tab('petite description','Une petite description', MeTabTwo )
                ],
                false,
                '115vw'
              ),
              new Content(
                'cookie',
                [
                  new Tab('Cookie','Cookie',CookieTabOne)
                ],
                false
              ),
              new Content(
                'portfolio', 
                [
                  new Tab('description', 'Projets Personnels', PersonalProjectTabOne),
                  new Tab('aperçu', 'Projets Personnels', PersonalProjectTabOne)
                ],
                true
              ),
              new Content(
                'blocNote',
                [
                  new Tab('description', 'Projets Personnels', PersonalProjectTabOne),
                  new Tab('aperçu', 'Projets Personnels', PersonalProjectTabOne)
                ],
                true
              )
            ]
        }
    }
}
</script>

<template>
  <div class="header">
    <Header/>
  </div>
  <div class="body">
    <template v-for="(content,index) in contentArray">
        <Body></Body>
        <BodyContent :id="content.name" :align="index % 2 === 0 ? 'right' : 'left'" :height="content.height" :content="content"/>
    </template>
    <Body></Body>
  </div>
  <div id="test">
    
  </div>
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
