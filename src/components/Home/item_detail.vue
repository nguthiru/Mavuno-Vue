<template>
  <DetailView :images="data.image">
    <div class="detail-view-content">
      <div>
        <h3>{{ data.name }}</h3>
        <h3 class="price primary-color">{{ data.price }}</h3>
      </div>
      <div>
        <h6 class="caption">Description</h6>
        <p>{{ data.description }}</p>
      </div>

      <div class="detail-owner">
        <div class="produce-detail-caption-text">
          <h6 class="caption">Shop</h6>
          <img :src="data.shop.image" />
        </div>
        <div class="caption-text" style="padding-left: 0.2em">
          <h4>{{ data.shop.name.toUpperCase() }}</h4>
        </div>
        <div class="caption-text" style="margin-left: auto; align-self: start">
          <h6 class="caption">Location</h6>
          <h4>{{ data.shop.city.toUpperCase() }}</h4>
        </div>
      </div>
      <div class="quantity-button">
        <div class="quantity-add-cart">
          <div
            class="cart-operation"
            @click="quantity != 1 ? quantity-- : (quantity = 1)"
          >
            <i class="fa fa-minus"></i>
          </div>
          <h6>{{ quantity }}</h6>
          <div class="cart-operation" @click="quantity++">
            <i class="fa fa-plus"></i>
          </div>
        </div>
        <Button @click="addToCart(data)">
          <h6>Add To Cart</h6>
        </Button>
      </div>
    </div>
  </DetailView>
</template>

<script>
import base from "../../main";
import Button from "../shared/button.vue";
import DetailView from "./components/detail_view.vue";
export default {
  components: { DetailView, Button },
  data() {
    return {
      data: null,
      quantity: 1,
      
    };
  },
  methods: {
    async addToCart(item) {
      await this.$store.dispatch("cart/addToCart", {id:item.id,quantity:this.quantity});
      this.$router.back();
    },
  },

  async created() {
    const response = await base.get(
      `customers/farm-items/${this.$route.params.id}/`
    );
    this.data = response.data;
  },
};
</script>

<style>
</style>