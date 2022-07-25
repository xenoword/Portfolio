<script setup>
import Body from './Body.vue';
import Content from './Content/Content.vue';
</script>

<script>
export default {
    props: {
        align: {
            type: String,
            default: 'right'
        }
    }
}
</script>

<template>
    <div :class="'body_content_container ' + align">
        <div class="top diagonal">
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

        <div class="middle">
            <Body class="body" :align="align" />
            <Content :class="'content ' + align"/>
        </div>

        <div class="bottom diagonal">
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
    </div>
</template>

<style scoped>
/*#region global*/
.body_content_container{
    min-height: 100vw;
    height: 100vw;
    width: 100vw;
    position: relative;
    overflow: hidden;
}
.body_content_container > div{
    overflow: hidden;
}
.diagonal{
    height: 30vw;
}
.bottom{
    transform: rotateX(180deg);
}
/*#endregion*/

/*#region commun*/
.body_content_container > .diagonal > div{
    position: relative;
    height: 110%;
    margin-top: -2%;
}
.body_content_container > .diagonal div{
    width: 100vw;
    height: 100%;
}
.body_content_container > .diagonal > div > div{
    position: absolute;
}
.body_content_container > .diagonal > div > div > div{
    height: 110%;
    width: 100vw;
}
.body_content_container > .diagonal > div > .one{
    z-index: 3;
}
.body_content_container > .diagonal > div > .two{
    z-index: 2;
}
.body_content_container > .diagonal > div > .three{
    z-index: 1;
}
/*#endregion*/

/*#region middle*/
.middle{
    position: relative;
}
.middle > .content{
    z-index: 10;
    position: absolute;
    top: 5%;
    left: 5%;
}
.middle > .content.left{
    left: 40%;
}
/*#endregion */

/*#region align right*/
/*#region left*/
.body_content_container.right > .diagonal > .left > div > .one{
    clip-path: polygon(64% 94%, 64% 100%, 0% 100%, 0% 0%, 39% 0%, 39% 24%);
}
.body_content_container.right > .diagonal > .left > div > .two{
    clip-path: polygon(68% 91%, 68% 100%, 0% 100%, 0% 0%, 43% 0%, 43% 21%);
}
.body_content_container.right > .diagonal > .left > div > .three{
    clip-path: polygon(72% 88%, 72% 100%, 0% 100%, 0% 0%, 47% 0%, 47% 18%);
}
/*#endregion */
/*#region right*/
.body_content_container.right > .diagonal > .right{
    margin-top: -30vw;
}
.body_content_container.right > .diagonal > .right > div > .one{
    clip-path: polygon(61% 6%, 61% 0%, 100% 0%, 100% 100%, 86% 100%, 86% 76%);
}
.body_content_container.right > .diagonal > .right > div > .two{
    clip-path: polygon(57% 9%, 57% 0%, 100% 0%, 100% 100%, 82% 100%, 82% 79%);
}
.body_content_container.right > .diagonal > .right > div > .three{
    clip-path: polygon(53% 12%, 53% 0%, 100% 0%, 100% 100%, 78% 100%, 78% 82%);
}
/*#endregion */
/*#endregion */

/*#region align left*/
/*#region left*/
.body_content_container.left > .diagonal > .left > div > .one{
    clip-path: polygon(14% 76%, 14% 100%, 0% 100%, 0% 0%, 39% 0%, 39% 6%);
}
.body_content_container.left > .diagonal > .left > div > .two{
    clip-path: polygon(18% 79%, 18% 100%, 0% 100%, 0% 0%, 43% 0%, 43% 9%);
}
.body_content_container.left > .diagonal > .left > div > .three{
    clip-path: polygon(22% 82%, 22% 100%, 0% 100%, 0% 0%, 47% 0%, 47% 12%);
}
/*#endregion */
/*#region right*/
.body_content_container.left > .diagonal > .right{
    margin-top: -30vw;
}
.body_content_container.left > .diagonal > .right > div > .one{
    clip-path: polygon(61% 24%, 61% 0%, 100% 0%, 100% 100%, 36% 100%, 36% 94%);
}
.body_content_container.left > .diagonal > .right > div > .two{
    clip-path: polygon(57% 21%, 57% 0%, 100% 0%, 100% 100%, 32% 100%, 32% 91%);
}
.body_content_container.left > .diagonal > .right > div > .three{
    clip-path: polygon(53% 18%, 53% 0%, 100% 0%, 100% 100%, 28% 100%, 28% 88%);
}
/*#endregion */
/*#endregion */
</style>