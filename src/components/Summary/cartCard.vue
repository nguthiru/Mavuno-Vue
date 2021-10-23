<template>
  <div class="cart-card-container">
    <div class="cart-card">
      <img :src="data.item.image[0].image" />
      <div class="cart-card-details">
        <h5 class="cart-card-name">{{ data.item.name }}</h5>
        <h6 class="cart-card-shop-details">
          <span class="caption">Farm: </span>{{ data.item.shop.name }}
        </h6>
        <h6 class="cart-card-price">
          {{ data.item.price }}<small>sh</small> <span> X {{ quantity }}</span>
        </h6>
      </div>

      <div class="icon-button delete" @click="removeItem">
        <i class="far fa-trash-alt fa-xs"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      quantity: this.$props.data.quantity,
    };
  },

  computed: {
    subTotal() {
      return this.$props.data.item.price * this.quantity;
    },
  },
  methods: {
    decreaseQuantity() {
      if (this.quantity != 1) {
        this.quantity--;
      }
    },

    removeItem() {
      this.$emit("RemoveItem");
    },
  },
};
</script>

<style>
</style>