<template>
  <div id="summary">
    <img src="../../assets/test/avatar/me.jpg" class="avatar" />
    <div id="details">
      <div class="detail">
        <object
          type="image/svg+xml"
          :data="require('../../assets/icons/wallet.svg')"
        ></object>
        <h6 class="green-text">ksh 100</h6>
      </div>
      <div class="detail">
        <object
          type="image/svg+xml"
          :data="require('../../assets/icons/points.svg')"
        ></object>
        <h6 class='accent-text'>50<small>points</small></h6>
      </div>
    </div>

    <div style="position: relative">
      <h5 class="green-text">Recent Bids</h5>
      <div class="badge" style="right:0">
        <h6>5</h6>
      </div>
    </div>

    <div id="bids">
      <BidCard v-for="bid in bids" :key="bid.id" :data="bid" />
    </div>
    <Button>
      <h6>View More</h6>
    </Button>
  </div>
</template>

<script>
import Button from "../shared/button.vue";
import BidCard from "../Summary/bidcard.vue";
export default {
  name: "Summary",
  components: {
    Button,
    BidCard,
  },
  data() {
    return {
      bids: [],
    };
  },

  async created() {
    const response = await fetch("http://localhost:3000/bids");
    const data = await response.json();
    this.bids = data;
  },
};
</script>

<style>
</style>