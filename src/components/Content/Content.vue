<script setup>

</script>

<template>
<div class="content_container">
    <div class="shadow one">
        <div class="one gray">
            <div class="shadow two">
                <div class="two purple">
                    <div class="shadow three">
                        <div class="three gray">
                            <div class="module_content">
                                <!-- text content-->
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit deserunt tempora iste sed quas ipsum delectus? Obcaecati commodi magnam magni voluptate quasi tenetur necessitatibus adipisci animi, non cumque! Voluptas aliquam at minima cupiditate alias earum nostrum tempore eius vel doloremque, numquam cum molestias, possimus veritatis repudiandae. Nostrum, consequatur. Nemo et ad saepe magnam rerum! Perferendis, aspernatur, labore ad quis libero quidem omnis error esse earum nobis quia vel voluptatem?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
/*#region global*/
.content_container{
    min-height: 1vw;
    height: 90%;
    width: 55vw;
    position: relative;
    overflow: hidden;
}
.module_content{
    height: 80%;
    width: 90%;
    margin-top: 5%;
    color: white;
}
/*#endregion*/

/*#region commun*/
.shadow.one{
    height: 100%;
    width: 100%;
}
.shadow > .one{
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
}
.shadow.two{
    height: 90%;
    width: 90%;
}
.shadow > .two{
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
}
.shadow.three{
    height: 87.5%;
    width: 87.5%;
}
.shadow > .three{
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    clip-path: polygon(0% 0%, 33% 0%, 40% 10%, 60% 10%, 67% 0%, 100% 0%, 100% 100%, 0% 100%);
}
/*#endregion*/

/*#region text*/

/*#endregion*/
</style>