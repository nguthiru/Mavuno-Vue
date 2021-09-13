<template>
  <div id="sidebar">
    <section id="logo">
        <img src = '../../assets/logo.png'>
      </section>
    <section id="navigation">
      
      <div class="side-links active">
        
        <router-link to="/home">
        <i class="fa fa-home"></i>

        <h5>Home</h5>
        </router-link>
      </div>
      <div class="side-links">
        <router-link to="/Bids">
        <i class="fas fa-money-bill"></i>
        <h5>Bids</h5>
        </router-link>

      </div>
      <div class="side-links">
        <router-link to="/wallet">
        <i class="fas fa-wallet"></i>
        <h5>Wallet</h5>
        </router-link>

      </div>
      <div class="side-links">
        <router-link to="/stats">
        <i class="fas fa-chart-pie"></i>

          <h5>Prices</h5>
        </router-link>

      </div>
      <div class="side-links">
        <router-link to="/points">
        <i class="fas fa-fire"></i>

      
          <h5>My Points</h5>
        </router-link>

      </div>
      <!-- <div class="side-links">
        <img data="../../assets/icons/settings.svg"  />
        <h5>Settings</h5>
      </div> -->
    </section>

    <section id="refer">
      <div class="side-links">
        <router-link to="/points">
        <object type="image/svg+xml" :data="require('../../assets/icons/shop.svg')"></object>
        <h5>Refer Business</h5>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

