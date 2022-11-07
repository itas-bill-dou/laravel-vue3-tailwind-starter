<script setup>
import img from '@src/images/home.webp'
import { useSystemStore } from '@/stores/system'
import { onMounted, reactive } from 'vue'
const systemStore = useSystemStore()

let system = reactive({
    name: '',
    age: null
})

onMounted(async () => {
    const res = await systemStore.fetchSystem()
    if (res.status === 200) {
        system = Object.assign(system, res.data)
    }
})
</script>
<template>
    <div class="flex flex-col items-center">
        <img class="w-1/2" :src="img" alt="happy-guy" />
        <span class="text-3xl font-semibold">Homepage</span>
        <span class="text-3xl font-semibold text-blue-500">
            Name: {{ system.name }}
        </span>
        <span class="text-3xl font-semibold text-blue-500">
            Age: {{ system.age }}
        </span>
    </div>
</template>
