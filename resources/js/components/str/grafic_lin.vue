<template>
    <p class="h3" style="text-align:center ;">Estadistica de Servicios Generados Semanalmente </p>
    <LineChart :chartData="testData" />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { LineChart } from 'vue-chart-3';
  import { Chart, registerables } from "chart.js";
  
  Chart.register(...registerables);
  
  export default defineComponent({
    name: 'Home',
    components: { LineChart },
    setup() {
      const testData = {
        labels: ['semana: 1', 'semana: 2', 'semana: 3', 'semana: 4', 'semana: 5'],
        datasets: [
          {
            label: 'Cantidad de Servicios',
            data: [30, 40, 60, 70, 100],
            backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
             borderColor: '#003871',
          },
        ],
      };
  
      return { testData };
    },
  });
  </script>