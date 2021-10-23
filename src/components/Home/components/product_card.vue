<template>
  <router-link :to="link">
    <div class="produce-card" :id="data.id" @click="handleClick">
      <img :src="data.produce_images[0].image" />

      <div class="card-details">
        <section id="produce-info">
          <div class="icons-details">
            <img :src="data.product.svg_icon" />
            <h6 id="product-name">{{ data.product.product_name }}</h6>
          </div>
          <div class="icons-details">
            <i class="fas fa-map-marker-alt"></i>
            <h6 class="location-name">{{ data.farm.city }}</h6>
          </div>
        </section>

        <section id="farm-produce">
          <h4 class="farm">{{ data.farm.farm_name }}</h4>
          <h4 id="weight">{{ data.weight_kgs }}<small>kgs</small></h4>
        </section>

        <h4 class="price">{{ data.starting_price }}</h4>

        <!-- <div id="link">
        <i class='fas fa-wallet'></i>
        <h6> Place a Bid </h6>
    </div> -->
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      produce: {},
      link:`/home/produce/${this.$props.data.id}`
    };
  },
  methods: {
    handleClick() {
      this.$emit("produce-click");
    },
  },

  components: {},
};
</script>