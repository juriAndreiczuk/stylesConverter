<script setup>
import ProjectsList from './components/projects/ProjectsList.vue'
import ProjectsInfo from './components/projects/ProjectsInfo.vue'
import StructureSection from './components/structure/StructureSection.vue'
import ConverterSection from './components/converter/ConverterSection.vue'
import LoginForm from './components/login/LoginForm.vue'
import { useAutentification } from './use/autentification/autentification'
import { useAuthStore } from './stores/auth'  
const { logout } = useAutentification()

const authStore = useAuthStore()

</script>

<template>
  <LoginForm  v-if="!authStore.user.auth" />
  <main v-else class="bg-slate-900 font-bold">
    <div class="container mx-auto">
      <div class="w-full bg-slate-500 flex justify-center items-center">
        <button class="m-4 text-sm text-cyan-50" @click="logout">logout</button>
      </div>
      <div class="flex w-full">
        <div class="w-1/5 relative">
          <ProjectsList />
        </div>
        <section class="w-4/5">
          <ProjectsInfo />
          <StructureSection />
          <ConverterSection />
        </section>
      </div>
    </div>
  </main>
</template>