<template>
    <div class="flex justify-center flex-row">
        <h1 v-if="loading">Loading...</h1>
        <div v-else-if="post" class="container flex flex-col justify-center items-center">
            <h1>{{ capitalizeFirstLetter(post.title) }}</h1>
            <p>{{ capitalizeFirstLetter(post.body) }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import PostService from '@/services/PostService'
import IPost from '@/interfaces/IPost'

const route = useRoute()
const postId = Number(route.params.id as string)
let post: IPost | null = null
let loading = ref(true)

const service = new PostService()

onMounted(async () => {
    const posts = await service.fetchAll()
    post = posts.find(p => p.id === postId) || null
    loading.value = false
})

const capitalizeFirstLetter = (str: string | undefined) => {
    if (!str) {
        return ''
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<style scoped lang="scss"></style>