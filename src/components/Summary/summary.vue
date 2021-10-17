<template>
  <div id="summary">

    <div id="header">
      <!-- <i class="fas fa-shopping-cart"></i> -->
      
      <a href="">My Farm</a>
      <Button v-if="!authenticated" style="padding:0.5em 0.8em; margin-left:0.6em" @click="redirect('login')">
        <h6> Login </h6>
      </Button>


    </div>
    <div id="heading">
      <h4 id="quick-access" > Welcome <span v-if="authenticated"> {{user.username.toUpperCase()}}</span></h4>
      <h6> View You Bid Status </h6>
    </div>
    <Filter :items="filter" @created="handleFilter"/>
    

    <div id="bids">
      <BidCard v-for="bid in my_bids.slice(0,5)" :key="bid.id" :data="bid" />
    </div>
    <Button @click="redirect('bids')">
      <h6>View More</h6>
    </Button>
  </div>
</template>

<script>
import Button from "../shared/button.vue";
import BidCard from "../Summary/bidcard.vue";
import Filter from "../shared/filter.vue";
import {mapGetters} from 'vuex';
export default {
  name: "Summary",
  components: {
    Button,
    BidCard,
    Filter,
  },
  data() {
    return {
      filter:['All','Accepted','Pending','Rejected']
    };
  },
  computed:{
    
      ...mapGetters({
        authenticated:'auth/authenticated',
        user:'auth/user',
        my_bids:'bids/my_bids'
      })


    
  },
  methods: {
    redirect(name){
      this.$router.replace({
        name:name
      });
    },

    handleFilter(item){
      this.$store.dispatch("bids/filter_bids",item);
    }

  },

  async created() {
    this.$store.dispatch("bids/get_bids");
  },
};
</script>

<style>
</style>