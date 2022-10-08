<template>
    
    <Nav />
    <div class="container">
        <div class="row">
            <div class="col-md-4"
            v-for="card in cards"
            :key="card.title">
                <div class="card">
                    <div class="card-header">{{card.title}}</div>
                    <div class="card-body">
                       {{card.data}}
                       <a :href="card.href">
                       <button type="button" class="btn btn-primary" >Entrar</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
  {
    title: "Añadir Nuevo Servicio",
    data: "En este apartado se mostrara un formulacion que te permitira anexar nuevos eventos",
    href:"/add"
  },
  {
    title: "Ver Servicios Registrados",
    data: "En este apartado podras visualizar todos los servicios generados",
    href: "/serv",
  },
]);
</script>
