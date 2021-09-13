<template>
<SearchBar/>
<div id="farm-items">
        <center><h3 class="title"> Farm Inputs </h3></center>

    <Filter :items="filter"/>,

    <section class ="sub-content">

    <ItemCard v-for="item in items" :data="item" :key="item.node.id"/>
        

</section>

</div>
  
</template>

<script>
import Filter from '../shared/filter.vue';
import SearchBar from '../shared/searchbar.vue'
import ItemCard from './components/item_card.vue'
import {gql} from 'graphql-tag'


const GET_ITEMS = gql`
query items{
items{
  edges{
    node{
      name
      id
      agrovet{
        name
        id
      }
      description
      price
      itemImages{
        image
      }
      
      
    }
  }
}
}


`
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
    apollo: {
        items: {
            query: GET_ITEMS,
            update: data => data.items.edges
        },

        
    },
    
}


</script>

<style>

</style>