<template>
  <!--<Reg_serv />-->
  <!-- <modal_serv/>-->
  <!-- <Reg/>-->
  <!--
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
-->

 <!-- <Footer />-->
<Graficos/>
</template>

<script setup>
import { ref } from "vue";
import Reg_serv from "./str/reg_serv.vue";
import Reg_serv_copy from "./str/model_mod_Ser.vue";
import Footer from "./str/footer.vue";
import Grafi from "./str/grafi_don.vue";
import Grafic_lin from "./str/grafic_lin.vue";
import Graficos from "./Graficos.vue";

const cards = ref([
  {
    title: "Añadir Nuevo Servicio",
    data: "En este apartado se mostrara un formulacion que te permitira anexar nuevos eventos",
    href: "/add"
  },
  {
    title: "Ver Servicios Registrados",
    data: "En este apartado podras visualizar todos los servicios generados",
    href: "/serv",
  },
]);
</script>
