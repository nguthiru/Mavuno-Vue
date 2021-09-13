<template>
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
        <div class="list-item">
          <li><router-link to="/home/farms">Farms</router-link></li>
        </div>
        <div class="list-item">
          <li><router-link to="/home/shops">Shops</router-link></li>
        </div>
      </ul>
    </div>
    <router-view />
  </main>
</template>

<script>

export default {
  name: "Home",

};
</script>

<style>
</style>
