<template>
<div class="produce-card" :id="data.node.id">
    <img :src="item.itemImages[0].image">
    <section class="card-details">

        <div id ="product-details" >
            <h6 id="agrovet-name">{{item.agrovet.name}}</h6>
            <h4>{{item.name}}</h4>
            <p class="description" style="margin-top:0.2em">{{item.description}}</p>
        </div>

        <div class = "price-card">
            <h4 class="price">{{item.price}}<small>/=</small></h4>
            <Button>
            <center> <img src="../../../assets/icons/cart2.svg" style="height:1.1em;width:1.1em;"></center>
            </Button>
        </div>
    </section>


</div>
</template>

<script>
import Button from '../../shared/button.vue';
export default {
    name: 'item-card',
    components:{
        Button
    },
    props:['data'],

    data(){
        return{item:{}}
    },

    created(){

        this.item = this.$props.data.node

    }

}
</script>

<style>

</style>