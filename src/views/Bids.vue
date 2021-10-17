<template>
    <SideBar/>
    <main id = "bids-main">
        <div id = "bid-main-title">
            <h3> My Bids</h3>
            <h6> Find the Bids You have made. </h6>

        </div>
        <div id= 'bid-searchbar'>
            <SearchBar placeholder="Search Your Bids..."/>
        </div>
        <Filter :items="filter_items"/>
        <div class="sub-content" >
            <BidCard v-for="bid in my_bids" :key="bid.id" :data="bid"/>
        </div>
    </main>
</template>

<script>
import SideBar from '../components/navigation/sidebar.vue';
import SearchBar from '../components/shared/searchbar.vue';
import Filter from '../components/shared/filter.vue';
import BidCard from '../components/Bids/bid-container.vue'
import { mapGetters } from 'vuex';
export default {
    components:{
        SideBar,
        SearchBar,
        Filter,
        BidCard
    },
    data(){
        return {
            filter_items: ['All','Accepted','Rejected','Pending']
        }
    },
    computed:{
        ...mapGetters({
            my_bids:'bids/my_bids'
        })

    },

    created(){
        this.$store.dispatch("bids/get_bids");

    }
    
    
}
</script>