<template>
  <div id="sidebar">
    <section id="logo">
        <center><img src = '../../assets/logo.png'></center>
      </section>


    <section id="user-data-image" v-if="farm">
      <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg">
      <div id = "user-data">
        <center><h6 id="usertype"> {{usertype}}</h6></center>
        <h6 id="user-data-email"> {{farm.farm_name}}</h6>
      </div>
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
      <!-- <div class="side-links">
        <router-link to="/points">
        <i class="fas fa-fire"></i>

      
          <h5>My Points</h5>
        </router-link>

      </div> -->
      <!-- <div class="side-links">
        <img data="../../assets/icons/settings.svg"  />
        <h5>Settings</h5>
      </div> -->
    </section>

    <section id="refer">
      <div class="side-links" >
        <router-link to="/points" style="color:#cd8e48">
        <i class="fas fa-store"></i>
        <h5>Refer Business</h5>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
export default {
  name: "Sidebar",

  computed:{
    ...mapGetters({
      user: 'auth/user',
      farm: 'auth/farm'
    }),

    usertype(){
      if(this.user.usertype=='F'){
        return 'Farmer';
      }
      return "Farmer";
    }


  }
};
</script>

