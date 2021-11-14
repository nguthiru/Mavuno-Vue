<template>
  <canvas id="spend-chart"> </canvas>
</template>
<script>
import base from "../../main";
import Chart from "chart.js/auto";
export default {
  name: "chart",
  data() {
    return {
      transactions_deposits: null,
      transaction_withdraws: [],
    };
  },
  computed: {},

  async created() {},
  async mounted() {
    const graph = await base.get("finance/transactions/stats/");
    const data = graph.data['credit'];
    function handleClick(evt) {
      console.log(evt);
    }
    var transactions = {
      type: "pie",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          backgroundColor: {
            onClick: handleClick,
          },
        },
        scales: {
          x: {
            ticks:{
              display:false
            },
            grid: {
              display: false,
              barPercentage: 0.4,
              offset: true,
              drawBorder: false,
            },
          },
          y: {
            ticks:{
              display:false
            },
            beginAtZero: true,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
      },
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Total Spending",
            backgroundColor: ["rgba(89, 145, 76,0.4)", "#85DB72", "#66A858"],

            hoverBackgroundColor: "#59914C",
            borderRadius: 7,
            barThickness: 35,
            borderWidth: 1,
            data: data.data,
          },
        ],
      },
    };

    var ctx = document.getElementById("spend-chart");

    var chart = new Chart(ctx, transactions);
    chart.setActiveElements([{ datasetIndex: 0, index: data.length - 1 }]);
  },
};
</script>

<style>
</style>