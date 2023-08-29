<script setup>
import { useProjectsStore } from './../stores/projects'

const projectsStore = useProjectsStore()
</script>

<template>
  <aside class="bg-cyan-900 px-4 py-7 min-h-screen fixed w-[240px] z-10">
    <h2 class="font-bold pb-5 text-3xl text-stone-50">Projects:</h2>
    <ul>
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
