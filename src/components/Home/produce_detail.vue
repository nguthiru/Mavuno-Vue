<template>
  <div id="produce-detail">
    <div id="produce-detail-nav">
      <HeaderCustom />
    </div>
    <main>
      <div id="produce-detail-images">
        <div id="produce-detail-main-image">
          <img :src="data.produce_images[selected_index].image" />
        </div>

        <div id="produce-detail-image-select">
          <div class="produce-detail-image-caption">
            <img
              v-for="(image, index) in data.produce_images"
              :style= "activeColor(index)"
              :class="selected_index == index ? 'active' : ''"
              :key="image.image"
              :src="image.image"
              @click="changeImage(index)"
            />
          </div>
        </div>
      </div>
      <div id="produce-detail-content">
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
          <div id="produce-detail-farm-section">
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
          <Button :color="data.product.colorCode">
            <h6>Place Bid</h6>
          </Button>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import base from "../../main";
import HeaderCustom from "../navigation/header.vue";
import moment from "moment";
import TabsWrapper from "../shared/Tabs/TabsWrapper.vue";
import Tab from "../shared/Tabs/tab.vue";
import Button from "../shared/button.vue";

export default {
  components: { HeaderCustom, TabsWrapper, Tab, Button },
  name: "produce-detail",
  data() {
    return {
      data: {},
      selected_index: 0,
    };
  },
  methods: {
    changeImage(index) {
      this.selected_index = index;
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
    format_date() {
      return moment(this.data.date_added).format("Do MMMM YYYY");
    },
    colorStyle(){
        return {
           'color':this.data.product.colorCode
        }
    },
    
    
  },
  async created() {
    const response = await base.get(
      `customers/produce/${this.$route.params.id}/`
    );
    this.data = response.data;
    console.log(this.data.produce_images[0]);
  },
};
</script>

<style>
</style>