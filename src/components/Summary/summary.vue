<template>
  <div id="summary" >

    <div id="header">
      <!-- <i class="fas fa-shopping-cart"></i> -->

      
      <a href="">My Farm</a>
      <Button v-if="!authenticated" style="padding:0.5em 0.8em; margin-left:0.6em" @click="redirect('login')">
        <h6> Login </h6>
      </Button>


    </div>      
    <!-- <h4 id="quick-access" > WELCOME <span v-if="authenticated"> {{user.username.toUpperCase()}}</span></h4> -->

    
    <Filter :items="filter" @created="handleFilter"/>
    <TabWrapper>
        <Tab title="Bids"><BidSummary/></Tab>
        <Tab title="Cart"><Cart/></Tab>


    </TabWrapper>
  
    


  </div>
</template>

<script>
import TabWrapper from '../shared/Tabs/TabsWrapper.vue';
import Tab from '../shared/Tabs/tab.vue';
import BidSummary from './bids_summary.vue'
import Cart from './cart.vue'
import {mapGetters} from 'vuex';
export default {
  name: "Summary",
  components: {
  BidSummary,
  Cart,
  TabWrapper,
  Tab
  },
  
  computed:{
    
      ...mapGetters({
        authenticated:'auth/authenticated',
        user:'auth/user',
      })


    
  },
  methods: {
    redirect(name){
      this.$router.replace({
        name:name
      });
    },

  },

  async created() {
    this.$store.dispatch("bids/get_bids");
  },
};
</script>

<style>
</style>