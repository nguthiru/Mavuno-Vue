<template>
<SearchBar/>
<div id="farm-items">
        <center><h3 class="title"> Farm Inputs </h3></center>

    <Filter :items="filter"/>,

    <section class ="sub-content">

    <ItemCard v-for="item in items" :data="item" :key="item.id"/>
        

</section>

</div>
  
</template>

<script>
import Filter from '../shared/filter.vue';
import SearchBar from '../shared/searchbar.vue'
import ItemCard from './components/item_card.vue'
import base from '../../main';
export default {
    name:'Farm Items',
    components:{
        Filter,
        SearchBar,
        ItemCard

    },
    data(){
        return {
            items: [],
            filter: [
                'All','Fertilizers','Machines','Hormones','Tools',
                
            
            ]
        }
    },


    async created(){
      const response = await base.get("customers/farm-items/");
      this.items = response.data;
    }
    
}


</script>

<style>

</style>