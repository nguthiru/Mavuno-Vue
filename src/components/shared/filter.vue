<template>

<div id="filter">
    <h5>{{heading}}</h5>

    <section>

    <div :class="(item===active)?'active':'inactive'" class="filter-area" v-for="item in items" :key="item">
        <h6  @click="filter(item)" style="cursor:pointer;" > {{item}} </h6>

    </div>
    </section>
</div>
  
</template>

<script>
export default {

    props:['items','heading'],
    name: 'filter',
    data(){
        return {
            active:'All',
        }
    },

    methods:{
        filter: function(item) {
            console.log(this.active)
            this.active = item
        }
    }

    





}
</script>

<style>

</style>