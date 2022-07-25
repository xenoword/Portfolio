<script setup>

</script>

<script>
export default {
    data() {
        return {
        birthYear: '2002',
        birthMounth: '10',
        birthDay: '22'
        }
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
    
    methods: {
        getAge() {
            var today = new Date();
            var birthDate = new Date(this.birthYear, this.birthMounth, this.birthDay);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
            {
                age--;
            }
            return age;
        }   
    }
}
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
                                <!-- content moi-->
                                <div v-if="name === 'moi'" class="moiContent">
                                    <h2>Info de base</h2>
                                    <img src="../../assets/chocobo.png" alt="une photo de moi" class="pp">
                                    <p class="firstName">Quentin</p>
                                    <p class="lastName">Mortier</p>
                                    <p class="age">{{ getAge() }} ans</p>
                                    <p class="diplome">Bac STI2D option SIN en 2020 <br> 
                                        DUT informatique en 2022</p>
                                        <br><br><br>
                                    <p class="description">un petit blabla sur moi pour donner d'autres infos genre square enix ils font des truc trop bine ou alors j'aime bien coder des trucs perso qd j'ai le temps et en profiter pour approfondir mes connaissances</p>
                                </div>
                                <!-- content cookie-->
                                <div v-if="name === 'cookie'" class="cookieContent">
                                    <p>Zebi le cookie</p>
                                </div>
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
    clip-path: polygon(0% 0%, 33% 0%, 40% 3vw, 60% 3vw, 67% 0%, 100% 0%, 100% 100%, 0% 100%);
}
/*#endregion*/

/*#region moi*/
.moiContent > h2{
    
}
/*#endregion*/
</style>