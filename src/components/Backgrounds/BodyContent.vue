<script setup>
    import BodyDiagonal from './BodyDiagonal.vue';
    import Body from './Body.vue';
</script>

<script>
export default {
  data() {
    return {
      
    }
  },
  props : {
     align : {
         type : String,
         required: false,
         default: 'right'
     }
  }
}
</script>


<template>
    <div class="bgnd_bodycontent_container">
        <div class="top">
            <BodyDiagonal :alignX="align" :alignY="'top'"/>
        </div>
        <div class="middle">
            <Body :align="align +'_sided'"/>
        </div>
        <div class="bottom">
            <BodyDiagonal :alignX="align" :alignY="'bottom'"/>
        </div>
    </div>
</template>


<style scoped>
.bgnd_bodycontent_container{
    width:100%;
    height: 100%;
}
.bgnd_bodycontent_container.left{
    transform: rotateZ(180deg);
}
.bgnd_bodycontent_container > div{
    position: relative;
    width: 100%;
}
.bgnd_bodycontent_container > .middle{
    min-height: 50vw;
}
.bgnd_bodycontent_container > .top{
    min-height: 25vw;
}
</style>
