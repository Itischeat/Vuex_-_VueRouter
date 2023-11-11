<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button',
}
</script>

<style scoped>
.btn {
    color: teal;
    background: none;
    border: 1px solid teal;
    padding: 15px
}
</style>