<template>
  <div class="tabs">
    <ul class="tabs-header">
      <li v-for="tabTitle in tabTitles" :key=tabTitle @click="selectedTitle=tabTitle" :class="{tab_selected:selectedTitle==tabTitle}">{{tabTitle}}</li>
    </ul>
  </div>
  <slot/>
</template>

<script>
  import {ref,provide} from 'vue';
export default {
  setup(props,{slots}){
    const tabTitles = ref(slots.default().map(tab=>tab.props.title));
    const selectedTitle = ref(tabTitles.value[0])
    provide("selectedTitle",selectedTitle);

    return {
      selectedTitle,
      tabTitles
    };


  }

  
 
  

}
</script>

<style>

</style>