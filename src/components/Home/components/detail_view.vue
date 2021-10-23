<template>
  <div class="detail-container">
    <div id="produce-detail">
      <div id="produce-detail-nav">
        <HeaderCustom />
      </div>
      <div class="produce-item-detail-view">
        <div id="produce-detail-images">
          <div id="produce-detail-main-image">
            <img :src="images[selected_index].image" />
          </div>
          <div id="produce-detail-image-select">
            <div class="produce-detail-image-caption">
              <img
                v-for="(image, index) in images"
                :style="activeColor(index)"
                :class="selected_index == index ? 'active' : ''"
                :key="image.image"
                :src="image.image"
                @click="changeImage(index)"
              />
            </div>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCustom from "../../navigation/header.vue";

export default {
  components: { HeaderCustom },
  name: "produce-detail",
  props: ["images", "color"],
  data() {
    return {
      selected_index: 0,
    };
  },
  created() {
    console.log(this.$props.images[0].image);
  },
  methods: {
    changeImage(index) {
      this.selected_index = index;
    },
    activeColor(index) {
      if (index === this.selected_index) {
        return {
          border: `2.5px solid ${this.$props.color}`,
        };
      }
      return {};
    },
  },
  computed: {
    colorStyle() {
      return {
        color: this.data.product.colorCode,
      };
    },
  },
};
</script>

<style>
</style>