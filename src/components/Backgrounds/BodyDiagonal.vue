<script setup>
    import Trapeze from './Trapeze.vue';
</script>

<script>
export default {
  data() {
    return {
      
    }
  },
  props : {
     alignX : {
         type : String,
         required: false,
         default: 'right'
     },
     alignY : {
         type : String,
         required: false,
         default: 'top'
     }
  }
}
</script>


<template>
    <div class="bgnd_bodydiagonal_container" :class="alignX, alignY">
        <div class="diagonal">
            <div class="left">
                <Trapeze class="one" :height="'25vw'" :width="'100vw'" :color="'rgb(60,60,60)'"/>
                <Trapeze class="two" :height="'25vw'" :width="'96vw'" :color="'rgb(82,27,170)'"/>
                <Trapeze class="three" :height="'25vw'" :width="'90vw'" :color="'rgb(82,27,170)'"/>
            </div>
            <div class="right">
                <Trapeze class="one" :height="'25vw'" :width="'100vw'" :color="'rgb(60,60,60)'" :IsReverse="true"/>
                <Trapeze class="two" :height="'25vw'" :width="'96vw'" :color="'rgb(82,27,170)'" :IsReverse="true"/>
                <Trapeze class="three" :height="'25vw'" :width="'90vw'" :color="'rgb(82,27,170)'" :IsReverse="true"/>
            </div>
        </div>
    </div>
</template>


<style scoped>
.bgnd_bodydiagonal_container{
    width:100%;
    height: 100%;
}
.bgnd_bodydiagonal_container.left{
    transform: rotateY(180deg);
}
.bgnd_bodydiagonal_container.bottom{
    transform: rotateX(180deg);
}
.bgnd_bodydiagonal_container.left.bottom{
    transform: rotateX(180deg) rotateY(180deg);
}
.bgnd_bodydiagonal_container > .diagonal{
    min-height: 25vw;
    overflow: hidden;
}
.bgnd_bodydiagonal_container > div{
    position: relative;
    width: 100%;
}
.bgnd_bodydiagonal_container > .middle{
    min-height: 50vw;
}
.bgnd_bodydiagonal_container > .diagonal > div{
    position: relative;
}
.bgnd_bodydiagonal_container > .diagonal > div > div{
    position: absolute;
    top: -20px;
    left: -29.5%;
}
.bgnd_bodydiagonal_container > .diagonal > .right{
    bottom: -20px;
    transform: rotateY(180deg)translateX(-25%);
}
</style>