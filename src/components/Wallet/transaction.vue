<template>
  <div class="transaction-card">
    <img :src="image_source"/>
    <div class="transaction-card-details">
      <h5>{{ details.description }}</h5>
      <p class="caption">{{ date }}</p>
    </div>

    <h6 class="transaction-amount" :class="classes">{{ details.amount }}</h6>
  </div>
</template>

<script>
import format_date from "../../methods/methods";
export default {
  props: ["details"],
  name: "transaction-card",
  computed: {
    image_source() {
      if (this.$props.details.wallet_action.action === "S") {
        return "https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/64/000000/external-subscription-model-digital-asset-and-intangible-product-parzival-1997-outline-color-parzival-1997-1.png";
      }
      else if(this.$props.details.wallet_action.action === "D"){
          return "https://img.icons8.com/color-glass/48/000000/deposit.png"
      }
      else if(this.$props.details.wallet_action.action === "W"){
          return "https://img.icons8.com/offices/30/000000/withdrawal-limit.png"
      }
      else{
          return "https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-bid-nft-wanicon-lineal-color-wanicon.png"
      }
    },
    classes() {
      if (this.$props.details.wallet_action.credit === true) {
        return "withdrawal";
      } else {
        return "deposit";
      }
    },
    action() {
      if (this.$props.details.action === "W") {
        return "Bid to ";
      } else {
        return "Deposit";
      }
    },

    date() {
      return format_date(this.$props.details.date_added);
    },
  },
};
</script>

<style>
</style>