<template>
<Header/>

<SideBar/>

<Summary/>

  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
   <router-view/>
</template>

<script>
  import Header from './components/navigation/header.vue';
  import SideBar from './components/navigation/sidebar.vue';
  import Summary from './components/Summary/summary.vue';



export default {
  name: 'App',
  components: {
    Header,SideBar,Summary
  }

}
</script>