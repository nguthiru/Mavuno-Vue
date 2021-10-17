<template>




  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
   <router-view/>
   <Summary/>
</template>

<script>
  


export default {
  name: 'App',

  created(){
     
      const token = localStorage.getItem('token');

      if(token !=null){
        this.$store.dispatch("auth/get_user",token);
      }
    }


  
  

}
</script>