<script setup>

</script>

<script>
export default {
    data() {
        return {
            classIndex : ['first', 'second', 'third']
        }
    },
    props: {
        content: {
            required: true
        }
    },
    methods: {
        clickOnTab(event){
            let actif = event.path[2].getElementsByClassName('actif')[0];
            actif.classList.remove('actif');
            actif.classList.add('inactif');
            event.path[1].classList.remove('inactif');
            event.path[1].classList.add('actif');
        }
    },
}
</script>

<template>
<div class="content_container">
    <div class="shadow one">
        <div class="one gray">
            <div class="shadow two">
                <div class="two purple">
                    <div class="shadow three">
                        <div class="three">
                            <div class="module_content">
                                <div :class="content.name">
                                    <template v-for="(tab, index) in content.tabArray">
                                        <h5>{{ tab.name}}</h5>
                                        <div :class="this.classIndex[index]+' shadow page ' + (index == 0 ? 'actif' : 'inactif')" @click="clickOnTab">
                                            <div :class="this.classIndex[index]+' content page gray'">
                                                <h2>{{ tab.title }}</h2>
                                                <component :is="tab.view" :projectName="content.isProject ? content._name : undefined"></component>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                                
                                <!--#region projets perso-->
                                <!-- <div v-if="name === 'git'" class="personal_projects_content">
                                    <h5>description</h5>
                                    <div class="shadow first page actif" @click="clickOnTab">
                                        <div class="content first page gray">
                                    
                                            <h2>Mes projets personnels</h2>    
                                            <div class="description">
                                                <p>Tous mes projets sont visible sur mon Git <a href="https://github.com/Xenoword/"><font-awesome-icon icon="fa-brands fa-github" /></a></p>
                                            </div>

                                            <div>
                                                <h3>{{ this.project.Name }}</h3>
                                                <div class="description">
                                                    <p v-for="description in project.DescriptionArray">{{ description }}</p>
                                                    <div class="preview">
                                                        
                                                    </div>
                                                    <p>Pour voir le code de ce projet : <a :href="project.Link"><font-awesome-icon icon="fa-brands fa-github" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->

                                <!--#endregion-->
                            
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
    height: 100%;
    width: 100%;
    color: white;
}

.shadow.one{
    height: 96%;
    width: 96%;
    margin: 2%;
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
}
/*#endregion*/

.page{
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
}   
.content.page{
    padding-top: 4vw;
}
.first.page{
    clip-path: polygon(0% 0%, 27% 0%, 34% 3vw, 100% 3vw, 100% 100%, 0% 100%);

}
.second.page{
    clip-path: polygon(0% 3vw, 31% 3vw, 38% 0%, 62% 0%, 69% 3vw, 100% 3vw, 100% 100%, 0% 100%);
}
.third.page{
    clip-path: polygon(0% 3vw, 66% 3vw, 73% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.inactif{
    z-index: 0;
}
.actif{
    z-index: 10;
}
.inactif > .page > *{
    display: none;
}
.inactif > .page{
    cursor: pointer;
}
.page.inactif .gray{
    background-color: rgb(65, 65, 65);
}

h2{
    text-transform: uppercase;
    font-size: 2.3em;
    text-shadow: 3px 3px 3px rgb(82,27,170), -3px 3px 3px rgb(82,27,170), 3px -3px 3px rgb(82,27,170), -3px -3px 3px rgb(82,27,170), 3px 0px 3px rgb(82,27,170), -3px 0px 3px rgb(82,27,170), 0px 3px 3px rgb(82,27,170), 0px -3px 3px rgb(82,27,170);
    margin-bottom: 30px;
}
.module_content > div > h5{
    text-align: left;
    font-size: 1em;
    position: relative;
    z-index: 11;
    pointer-events: none;
    cursor: default;
    font-weight: 500;
}
.module_content > div > h5::first-letter{
    text-transform: capitalize;
}
.module_content > div > h5:nth-child(1){
    margin: 15px 0 0 15px;
}
.module_content > div > h5:nth-child(3){
    margin: -1.1em 0 0 37%;
}
.module_content > div > h5:nth-child(5){
    margin: -1.1em 0 0 72%;
}

</style>