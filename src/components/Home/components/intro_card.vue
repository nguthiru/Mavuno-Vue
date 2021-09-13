<template>

<div class="intro-card">
    <img src="../../../assets/logo.png">
    <div class="intro-text">

        <slot name="text">    

        </slot>

    </div>
    <div class="intro-image">
        <slot name="image">
        </slot>
    </div>
    
</div>
  
</template>

<script>
export default {
    name:'Income'

}
</script>

<style>

</style>