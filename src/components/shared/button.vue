<template>

<div class="button">
    <slot>
    </slot>
    
</div>
    
</template>

<script>
export default {
    props: ['text'],
    name: 'Button',
}
</script>