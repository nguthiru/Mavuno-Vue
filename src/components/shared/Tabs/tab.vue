<template>
<div :id="title" class="summary-content" v-show= "selectedTitle===title">
    <slot />
</div>
  
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
  props: ['title'],
  setup(){
    const selectedTitle = inject("selectedTitle");

    return {
      selectedTitle
    }
  }

}
</script>

<style>

</style>