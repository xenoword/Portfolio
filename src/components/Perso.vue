<script>
export default {
  data() {
    return {
      birthYear: '2002',
      birthMounth: '10',
      birthDay: '22'
    }
  },
  methods: {
    getAge() 
        {
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
  },
  mounted(){

  }
}
</script>

<template>
    <div class="container">
        <div ID="photo_profil">
            <img src="../assets/chocobo.png" class="PP">        
        </div>
        <br>
        <div class="information">
            <p>Quentin Mortier</p>
            <p>{{ getAge() }} ans</p>
        </div>
    </div>
</template>

<style scoped>
.container{
    height:100%;
    width:100%;
    padding:10px;
    background-color:#C0C0C0;
    border-radius:30px;
}
#photo_profil{
    padding:10px;
    -webkit-box-shadow: inset 5px 5px 10px 5px rgba(0,0,0,0.2), inset -5px -5px 10px 5px rgba(0,0,0,0.2), inset -5px 5px 10px 5px rgba(0,0,0,0.2), inset 5px -5px 10px 5px rgba(0,0,0,0.2); 
    box-shadow: inset 5px 5px 10px 5px rgba(0,0,0,0.2), inset -5px -5px 10px 5px rgba(0,0,0,0.2), inset -5px 5px 10px 5px rgba(0,0,0,0.2), inset 5px -5px 10px 5px rgba(0,0,0,0.2);
    border-radius: 20px;
}
.PP{
    max-height:100%;
    max-width:100%;
}
.information p:first-child{
    font-weight:bold;
}
</style>
