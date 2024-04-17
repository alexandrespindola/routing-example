<template>
    <div>
        <h1 class="p-10">Blog section</h1>
        <!-- <ul>
            <li><router-link :to="{ name: 'post', params: { id: 1 } }">First post</router-link></li>
            <li><router-link :to="{ name: 'post', params: { id: 2 } }">Second post</router-link></li>
            <li><router-link :to="{ name: 'post', params: { id: 3 } }">Third post</router-link></li>
            <li><router-link :to="{ name: 'post', params: { id: 4 } }">Fourth post</router-link></li>
        </ul> -->
        <div class="flex justify-center">
            <ul class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10">
                <li v-for="post in posts" :key="post.id" class="bg-white rounded-lg shadow-md p-5">
                    <router-link :to="{ name: 'post', params: { id: post.id } }">
                        <h2 class="text-xl font-bold mb-2">{{ capitalizeFirstLetter(post.title) }}</h2>
                    </router-link>
                    <!-- <p class="text-gray-700">{{ post.summary }}</p> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService'
import { onMounted } from 'vue'

const service = new PostService()
const posts = service.getPosts()

onMounted(async () => {
    await service.fetchAll()
})

const capitalizeFirstLetter = (str: string | undefined) => {
    if (!str) {
        return ''
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}

</script>

<style scoped lang="scss"></style>