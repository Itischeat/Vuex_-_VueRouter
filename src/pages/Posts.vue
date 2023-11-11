<template>
    <my-header></my-header>

    <div class="posts" v-for="post in posts">
        <div class="caption">{{ post.title }}</div>
        <div class="paragph">{{ post.body }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: 'Заголовок', body: 'Текст бывает разный' },
                { id: 2, title: 'Заголовок2', body: 'Текст бывает разный2' }
            ]
        }
    }
}
</script>

<style scoped>
.posts {
    width: 80%;
    margin: 20px;
    padding: 20px;
    border: 2px solid teal;
}

.posts>* {
    padding: 5px;
}
</style>