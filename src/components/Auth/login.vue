<template>
  <div class="auth-section">
    <div class="auth-links">
      <img src="../../assets/logo.png" />
      <h5 class="auth-link">Business Login</h5>
    </div>

    <div class="auth-intro-text">
      <h4>Login</h4>
      <h5>Welcome Back</h5>
    </div>

    <div class="input-auth">
      <div class="input-wrapper">
        <input type="email" class="pl-3" placeholder="Email Address" v-model="email"/>
      </div>
      <div class="input-wrapper">
        <input type="password" class="pl-3" placeholder="Password" v-model="password" />
      </div>

      <Button @click="submit">
        <!-- <i class="fa fa-sign-in"></i> -->
        <h6>Login</h6>
      </Button>
    </div>

    <div id= "password-links">
        <h5> Forgot Password?<a> Reset Password</a></h5>
        <h5> Don't Have an Account?<a> Create An Account</a></h5>

    </div>

    
  </div>

  <div class="svg-section">
    <div class="auth-links">
      <h5 class="auth-link">Continue Shopping</h5>
      <h5 class="auth-link">Start Business/Farm</h5>
    </div>

    <img src="../../assets/login_hero.png" />
  </div>
</template>

<script>
import Button from "../shared/button.vue";
import {mapActions} from 'vuex';

export default {
  components: {
    Button,
  },

  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),

    submit(){
      this.signIn({'username':this.email,'password':this.password}).then(()=>{
        this.$router.replace({
          name:'produce'
        });
      });
    }
    
  }
};
</script>

<style>
</style>