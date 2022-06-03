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
         default: 'center'
     }
  }
}
</script>

<template>
    <div class="bgnd_body_container">
        <div :class="align">
            <div class="left">
                <div class="one"/>
                <div class="two"/>
                <div class="three"/>
            </div>
            <div class="right">
                <div class="one"/>
                <div class="two"/>
                <div class="three"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bgnd_body_container{
    overflow: hidden;
    width:100%;
    height: 100%;
}
.bgnd_body_container > div > div{
    min-height: 50vw;
    display: inline-block;
    position: relative;
}
.bgnd_body_container > div > div{
    width: 50%;
}
.bgnd_body_container > .left_sided{
    transform: translateX(-25%);
}
.bgnd_body_container > .right_sided{
    transform: translateX(25%);
}

.bgnd_body_container > div > div > div{
    position: absolute;
    top: 0;
    bottom: 0;
    min-height: 50vw;
}
.bgnd_body_container > div > div > div::after{
    filter:drop-shadow(10px 0px 5px rgb(50,50,50));
    content: " ";
    position: absolute;
    right: -20px;
    top: -5%;
    height: 110%;
    width: 100%;
}
.bgnd_body_container > div > .right{
    transform: rotateY(180deg);
}
.one{
    width: 58vw;
    left: -25%;
    background-color: rgb(60,60,60);
}
.one::after{
    border-left: 10.5vw solid rgb(60,60,60);
    border-right: 10.5vw solid rgb(60,60,60);
    background-color: rgb(60,60,60);
}
.two{
    width: 54vw;
    left: -25%;
    background-color: rgb(82,27,170);
}
.two::after{
    border-left: 8vw solid rgb(82,27,170);
    border-right: 8vw solid rgb(82,27,170);
    background-color: rgb(82,27,170);
}
.three{
    width: 48vw;
    left: -25%;
    background-color: rgb(82,27,170);
}
.three::after{
    border-left: 10.5vw solid rgb(82,27,170);
    border-right: 10.5vw solid rgb(82,27,170);
    background-color: rgb(82,27,170);
}
</style>
