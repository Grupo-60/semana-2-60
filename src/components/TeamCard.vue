<template>


    <div class="card text-white bg-dark" id="team">
        <div class="d-flex justify-content-center p-2">
            <img v-bind:src="member.imagen" alt="Fotografia Miembro del Equipo">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ member.rol }}</h5>
            <h6 class="card-text">{{ member.nombre }}</h6>           
        </div>
        <div class="card-footer">
            <small class="card-text">{{ member.descripcion }}</small>
        </div>
    </div>


</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>

</style>
