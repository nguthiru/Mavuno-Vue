<template>
<SearchBar/>
<div id="farm-items">
        <!-- <center><h3 class="title"> Farm Inputs </h3></center> -->

    <Filter :items="filter"/>,

    <section class ="sub-content">

    <ItemCard v-for="item in items" :data="item" :key="item.id" @addToCart="handleaddToCart(item)"/>
        

</section>

</div>
  
</template>

<script>
import Filter from '../shared/filter.vue';
import SearchBar from '../shared/searchbar.vue'
import ItemCard from './components/item_card.vue'
import base from '../../main';
import { ref } from '@vue/reactivity';
import { onMounted, } from '@vue/runtime-core';
export default {
    name:'Farm Items',
    components:{
        Filter,
        SearchBar,
        ItemCard

    },
     setup(){
        var items = ref([]);

        const filter = ref(['All','Fertilizers','Machines','Hormones','Tools']);
        const getFarmItems = async ()=> {
            const response = await base.get("customers/farm-items/");
            items.value = response.data;
            };

        onMounted(()=>{
            getFarmItems();
            
            
            });
        
        return {
            items,filter,getFarmItems
        }
        
    },
    methods:{
         handleaddToCart(item){
             this.$store.dispatch("cart/addToCart",item);
         }

    }
    
    
}


</script>

<style>

</style>