<script setup>
  import { useAutentification } from './../../use/autentification/autentification'
  
  const { email, password, name, login, registration } = useAutentification()
</script>

<template>
  <div class="w-full h-[100vh] bg-slate-500 px-5 pt-10">
    <h1 class="text-xl font-sans mb-5">Autentification</h1>
    <form>
      <div>
        <p class="text-xs mb-1 text-white">email</p>
        <input class="mb-3 block" type="email" v-model="email">
        <p class="text-xs mb-1 text-white">name</p>
        <input class="mb-3 block" type="text" v-model="name">
        <p class="text-xs mb-1 text-white">password</p>
        <input class="mb-3 block" type="password" v-model="password">
      </div>
      <button class="text-sm mx-3 border px-2 py-1" @click.prevent="login">Login</button>
      <button class="text-sm mx-3 border px-2 py-1" @click.prevent="registration">registration</button>
    </form>
  </div>
</template>