<template>
  <div id="Mymodal" class="modal">
      <div class="modal-header">
        <div id="close-modal" @click = "closeModal">
          <i class="fa fa-times"></i>

        </div>
         
      </div>
      <div class="modal-body">
          <div class="modal-image-body">
              <img :src="data.produce_images[selectedImageIndex].image" class="main-modal-image">

              <div id=modal-image-options>
                  <img  v-for= "(image,index) in data.produce_images" :key="image.image" :src="image.image" :class="index==selectedImageIndex? 'active' :'' " alt="" class="caption-modal-image" @click="changePicture(index)">

              </div>
          </div>

          <div class="modal-product-details">
            
          </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {  },
    props:['data'],
    data(){
        return{
            selectedImageIndex:0
        }
    },
    methods:{
        changePicture(index){
            this.selectedImageIndex = index;
        },
        closeModal(){
          this.$emit("CLOSE_MODAL");
        }
    },

    created(){
        console.log(this.$props.data)
    }

}
</script>

<style scoped>


</style>