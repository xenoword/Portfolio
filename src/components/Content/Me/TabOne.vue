<script setup>
    /* import the fontawesome core */
    import { library } from '@fortawesome/fontawesome-svg-core'
    
    /* import font awesome icon component */
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    
    /* import specific icons */
    import { faPencil, faCalendar, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
    
    /* add icons to the library */
    library.add(
        faPencil, faCalendar, faGraduationCap,
    );
</script>

<script>
    export default {
        data() {
            return {
                firstname : 'Quentin',
                lastname : 'Mortier',
                birthday : new Date(2002,10,11),
                diplomaArray : [
                    'Bac STI2D option SIN en 2020',
                    'DUT informatique en 2022'
                ]
            }
        },
        methods: {
            fullName(){
                return this.firstname + ' ' + this.lastname;
            },
            age(){
                var today = new Date();
                var m = today.getMonth() - this.birthday.getMonth();
                return today.getFullYear() - this.birthday.getFullYear() - (m < 0 || m === 0 && today.getDate() < this.birthday.getDate() ? 1 : 0);
            }
        }
    }
    </script>

<template>
    <div class="tabOneContent">
        <img src="../../../assets/chocobo.png" alt="une photo de moi" class="pp">
        
        <div class="name">
            <div class="icon">
                <p><font-awesome-icon icon="fa-solid fa-pencil" /></p>
            </div>
            <div class="text">
                <p>{{ fullName() }}</p>
            </div>
        </div>
        
        <div class="age">
            <div class="icon">
                <p><font-awesome-icon icon="fa-solid fa-calendar" /></p>
            </div>
            <div class="text">
                <p>{{ age() }} ans</p>
            </div>
        </div>
        
        <div class="diplome">
            <div class="icon">
                <p><font-awesome-icon icon="fa-solid fa-graduation-cap" /></p>
            </div>
            <div class="text">
                <p v-for="diploma in this.diplomaArray">
                    {{ diploma }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tabOneContent{
    height: 100%;
}
img.pp{
    max-width: 100%;
}
.tabOneContent > div{
    border-radius: 10px;
    padding: 15px 5px;
    margin: 5px 0;
    box-shadow: inset -3px 3px 5px rgb(30,30,30), inset 1px -1px 1px rgb(30,30,30);
    margin: 8px 0;
    margin: 8px 10%;
}
.tabOneContent > div > div{
    display: inline-block;
    vertical-align: top;
}
.tabOneContent .icon{
    width: 14%;
    height: 100%;
    text-align: center;
}
.tabOneContent .text{
    width: 84%;
    text-align: left;
}
.tabOneContent .text p{
    margin-left: 3%;
    line-height: 1.6em;
    font-size: 1em;
}
.tabOneContent p svg{
    font-size: 1.8em;
}
</style>