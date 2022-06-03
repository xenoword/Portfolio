<script>
export default {
  data() {
    return {
      
    }
  },
  props : {
     height : {
         type : String,
         required: true,
     },
     width : {
         type : String,
         required: true,
     },
     color : {
         type : String,
         required: true,
     },
     IsReverse : {
         type : Boolean,
         required: false,
         default : false,
     },
     HasABorder: {
         type : Boolean,
         required: false,
         default : true,
     },

  },
  methods: {
      
  },
  computed: {
        cssProps() {
            return {
                '--height': this.height,
                '--dheight': (parseInt(this.height, 10) * 2) + 'vw',
                '--mdheight': '-' + (parseInt(this.height, 10) * 2) + 'vw',
                '--width': parseInt(this.width, 10) - parseInt(this.height, 10) * 2 + 'vw',
                '--color': this.color,
            }
        }
    },
  mounted(){

  }
}
</script>


<template>
    <div class="trapeze" :class=" (IsReverse ? 'reverse ' : '') + (HasABorder ? '' : 'noBorder')">
        <div :style="cssProps">
            
        </div>
    </div>
</template>


<style scoped>
.trapeze {
    margin: 0;
    padding: 20px 20px 0 20px;
    overflow: hidden;
}
.trapeze > div{    
    position: relative;
    height: 0;
    width: var(--width);
    border-bottom: var(--height) solid var(--color);
    border-left: var(--height) solid transparent;
    border-right: var(--height) solid transparent;
}
.trapeze > div::after{
    filter:drop-shadow(3px -10px 5px rgb(50,50,50));
    content: " ";
    position: absolute;
    left: var(--mdheight);
    top: 0;
    height: 0;
    width: var(--width);

    border-bottom: var(--dheight) solid var(--color);
    border-left: var(--dheight) solid transparent;
    border-right: var(--dheight) solid transparent;   
}
.trapeze.reverse{
    padding: 0 20px 20px 20px;
}
.trapeze.reverse > div{
    transform: rotate(180deg);
}
.trapeze.noBorder > div::after{
    filter:drop-shadow(0px 0px 0px rgb(50,50,50));
}
</style>
