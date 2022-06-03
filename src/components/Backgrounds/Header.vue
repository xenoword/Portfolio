<script setup>
import Trapeze from './Trapeze.vue';

</script>

<template>
    <div class="container">
        <div class="top">
            <Trapeze id="five" :height="'10vw'" :width="'120vw'" :color="'rgb(82,27,170)'" :IsReverse="true"/>
    
            <Trapeze id="four" :height="'7.2vw'" :width="'114.4vw'" :color="'rgb(60,60,60)'" :IsReverse="true"/>
    
            <Trapeze id="three" :height="'4.8vw'" :width="'49.6vw'" :color="'rgb(82,27,170)'" :IsReverse="true"/>
            <Trapeze id="two" :height="'4.8vw'" :width="'49.6vw'" :color="'rgb(82,27,170)'" :IsReverse="true"/>
            <div class="borderAdded" />
            <Trapeze id="one" :height="'3.5vw'" :width="'107vw'" :color="'rgb(82,27,170)'" :IsReverse="true" :HasABorder="false"/>
        </div>
        
        <div class="bottom">
            <div class="left">
                <Trapeze id="six" :height="'10.5vw'" :width="'57vw'" :color="'rgb(60,60,60)'"/>
                <Trapeze id="seven" :height="'8vw'" :width="'54vw'" :color="'rgb(82,27,170)'"/>
                <Trapeze id="eight" :height="'5.5vw'" :width="'47vw'" :color="'rgb(82,27,170)'"/>
            </div>
            <div class="right">
                <Trapeze id="six" :height="'10.5vw'" :width="'57vw'" :color="'rgb(60,60,60)'"/>
                <Trapeze id="seven" :height="'8vw'" :width="'54vw'" :color="'rgb(82,27,170)'"/>
                <Trapeze id="eight" :height="'5.5vw'" :width="'47vw'" :color="'rgb(82,27,170)'"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    position:relative;
    width:100%;
    height:100%;
}
.container > div{
    height: 50%;
    width: 100%;
    position: relative;
}
.top > div{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
#three{
    left: 15%;
}
#two{
    left:85%;
}
.bottom > div{
    position: relative;
    display: inline-block;
    width: 50%;
    height: 100%;
}
.bottom > div > div{
    position: absolute;
    bottom: 0;
    left: -25%;
}
.bottom > .right{
    transform: rotateY(180deg);
}
.borderAdded{
    margin: 0;
    padding: 0;
    height: 3.4vw;
    width: 26%;
    background-color: rgb(82,27,170);
    filter: drop-shadow(0px 10px 5px rgb(50,50,50));
}
</style>
