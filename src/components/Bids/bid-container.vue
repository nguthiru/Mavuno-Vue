<template>
  <div id="bid-container">
    <router-link :to="produce_link">
      <div id="bid-farm-details">
        <img :src="data.produce.produce_images[0].image" />

        <div id="bid-produce-farm">
          <h5>{{ data.produce.farm.farm_name }}</h5>
          <div id="bid-farm-product-name">
            <h6>{{ data.produce.product.product_name }}</h6>
            <h6 class="primary-color">{{ data.produce.farm.city }}</h6>
          </div>
        </div>
      </div>
    </router-link>

    <div id="bid-bid-details">
      <div id="bid-title-date">
        <small
          ><h6>{{ format_date }}</h6></small
        >
      </div>
      <div id="bid-price-weight">
        <h4>{{ data.kilograms }}<small>Kgs</small></h4>
        <h4 class="price">{{ data.bid_price }}</h4>
      </div>
    </div>

    <div id="bid-status">
      <center>
        <h5 :class="classes">{{ classes }}</h5>
      </center>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "bid-container",
  props: ["data"],

  computed: {
    produce_link() {
      return `/home/produce/${this.$props["data"].produce.id}`;
    },
    format_date() {
      return moment(this.$props.data.date_made).format("Do MMMM YYYY");
    },
    classes() {
      if (this.$props["data"]["status"] === "P") {
        return "Pending";
      } else if (this.$props["data"]["status"] === "R") {
        return "Rejected";
      } else if (this.$props["data"]["status"] === "A") {
        return "Accepted";
      } else {
        return "Pending";
      }
    },
  },
};
</script>

<style>
</style>