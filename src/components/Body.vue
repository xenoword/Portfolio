<script>
export default{
    props: {
        align: {
            type: String,
            default: 'center'
        }
    }
}
</script>

<template>
    <div :class="'body_container '+align">
        <div class="left">
            <div class="shadow one">
                <div class="one purple"></div>
            </div>
            <div class="shadow two">
                <div class="two purple"></div>
            </div>
            <div class="shadow three">
                <div class="three gray"></div>
            </div>
        </div>
        <div class="right">
            <div class="shadow one">
                <div class="one purple"></div>
            </div>
            <div class="shadow two">
                <div class="two purple"></div>
            </div>
            <div class="shadow three">
                <div class="three gray"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/*#region global*/
.body_container{
    height: 40vw;
    width: 100vw;
    position: relative;

    overflow: hidden;
}
.body_container > div{
    width: 50vw;
    display: inline-block;
    position: relative;
    height: 110%;
    margin-top: -2%;
}
/*#endregion*/

/*#region commun*/
.body_container > div div{
    height: 100%;
}
.body_container > div > div{
    position: absolute;
}
.body_container > div > .one{
    z-index: 3;
}
.body_container > div > .two{
    z-index: 2;
}
.body_container > div > .three{
    z-index: 1;
}
/*#endregion*/

/*#region center*/
/*#region left*/
.body_container.center > div > div > .one{
    width: 39vw;
}
.body_container.center > div > div > .two{
    width: 43vw;
}
.body_container.center > div > div > .three{
    width: 47vw;
}
/*#endregion */
/*#region right*/
.body_container > .right{
    transform: rotateY(180deg);
}
/*#endregion */
/*#endregion */

/*#region align right*/
/*#region  left*/
.body_container.right > .left > div > .one{
    width: 64vw;
}
.body_container.right > .left > div > .two{
    width: 68vw;
}
.body_container.right > .left > div > .three{
    width: 72vw;
}
/*#endregion */
/*#region right*/
.body_container.right > .right > div > .one{
    width: 14vw;
}
.body_container.right > .right > div > .two{
    width: 18vw;
}
.body_container.right > .right > div > .three{
    width: 22vw;
}
/*#endregion */
/*#endregion */

/*#region align left*/
/*#region  left*/
.body_container.left > .left > div > .one{
    width: 14vw;
}
.body_container.left > .left > div > .two{
    width: 18vw;
}
.body_container.left > .left > div > .three{
    width: 22vw;
}
/*#endregion */
/*#region right*/
.body_container.left > .right > div > .one{
    width: 64vw;
}
.body_container.left > .right > div > .two{
    width: 68vw;
}
.body_container.left > .right > div > .three{
    width: 72vw;
}
/*#endregion */
/*#endregion */
</style>