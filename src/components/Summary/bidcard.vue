<template>

<div class="bid-card" :class="classes">
    <img :src="data.image">
    <div id="bid-card-details">
        <h5 class='bid-card-name'> {{data.name}} </h5>
        <h6> {{data.status}} </h6>
    </div>
    <h5 class="price">{{data['price']}}/=</h5>

</div>

    
</template>

<script>
export default {
    props:['data'],
    name: 'Bid Card',
    computed: {
        classes(){
            if(this.$props['data']['status']==='Pending'){
                return 'pending';
            }
            else if(this.$props['data']['status']==='Accepted'){
                return 'accepted';
            }
            else if(this.$props['data']['status']==='Rejected'){
                return 'rejected';
            }
            return 'pending';
        }
    },



}
</script>