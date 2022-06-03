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
         required : false,
         default : 'right'
     },
     alignY : {
         type : String,
         required : false,
         default : 'top'
     },
     IsPrecededByBody : {
         type : Boolean,
         required : false,
         default : true
     },
     IsSucceededByBody : {
         type : Boolean,
         required : false,
         default : true
     }
  }
}
</script>


<template>
    <div class="bgnd_bodydiagonal_container" :class="[alignX, alignY, IsPrecededByBody ? 'with_line_top' : '', IsSucceededByBody ? 'whit_line_bottom' : '']">
        <div class="diagonal">
            <div class="left">
                <div class="lone" v-if="IsPrecededByBody"></div>
                <div class="ltwo" v-if="IsPrecededByBody"></div>
                <div class="lthree" v-if="IsPrecededByBody"></div>
                <Trapeze class="one" :height="'25vw'" :width="'100vw'" :color="'rgb(60,60,60)'"/>
                <Trapeze class="two" :height="'25vw'" :width="'96vw'" :color="'rgb(82,27,170)'"/>
                <Trapeze class="three" :height="'25vw'" :width="'90vw'" :color="'rgb(82,27,170)'"/>
            </div>
            <div class="right">
                <div class="lone" v-if="IsSucceededByBody"></div>
                <div class="ltwo" v-if="IsSucceededByBody"></div>
                <div class="lthree" v-if="IsSucceededByBody"></div>
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
/* with line at top */
/* à faire : margin négatif si pas de ligne */ 
.bgnd_bodydiagonal_container.with_line_top > .diagonal{
    min-height: 27.4vw;
}
.bgnd_bodydiagonal_container.with_line_top > .diagonal > .left > :nth-child(n+4){
    margin-top: 2.4vw;
}

/* with line at bottom */

.left > :nth-child(-n+3)::after{
    filter:drop-shadow(10px 0px 5px rgb(50,50,50));
    content: " ";
    position: absolute;
    right: -20px;
    top: -5%;
    height: 110%;
    width: 100%;
}
.left > .lone{
    padding-left: 17%;
    padding-top: 0;
    width: 58vw;
    height: 3.6vw;
    background-color: rgb(60,60,60);
    z-index: 1;
}
.left > .lone::after{
    border-left: 10.5vw solid rgb(60,60,60);
    border-right: 10.5vw solid rgb(60,60,60);
    background-color: rgb(60,60,60);
}
.left > .ltwo{
    padding-left: 17%;
    width: 54vw;
    height: 3.6vw;
    background-color: rgb(82,27,170);
    z-index: 1;
}
.left > .ltwo::after{
    border-left: 8vw solid rgb(82,27,170);
    border-right: 8vw solid rgb(82,27,170);
    background-color: rgb(82,27,170);
}
.left > .lthree{
    padding-left: 17%;
    width: 48vw;
    height: 3.6vw;
    background-color: rgb(82,27,170);
    z-index: 1;
}
.left > .lthree::after{
    border-left: 10.5vw solid rgb(82,27,170);
    border-right: 10.5vw solid rgb(82,27,170);
    background-color: rgb(82,27,170);
}
</style>