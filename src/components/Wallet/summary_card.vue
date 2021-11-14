<template>
  <div class="wallet-usage">
    <!-- <img
            :src="https://img.icons8.com/color-glass/48/000000/deposit.png"
            alt="Deposited"
          /> -->
    <img :src="image" alt="" />
    <div>
      <p class="wallet-usage-time">This Month:</p>
      <h6>{{ text }}</h6>
    </div>
    <div>
      <div class="wallet-usage-price">
        <p>{{ price }}sh</p>
        <i v-if="price_state==='increasing'" class="fas fa-angle-up" style="display: inline"></i>
        <i v-if="price_state==='decreasing'" class="fas fa-angle-down" style="display: inline"></i>

      </div>
      <p style="font-weight: normal">{{ increase }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "values", "text"],
  name: "wallet-summary-card",
  computed: {
    price() {
      if (this.$props.values.length != 1) {
        let lastElement = this.$props.values[this.$props.values.length - 1];
        return lastElement.total;
      } else {
        return this.$props.values[0].total;
      }
    },
    previous_price() {
      if (this.$props.values.length != 1) {
        let lastElement = this.$props.values[this.$props.values.length - 2];
        return lastElement.total;
      } else {
        return this.$props.values[0].total;
      }
    },

    increase() {
      return ((this.price - this.previous_price) / this.previous_price) * 100;
    },
    price_state(){
        if(this.previous_price>this.price){
            return 'decreasing'
        }
        else{
            return 'increasing'
        }
    }
  },
  mounted() {
    console.log(this.$props.values);
  },
};
</script>

<style>
</style>