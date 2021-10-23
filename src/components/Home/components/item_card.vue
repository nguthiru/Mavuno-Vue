<template>
<router-link :to="link">
<div class="produce-card" :id="data.id">
    <img :src="data.image[0].image">
    <section class="card-details">

        <div id ="product-details" >
            <h4>{{data.name}}</h4>
            <p class="description" style="margin-top:0.2em">{{data.description}}</p>
        </div>

        <div class = "price-card">
            <h4 class="price">{{data.price}}</h4>
        </div>

        <div class="item-card-add-to-cart" @click="handleAddCart">
            <i class= "fa fa-shopping-cart"></i>
            <h6> Add To Cart</h6>
            
        </div>
    </section>


</div>
</router-link>
</template>

<script>
export default {
    name: 'item-card',
    components:{},
    props:['data'],
    data(){
        return {
        link:`/home/items/${this.$props.data.id}`
        }
    },


    methods: {
        handleAddCart(){
            this.$emit("addToCart")
        }
    },

    

}
</script>

<style>

</style>