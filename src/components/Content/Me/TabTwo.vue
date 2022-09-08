<script setup>

</script>

<script>
    export default {
        data() {
            return {
                descriptionArray : [
                    "Développeur en constante recherche de connaissance dans le but d'être la personne sur qui tout le monde peut compter en cas de problème.",
                    "J'aime travailler sur des petits projets perso pour prendre le temps de découvrir afin d'approfondir mes connaissances et ainsi avoir le résultat optimal.",
                    "J'ai un penchant pour le développement back mais je ne néglige pas le front, plus je serais polyvalent, plus je serais un electron libre capable d'aider et de m'adapter à toutes les situations.",
                    "Ma vie ne se limite pas au developpement informatique, j'adore le badminton j'ai commencé au collège avant de reprendre durant mon DUT et je vais continuer à en faire aussi longtemps que ça m'interessera."
                ]
            }
        }
    }
</script>

<template>
    <div class="description">
        <p v-for="description in descriptionArray">
            {{ description }}
        </p>
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