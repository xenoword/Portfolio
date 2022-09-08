<script setup>
import PersonalProject from '../../../js/personalProjet';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
    
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
    faGithub,
);

</script>

<script>
export default {
    data() {
        return {
            personalProjectArray:[
                new PersonalProject(
                    'portfolio',
                    [
                        "J'ai fait avec vueJS et vite dev en localhost avec wamp et nodeJS et upload sur [hebergeur]",
                        "J'ai choisi VueJS pcq c'est le framework que j'ai le plus apprécié utiliser au cours de mon DUT"
                    ],
                    "https://github.com/Xenoword/Portfolio/",
                    "120vw"
                ),
                new PersonalProject(
                    'blocNote',
                    [
                        "c'est cool comme projet et c'est pratique (enfin dans l'idée)"
                    ],
                    "https://github.com/xenoword/desktop-note",
                )
            ]
        }
    },
    props: {
        projectName: {
            type: String,
            required: true
        }
    },
    methods: {
        getProject(ProjectName){
            return this.personalProjectArray.map(personalProject => {
                if(personalProject.name == ProjectName)
                    return personalProject;
            }).filter(project => project != null)[0];
        }
    }
}
</script>

<template>
    <div class="description">
        <p>Tous mes projets sont visible sur mon Git <a href="https://github.com/Xenoword/"><font-awesome-icon icon="fa-brands fa-github" /></a></p>
    </div>

    <div>
        <h3>{{ getProject(projectName).name }}</h3>
        <div class="description">
            <p v-for="description in getProject(projectName).descriptionArray">{{ description }}</p>
            <div class="preview">
                
            </div>
            <p>Pour voir le code de ce projet : <a :href="getProject(projectName).link"><font-awesome-icon icon="fa-brands fa-github" /></a></p>
        </div>
    </div>
</template>

<style>
h3{
    margin-top: 10px;
    font-size: 2.1em;
    text-shadow: 3px 3px 3px rgb(82,27,170), -3px 3px 3px rgb(82,27,170), 3px -3px 3px rgb(82,27,170), -3px -3px 3px rgb(82,27,170), 3px 0px 3px rgb(82,27,170), -3px 0px 3px rgb(82,27,170), 0px 3px 3px rgb(82,27,170), 0px -3px 3px rgb(82,27,170);
    margin-bottom: 30px;
}
h3::first-letter{
    text-transform: uppercase;
}

.description p{
    text-align: justify;
    text-align-last: center;
    width: 80%;
    margin-left: 10%;
    font-size: 1.1em;
    margin-bottom: 20px;
}
</style>