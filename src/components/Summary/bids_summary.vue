<template>

<div id="heading">
    </div>
    <Filter :items="filter" @created="handleFilter"/>
    <div id="bids" >
      <BidCard v-for="bid in selected_bids" :key="bid.id" :data="bid" />
    </div>
    <Button @click="redirect('bids')">
      <h6>View More</h6>
    </Button>
</template>

<script>
import BidCard from "../Summary/bidcard.vue";
import Button from "../shared/button.vue";
import Filter from "../shared/filter.vue";
import {mapGetters} from 'vuex';
export default {
  name: 'bid-summary',
    components:{
        BidCard,Button,Filter
    },

    data() {
        return {
        filter:['All','Accepted','Pending','Rejected']
        };
  },
  computed:{
       ...mapGetters({
        my_bids:'bids/my_bids'
      }),
      selected_bids(){
        return this.my_bids.slice(0,5);
      }
  },
  methods:{
      handleFilter(item){
      this.$store.dispatch("bids/filter_bids",item);
    },
    redirect(name){
      this.$router.push(name);
    }
  }

}
</script>

<style>

</style>