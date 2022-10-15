<template>
<div class="container-sm">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre Servicio</th>
      <th scope="col">Fecha</th>
      <th scope="col">Hora</th>
      <th scope="col">Ubicacion</th>
      <th scope="col">Encargado</th>
      <th scope="col">Cantidad Meseros</th>
      <th scope="col">Meseros</th>
      <th scope="col">Precio</th>
      <th scope="col">Observaciones</th>
      <th scope="col">Mod</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>ffddd</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>de</td>
      <td>dw</td>
      <td>de</td>
      <td>de</td>
      <td>fe</td>
      <td>dew</td>
      <td><button><img src="../img/icon/icon-2.png" alt="" style="width: 40px; border-radius: 100px;"></button> <button><img src="../img/icon/icon-3.png" alt="" style="width:40px ;"></button></td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script >
import {ref} from "vue";
const cards = ref([
  {
    title: "1",
    data: "En este apartado se mostrara un formulacion que te permitira anexar nuevos eventos",
    href:"/add"
  },
  {
    title: "2",
    data: "En este apartado podras visualizar todos los servicios generados",
    href: "/serv",
  },
]);</script>