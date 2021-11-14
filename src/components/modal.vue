<template>
  <div id="Mymodal" class="modal">
    <div class="modal-header">
      <div id="close-modal" @click="closeModal">
        <i class="fa fa-times"></i>
      </div>
    </div>
    <div class="modal-body">
      <div id="modal-title">
        <slot name="title"/>
      </div>
      <slot name="body"/>
      
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    
    // colorStyle(){
    //   return {
    //     'color':this.$props.bid_data.product.colorCode,
    //     'border-bottom': `1.5px solid ${this.$props.bid_data.product.colorCode}`
    //   }
    // },
    

    
  },
  methods: {
    closeModal() {
      this.$emit("CloseModal");
    },

  },
};
</script>

<style scoped>
</style>