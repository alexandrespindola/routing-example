import { ref, Ref } from 'vue'
import IPost from '@/interfaces/IPost'

export default class PostService {
    private posts: Ref<Array<IPost>>

    constructor() {
        this.posts = ref<Array<IPost>>([])
    }

    getPosts (): Ref<Array<IPost>> {
        return this.posts
    }

    async fetchAll(): Promise<IPost[]> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const data = await response.json()
            this.posts.value = data
            return this.posts.value
        } catch(error) {
            console.log(error)
            return []
        }
    }
}