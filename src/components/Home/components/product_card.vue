<template>
<div class="produce-card" :id="data.node.id">
    <img :src="produce.imageProduceRelation[0].image">

    <div class="card-details">

        <section id="produce-info">
        <div class="icons-details">
            <img :src="produce.product.svgIcon">
            <h6 id="product-name"> {{produce.product.productName}}</h6>
        </div>
            <div class="icons-details">
            <h6 id="location-name"> {{produce.farm.city}}</h6>
        </div>
    </section>

    <section id="farm-produce">
        <h4 id="farm">{{produce.farm.farmName}}</h4>
        <h4 id="weight">{{produce.weightKgs}}<small>kgs</small></h4>
    </section>

    <div class = "price-card">
        <h4 class="price">{{produce.startingPrice}}<small>per kg</small></h4>
        <Button>
            <h6>Bid</h6>
        </Button>


    </div>

    </div>

    
    

</div>
    
</template>

<script>
import Button from '../../shared/button.vue'

export default {
    props: ['data'],
    data(){
        return {
            produce:{}
        }
    },
    // mounted(){
    //     var name = document.getElementById('product_name');
    //     name.style.color = this.produce['product']['colorCode'];
    //     console.log(this.produce['product']['colorCode'])
    // },
    components: {
        Button
    },
    created(){
        this.produce = this.$props.data.node
       


    }


    
}
</script>