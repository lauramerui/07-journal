<template lang="">
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input 
                type="text" 
                class="form-control" 
                placeholder="Buscar entrada" 
                v-model="term"
            />
        </div>

        <div class="entry-list-scrollarea">
            <!-- llamar al getter -->
            <EntryComponent 
                v-for="entry in entriesByTerm" 
                :key="entry.id"
                :entry="entry"
            />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue"
import { mapGetters } from 'vuex'
// import { getEntriesByTerm } from "../store/journal/getters"

export default {
    data(){
        return{
            term : ''
        }
    },
    components: {
        EntryComponent: defineAsyncComponent(()=>import('./EntryComponent.vue'))
    },
    computed:{
        ...mapGetters(['getEntriesByTerm']),
        entriesByTerm(){
            return this.getEntriesByTerm(this.term)
        }
    } 
}
</script>

<style lang="scss" scoped>
    input{
        height: 25px;
    }
    .entry-list-container{
        border-right: 1px solid #2c3e50;
        height: calc(100vh - 66px);
    }
    .entry-list-scrollarea{
        height: calc(100vh - 115px);
        overflow: scroll;
    }
</style>