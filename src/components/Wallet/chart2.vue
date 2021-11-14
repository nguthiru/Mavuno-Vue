<template>
  <canvas id="depositChart"> </canvas>
</template>
<script>
import base from "../../main";
import Chart from "chart.js/auto";
export default {
  name: "chart-line",
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
    const data = graph.data['debit'];
    console.log(data.labels.map(e=>e.month));
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
        labels: data.labels.map(e=>e.month),
        datasets: [
          {
            label: "Total Spending",

            BackgroundColor: "#59914C",
            borderRadius: 7,
            barThickness: 35,
            borderWidth: 1,
            data:  data.labels.map(e=>e.total),
          },
        ],
      },
    };

    var ctx2 = document.getElementById("depositChart").getContext('2d')

    var chart2 = new Chart(ctx2, transactions);
    chart2.setActiveElements([{ datasetIndex: 0, index: data.length - 1 }]);
  },
};
</script>

<style>
</style>