<template>
    <div class="documentos">
        <div class="container">
            <div class="row">
                <div class="card my-5 mx-3">
                    <div class="card-header">
                        Hoja de Vida
                    </div>
                    <div class="card-body">
                    <div class="input-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
                        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                    </div>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="card my-5 mx-3">
                    <div class="card-header">
                        Pasaporte
                    </div>
                    <div class="card-body">
                    <div class="input-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
                        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                    </div>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="card my-5 mx-3">
                    <div class="card-header">
                        Recibo de pago
                    </div>
                    <div class="card-body">
                    <div class="input-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
                        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                    </div>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="card my-5 mx-3">
                    <div class="card-header">
                        Visa
                    </div>
                    <div class="card-body">
                    <div class="input-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
                        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                    </div>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return{
            files:[],
            doc:{
                file:''
            }
        }
        
    },
    methods:{
        agregarDoc(){
        console.log(this.doc);
        this.axios.post('/subir', this.doc)
        .then(res => {
            this.files.push(res.doc)
        })
        .catch(e => {
          console.log(e.response);
        })
    }
    }
}
</script>
