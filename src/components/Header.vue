<script setup>

</script>

<template>
    <div class="header_container">
        <div class="top">
            <div class="shadow one">
                <div class="one purple"></div>
            </div>
            <div class="shadow two">
                <div class="two gray"></div>
            </div>
            <div class="shadow three">
                <div class="three purple"></div>
            </div>
        </div>
        <div class="bottom">
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
.header_container{
    height: 30vw;
    width: 100vw;
    position: relative;
    overflow: hidden;
}

/*#endregion*/

/*#region commun*/
.shadow.one{
    z-index: 3;
}
.shadow.two{
    z-index: 2;
}
.shadow.three{
    z-index: 1;
}
/*#endregion*/

/*#region top*/
.header_container > .top > .shadow > .one{
    height: 5vw;
    width: 100vw;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 63% 100%, 60% 50%, 40% 50%, 37% 100%, 0% 100%);
}
.header_container > .top > .shadow > .two{
    height: 5vw;
    width: 100vw;
    margin-top: -2.5vw;
}
.header_container > .top > .shadow > .three{
    height: 3vw;
    width: 100vw;
}
/*#endregion */

/*#region bottom*/
.header_container > .bottom{
    position: absolute;
    bottom: -2vw;
}
.header_container > .bottom > div{
    width: 50vw;
    display: inline-block;
    position: relative;
}
.header_container > .bottom > div > div{
    position: absolute;
    bottom: 0;
}
.header_container > .bottom > div > div > div{
    width: 50vw;
}
/*#region left*/
.header_container > .bottom > div > div > .one{
    height: 6vw;
    clip-path: polygon(78% 70%, 78% 100%, 0% 100%, 0% 0%, 70% 0%);
}
.header_container > .bottom > div > div > .two{
    height: 10vw;
    clip-path: polygon(86% 70%, 86% 100%, 0% 100%, 0% 0%, 71% 0%);
}
.header_container > .bottom > div > div > .three{
    height: 14vw;
    clip-path: polygon(94% 70%, 94% 100%, 0% 100%, 0% 0%, 72% 0%);
}
/*#endregion */
/*#region right*/
.header_container > .bottom > .right{
    transform: rotateY(180deg);
}
/*#endregion */
/*#endregion */
</style>