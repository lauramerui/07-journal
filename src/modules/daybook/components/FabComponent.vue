<template>
        <button class="btn btn-primary">
            <!-- <i :class=iconComplete></i> -->
            <!-- <i :class="`fa fa-2x ${ icono }`"></i> -->
            <i class="fa fa-2x" :class=icono></i>
            <!-- :class hace append con class -->
        </button>
</template>
<script>
export default {
    props:{
        icono:{
            type:String,
            default:"fa-plus"
        }              
    },
    data() {
        return {
            // icono:"fa fa-2x fa-plus"
        }
    },
    computed:{
        iconComplete(){
            return "fa fa-2x "+ this.icono
        }
    }
}
</script>
<style lang="scss" scoped>
    button{
        border-radius: 100%;
        bottom:20px;
        height: 80px;
        position:fixed;
        right: 20px;
        width: 80px;
    }
</style>