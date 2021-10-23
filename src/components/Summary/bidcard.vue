<template>
  <div class="bid-card" :class="classes">
    <div id="bid-card-image-farm-name">
      <img :src="data.produce.produce_images[0].image" />
      <div id="bid-card-details">
        <h5 id="bid-card-name" class="farm">{{ data.produce.farm.farm_name }}</h5>
        <div id="bid-status-price">
          <h6 :class=classes class="bid-card-status">{{ classes }}</h6>
          <h5 class="price">{{ data["bid_price"] }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "Bid Card",

  computed: {
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