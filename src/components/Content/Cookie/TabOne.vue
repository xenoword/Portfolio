<script setup>

</script>

<script>
    export default {
        data() {
            return {
                description : "Je vous aurais bien présenté un pitch mais ce cookie est largement meilleur",
                image : {
                    path : "../../assets/cookie.jpg",
                    alt : "un magnifique cookie à la place d'un pitch vidéo"
                }

            }
        }
    }
</script>

<template>
    <div class="description">
        <p>
            {{description}}
        </p>
    </div>
    <div class="image">
        <img :src="image.path" :alt="image.alt">
    </div>
</template>

<style scoped>
.description p{
    text-align: justify;
    text-align-last: center;
    width: 80%;
    margin-left: 10%;
    font-size: 1.1em;
    margin-bottom: 20px;
}
</style>