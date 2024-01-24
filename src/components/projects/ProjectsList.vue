<script setup>
import { onMounted, watch } from 'vue'
import { useProjectsStore } from '../../stores/projects'
import { useGetProjectsData } from '../../use/projects/getProjectsData'
import { useAuthStore } from './../../stores/auth'
const projectsStore = useProjectsStore()
const authStore = useAuthStore()

watch(authStore.isAuth, val => {
  if(!val) return false
  useGetProjectsData()
})
onMounted(() => {
  if(!authStore.isAuth) return false
  useGetProjectsData()
})

</script>

<template>
  <aside class="bg-cyan-900 px-4 py-7 min-h-screen fixed w-[240px] z-10">
    <h2 class="font-bold pb-5 text-3xl text-stone-50">Projects:</h2>
    <ul v-if="projectsStore.projects.length">
      <li
        class="pb-2" 
        v-for="(project, index) of projectsStore.projects" 
        :key="project.id"
      >
        <button
          class="capitalize"
          :class="projectsStore.activeProject == index ? 'text-slate-50' : 'text-slate-500'"
          @click="projectsStore.setActiveProject(index)"
        >
          {{ project.name }}
        </button>
      </li>
    </ul>
  </aside>
</template>
