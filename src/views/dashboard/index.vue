<template>
    <v-container>
      <v-row>
        <v-col cols="12" lg="8">
          <v-card class="px-5 py-5 h-full">
            <Line :data="chartData" :options="chartOptions" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { Line } from "vue-chartjs";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { ref, onBeforeMount, onMounted, computed } from "vue";
  import http from "@/utils/http";
  
  onBeforeMount(() => {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  });
  
  const dataProfit = ref([]);
  
  const chartData = computed(() => {
    if (dataProfit.value.length > 0) {
      return {
        labels: dataProfit.value.map((item) => item.month),
        datasets: [
          {
            label: "Profit Penjualan Bulanan",
            tension: 0.3,
            pointRadius: 0,
            backgroundColor: "#c319ee",
            borderColor: "#c319ee",
            data: dataProfit.value.map((item) => item.value),
          },
        ],
      };
    } else {
      return { labels: [], datasets: [] };
    }
  });
  
  const chartOptions = ref({
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      y: {
        ticks: {
          color: "#b6baca",
        },
        grid: {
          drawTicks: false,
        },
        border: {
          dash: [5, 10],
        },
      },
      x: {
        ticks: {
          color: "#b6baca",
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  });
  
  onMounted(async () => {
    await getProfit();
  });
  
  const getProfit = async () => {
    const { data } = await http.get("/profit");
    dataProfit.value = data;
  };
  </script>
  