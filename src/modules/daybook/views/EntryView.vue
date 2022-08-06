<template >
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            {{entryById}}
            <span class="text-success fs-3 fw-bold">3</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
        </div>

        <div>
            <button class="btn btn-danger">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Qué sucedió hoy?">
           
        </textarea>
    </div>

    <FabComponent icono="fa-save"></FabComponent>

    <img 
        src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&w=1000&q=80" 
        alt="entry-picture"
        class="img-thumbnail"
        />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex' //computed

export default {
    props: {
        //parámetro de la ruta
        id:{
            type: String,
            required: true
        }
    },
    components: {
        FabComponent: defineAsyncComponent(() => import('../components/FabComponent.vue'))
    },
    methods: {
        loadEntry(){
            const entry = this.getEntryById(this.id)
            console.log(entry)
        }
    },
    computed: {
        ...mapGetters(['getEntryById']),
        // entryById(){
        //     return this.getEntryById(this.id)
        // }
    },
    created() {
        this.loadEntry()
        console.log('id created: ' + this.$route.params.id )
    }
}
</script>
<style lang="scss" scoped>
    textarea{
        font-size: 20px;
        border:none;
        height: 100%;

        &:focus {
            outline:none;
        }
    }
    img{
        width: 200px;
        position: fixed;
        bottom:150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>