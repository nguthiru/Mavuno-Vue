<template>

<Modal v-if="showModal" :data="activeModalData" @CLOSE_MODAL="close_modal"/>

<SearchBar />

<div id ="produce">
          

<Filter :items="filter"/>,


<section class ="sub-content">

    <Card v-for="item in produce" :data="item" :key="item.id" @produce-click="produceDetail(item)"/>

</section>
</div>
</template>

<script>
import Filter from '../shared/filter.vue';
import Card from './components/product_card.vue';
import SearchBar from "../shared/searchbar.vue";
import base from '../../main';
import Modal from '../modal.vue';
// import IntroCard from "./components/intro_card.vue"


export default {
    name:'Produce Page',
    components:{
        Filter,
        Card,
        SearchBar,
        Modal,
        // IntroCard
    },

    data(){
        return {
            produce: [

            ],
            filter: [
              'All','Onions','Potatoes','Cabbages','Peas','Pepper','Beans'
            ],
            showModal:false,
            activeModalData: null
        }
    },
    methods:{
      
      close_modal(){
        this.showModal = false;
      }
      
    },

    async mounted(){
      const response = await base.get("customers/produce/");
      this.produce = response.data;
      

    }

}
</script>

<style>

</style>