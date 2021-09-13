<template>
<!-- <IntroCard>
  <template v-slot:text>
    <center><h4> Mavuno Produce</h4></center>
    
    <p> Find,Bid and connect with farmers through our platform </p>
  </template>

  <template v-slot:image>
    <img src="../../assets/fruits.png">
  </template>

</IntroCard> -->
<SearchBar />

<div id ="produce">
          
<!-- <center><h3 class="title">Farm Produce</h3></center> -->

<Filter :items="filter"/>,


<section class ="sub-content">

    <Card v-for="item in produce" :data="item" :key="item.node.id"/>
        

</section>
</div>
</template>

<script>
import Filter from '../shared/filter.vue';
import Card from './components/product_card.vue';
import gql from 'graphql-tag';
import SearchBar from "../shared/searchbar.vue";
// import IntroCard from "./components/intro_card.vue"


const GET_PRODUCE = gql`
query produce{
produce{
  edges{
    node{
      id
      imageProduceRelation{
        image
      }
      product{
        productName
        colorCode
        svgIcon
        
      }
      farm{
        city
        farmName

      }
      weightKgs
      startingPrice
      
    }
  }
}
}

`;

export default {
    name:'Produce Page',
    components:{
        Filter,
        Card,
        SearchBar,
        // IntroCard
    },

    data(){
        return {
            produce: [],
            filter: [
              'All','Onions','Potatoes','Cabbages','Peas','Pepper'
                
            
                
            ]
        }
    },
    apollo: {
        produce: {
            query: GET_PRODUCE,
            update: data => data.produce.edges
        },

        
    },

}
</script>

<style>

</style>