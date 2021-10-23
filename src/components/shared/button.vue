<template>

<div class="button" :style="buttonStyle">
    <slot>
    </slot>
    
</div>
    
</template>

<script>
export default {
    props: ['color'],
    computed:{
        buttonStyle(){
            return{
                'background-color': this.color,
            }
        }
    },
    
    name: 'Button',
}
</script>