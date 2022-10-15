<template>
    <p class="h3" style="text-align:center ;">Estadistica de Servicios Generados por Cliente </p>
    <PolarAreaChart :chartData="testData" />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { PolarAreaChart } from 'vue-chart-3';
  import { Chart, registerables } from "chart.js";
  
  Chart.register(...registerables);
  
  export default defineComponent({
    name: 'Home',
    components: { PolarAreaChart },
    setup() {
      const testData = {
        labels: ['DeliRocks', 'Otros',],
        datasets: [
          {
            label: 'Cantidad de Servicios por Cliente',
            data: [30, 40,],
            backgroundColor: ['rgb(119,206,255)', '#0079AF',],
            
          },
        ],
      };
  
      return { testData };
    },
  });
  </script>