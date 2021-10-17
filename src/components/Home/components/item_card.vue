<template>
<div class="produce-card" :id="data.id">
    <img :src="data.image[0].image">
    <section class="card-details">

        <div id ="product-details" >
            <h6 id="agrovet-name">{{data.shop.name}}</h6>
            <h4>{{data.name}}</h4>
            <p class="description" style="margin-top:0.2em">{{data.description}}</p>
        </div>

        <div class = "price-card">
            <h4 class="price">{{data.price}}<small>/=</small></h4>
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


    created(){

        console.log(this.$props.data)

    }

}
</script>

<style>

</style>