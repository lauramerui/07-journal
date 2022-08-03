<template lang="">
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Buscar entrada">
        </div>

        <div class="entry-list-scrollarea">
            <EntryComponent v-for="item in 100" :key="item">
                
            </EntryComponent>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    components: {
        EntryComponent: defineAsyncComponent(()=>import('./EntryComponent.vue'))
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