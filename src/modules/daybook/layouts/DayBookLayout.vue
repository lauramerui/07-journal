<template>
    <NavbarComponent />
    <div class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
import { defineAsyncComponent } from 'vue'
// import EntryList from '../components/EntryList.vue'
// import NavbarComponent from '../components/NavbarComponent.vue'

export default {

    components: {
    NavbarComponent: defineAsyncComponent(() => import("../components/NavbarComponent.vue")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList.vue")),
}

}
</script>