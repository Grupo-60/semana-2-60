<template>
<section>
    <div class="card text-white bg-dark" id="team">
        <div class="d-flex justify-content-center p-2">
            <img v-bind:src="member.imagen" alt="Fotografia Miembro del Equipo" style="border-radius: 60px;">
        </div>
        <div class="card-body">
            <h4 class="card-title">Team Number: {{ member.codigo }}</h4>        
            <h5 class="card-title">{{ member.rol }}</h5>
            <h6 class="card-text">{{ member.nombre }}</h6>   
            <small class="card-text">{{ member.descripcion }}</small>        
        </div>
        <div class="card-footer">
            <small class="card-text">Last updated 3 mins ago</small>
        </div>
    </div>
</section>
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>

</style>
