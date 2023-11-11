<template>
    <div class="header">
        <router-link to="/Posts"><my-button>Posts</my-button></router-link>
        <my-button>Form</my-button>
    </div>
</template>

<script>
export default {
    name: 'my-header',
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1270px;
    margin: 0 auto;
    padding: 15px;
}
</style>