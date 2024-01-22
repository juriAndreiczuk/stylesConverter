import { defineStore } from 'pinia'
import { computed, ref, onMounted } from 'vue'
import { account } from './../utils/appwrite'

export const useAuthStore = defineStore('auth', () => {
  const defaultUserState = {
    email: '',
    name: '',
    password: '',
    auth: false
  }

  const user = ref(defaultUserState)

  const isAuth = computed(() => user.value.auth)
  const clear = () => { user.value = defaultUserState }
  const set = payload => user.value = payload

  onMounted(async () => {
    try {
      const response = await account.get()
      set({
        email: response.email,
        name: response.email,
        password: response.email,
        auth: true
      })
    } catch(e) {
      console.info(e)
    }
  })

  return { user, isAuth, set, clear }
})