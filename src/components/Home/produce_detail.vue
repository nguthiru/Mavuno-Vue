<template >
<Modal v-show="showModal" @closeModal="showModal=false" @modalButtonClick="placeBid">
  <template v-slot:title>
    <h3>Place a bid</h3>
        <h6>You must bid at least: <span class="price">{{data.starting_price}}</span></h6>
  </template>
  <template v-slot:body>
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
      <Button :style="buttonStyle" @click="placeBid({'weight':this.quantity,'price':this.price})"> <h6> Place Bid </h6></Button>
  </template>
</Modal>
<DetailView :images="data.produce_images" :color="data.product.colorCode">
  <div id="produce-detail-content" class="detail-view-content" >
        <div id="produce-detail-product">
          <div id="product-details-product-svg-name">
            <img :src="data.product.svg_icon" />
            <div id="product-details-product-name-date">
              <h4>{{ data.product.product_name }}</h4>
              <h6 class="caption">{{ format_date }}</h6>
            </div>
          </div>
          <h5 class="link">View More</h5>
        </div>
        <section>
          <div id="produce-detail-tab-section">
            <TabsWrapper>
              <Tab title="Details">
                <div>
                  <h5>
                    Produce weight:
                    <span :style="colorStyle"> {{ data.weight_kgs }}<small>kgs</small></span>
                  </h5>
                  <h5>
                    Minimum weight to order:
                    <span :style="colorStyle"> {{ data.least_orderable }}</span>
                  </h5>
                  <h5>
                    Minimum bid:
                    <span :style="colorStyle"> {{ data.starting_price }}<small>sh</small></span>
                  </h5>
                </div></Tab
              >
              <Tab title="Farm Details"> Farm Details </Tab>
              <Tab title="History"> History </Tab>
            </TabsWrapper>
          </div>
          <div id="produce-detail-farm-section" class="detail-owner">
            <div class="produce-detail-caption-text">
              <h6 class="caption">Farm</h6>
              <img :src="data.farm.image" />
            </div>

            <div class="caption-text" style="padding-left: 0.2em">
              <h4>{{ data.farm.farm_name.toUpperCase() }}</h4>
            </div>
            <div
              class="caption-text"
              style="margin-left: auto; align-self: start"
            >
              <h6 class="caption">Location</h6>
              <h4>{{ data.farm.city.toUpperCase() }}</h4>
            </div>
          </div>

          <div id="produce-detail-bid">
            <div class="caption-text">
              <h6 class="inactive caption">Minimum Bid:</h6>
              <h3 class="price" :style="colorStyle">{{ data.starting_price }}</h3>
            </div>
            <div class="caption-text">
              <h6 class="caption inactive">Minimum Weight:</h6>
              <h3 :style="colorStyle" style="font-weight: 600">
                {{ data.least_orderable }}
              </h3>
            </div>
          </div>
          <Button :color="data.product.colorCode" @click="showModal=true">
            <h6>Place Bid</h6>
          </Button>
        </section>
      </div>

</DetailView>

</template>

<script>
import base from "../../main";
import moment from "moment";
import TabsWrapper from "../shared/Tabs/TabsWrapper.vue";
import Tab from "../shared/Tabs/tab.vue";
import Button from "../shared/button.vue";
import DetailView from '../Home/components/detail_view.vue';
import Modal from '../modal.vue';

export default {
  components: { DetailView, TabsWrapper, Tab, Button, Modal },
  name: "produce-detail",
  data() {
    return {
      data: {},
      selected_index: 0,
      price: 0,
      quantity: 0,
      showModal:false
    };
  },
  methods: {
    changeImage(index) {
      this.selected_index = index;
    },
    async placeBid(item){
      item['produce'] = this.data.id;
      await this.$store.dispatch('bids/create_bid',item);
      this.showModal = false;
      

    },
    activeColor(index){
        if(index===this.selected_index){
            return {
                'border':`2.5px solid ${this.data.product.colorCode}`
            };
        }
        return {}
    }
  },
  computed: {
    totalAmount(){
      return this.price * this.quantity
    },
    levy(){
      return this.totalAmount/1000;
    },
    format_date() {
      return moment(this.data.date_added).format("Do MMMM YYYY");
    },
    colorStyle(){
        return {
           'color':this.data.product.colorCode
        }
    },
    buttonStyle(){
       return {
        'background-color':this.data.product.colorCode,
      }
    }
    
    
  },
  async created() {
    const response = await base.get(
      `customers/produce/${this.$route.params.id}/`
    );
    this.data = response.data;
    this.price = response.data.starting_price;
  },
};
</script>

<style>
</style>