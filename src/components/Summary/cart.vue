<template>
  <div id="cart" class="summary-section">
      <center> <h6 class="summary-section-title">My Cart </h6></center>

    <cart-card v-for="item in cart" :key="item.id +item.quantity" :data="item" @removeItem="handleRemove(item)"/>
  </div>

  <div id="cart-details">
    <h5> Total:   <span>{{cart_total}}<small>ksh</small></span></h5>
    <Button @click="redirect('bids')">
    <h6>Checkout</h6>
  </Button>

  </div>
  
</template>

<script>
import { mapGetters } from "vuex";
import Button from '../shared/button.vue'
import cartCard from "./cartCard.vue";
export default {
  components: { cartCard,Button },
  name: "cart",
  computed: {
    ...mapGetters({
      cart: "cart/cart_items",
      cart_total: "cart/cart_total"
    }),
  },
  created() {
    this.$store.dispatch("cart/get_cart_items");
  },
  methods:{
      handleRemove(item){
          console.log(item);
          this.$store.dispatch("cart/remove_items",item);
      }
  }
};
</script>

<style>
</style>