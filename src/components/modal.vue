<template>
  <div id="Mymodal" class="modal">
    <div class="modal-header">
      <div id="close-modal" @click="closeModal">
        <i class="fa fa-times"></i>
      </div>
    </div>
    <div class="modal-body">
      <div id="modal-title">
        <h3>Place a bid</h3>
        <h6>You must bid at least: <span class="price">{{bid_data.starting_price}}</span></h6>
      </div>
      <div id="modal-form-container">
        <div class="modal-form">
          <label>Price<small>(per kg)</small></label>
          <input type="number" v-model="price" :style="colorStyle" />
        </div>
        <div class="modal-form">
          <label>Quantity<small>(kgs)</small> </label>
          <input type="number" v-model="quantity" :style="colorStyle"/>
        </div>
       
      </div>
      <div id="modal-bid-details">
        <h6>Total Amount: <span class="price"> {{totalAmount}}</span></h6>
        <h6>Mavuno Levy: <span class="price">{{levy}}</span></h6>
      </div>
      <Button :style="buttonStyle" @click="modalButtonClick"> <h6> Place Bid </h6></Button>
    </div>
  </div>
</template>

<script>
import Button from './shared/button.vue'
export default {
  props:['bid_data',],
  components: {Button},
  data() {
    return {
      price: this.$props.bid_data.starting_price,
      quantity: 0,
    }
  },
  computed:{
    totalAmount(){
      return this.price * this.quantity
    },
    levy(){
      return this.totalAmount/1000;
    },
    colorStyle(){
      return {
        'color':this.$props.bid_data.product.colorCode,
        'border-bottom': `1.5px solid ${this.$props.bid_data.product.colorCode}`
      }
    },
    buttonStyle(){
       return {
        'background-color':this.$props.bid_data.product.colorCode,
      }

    }
  },
  methods: {
    closeModal() {
      this.$emit("CloseModal");
    },
    modalButtonClick(){
      this.$emit("modalButtonClick",{'weight':this.quantity,'price':this.price});

    }
  },
};
</script>

<style scoped>
</style>