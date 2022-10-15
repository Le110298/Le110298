<template>

  <div class="container">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Registro de Servicios</h4>
        <h6 class="card-subtitle text-muted">registro de nuevos servicios asi como la localidad</h6>
      </div>
      <div class="card-body">
        <form action="" method="post">
          <div class="mb-3">
          <label for="title" class="form-label">Servicio: </label>
          <input type="text" class="form-control" id="title">
      </div>
      <div class="mb-3">
        <label for="date_ser" class="form-label">Fecha</label>
        <input type="date" name="date_ser" id="date_ser" class="form-control" >
        <label for="time_ser" class="form-label">Hora</label>
        <input type="time" name="time_ser" id="time_ser" class="form-control" >
        </div>
      <div class="mb-3">
        <label for="ub" class="form-label">Ubicacion: </label>
        <input type="text" id="ub" name="ub" class="form-control">
      </div>
      <div class="mb-3">
        <label for="enc"  class="form-label">Encargado: </label>
        <input type="text" id="enc" name="enc" class="form-control">
      </div>
      <div class="mb-3">
        <label for="cant_m" class="form-label">Cantidad de Meseros</label>
        <input type="number" name="cant_m" id="cant_m" class="form-control">
      </div>
      <label for="Serv" class="form-label">Meseros</label>
      <div class="mb-3 form-check" v-for="card in cards" :key="card.title">
        <input type="checkbox" name="Serv" id="Serv" class="form-check-input" >
        <label for="Serv" class="form-check-label">{{card.data}}</label>
      </div>
      <div class="mb-3">
        <label for="obs" class="form-label">Observaciones</label>
        <textarea cols="20" rows="10" name="obs" id="obs" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </div>
  </div>
</template>
<script setup>

import { ref } from "vue";

const cards = ref([
  {
    title: "1",
    data: "Julia",
  },
  {
    title: "2",
    data: "Fransico",
  },
  {
    title: "3",
    data: "Fartima",
  },
]);
</script>