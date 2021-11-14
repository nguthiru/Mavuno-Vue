<template>
<SideBar/>
  <main>
    <div id="links">
      <ul>
        <div class="list-item">
          <li class="active">
            <router-link to="/home/produce"> Produce</router-link>
          </li>
        </div>
        <div class="list-item">
          <li><router-link to="/home/items">Farm Items</router-link></li>
        </div>
        <!-- <div class="list-item">
          <li><router-link to="/home/farms">Farms</router-link></li>
        </div>
        <div class="list-item">
          <li><router-link to="/home/shops">Shops</router-link></li>
        </div> -->
      </ul>
    </div>
    <router-view />
  </main>
  <Summary/>

</template>

<script>
  import SideBar from '../components/navigation/sidebar.vue';
  import Summary from '../components/Summary/summary.vue';
export default {
  
  name: "Home",
  components:{
  SideBar,Summary,
  }
  
};
</script>

<style>
</style>
