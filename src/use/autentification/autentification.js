import { account } from './../../utils/appwrite'
import { ref } from 'vue'
import { useAuthStore } from './../../stores/auth'
import { v4 } from 'uuid'

export const useAutentification = () => {
  const authStore = useAuthStore()
  const email = ref('')
  const name = ref('')
  const password = ref('')
  
  const formReset = () => {
    email.value = ''
    name.value = ''
    password.value = ''
  }
 
  const login = async () => {
    await account.createEmailSession(email.value, password.value)
    const response  = account.get()
    if(response) {
      authStore.set({
        email: response.email,
        name: response.email,
        password: response.email,
        auth: true
      })
    }
    formReset()
  }

  const logout = async () => {
    await account.deleteSession('current')
    formReset()
    authStore.clear()
  }

  const registration = async () => {
    await account.create(v4(), email.value, password.value, name.value)
    await login()
  }

  return {
    email, name, password, login, logout, registration
  }
}

