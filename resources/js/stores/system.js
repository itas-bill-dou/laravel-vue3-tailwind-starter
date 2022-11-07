import axios from 'axios'
import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
    state: () => ({ name: 'Bob' }),
    getters: {
        getName: state => `Store Name: ${state.name}`
    },
    actions: {
        async fetchSystem() {
            try {
                return await axios.get('/test')
            } catch (error) {
                console.log(error)
            }
        }
    }
})
