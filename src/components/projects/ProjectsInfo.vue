<script setup>
import { useProjectsStore } from '../../stores/projects'
import ProjectsValues from './ProjectsValues.vue'

const projectsStore = useProjectsStore()
</script>

<template>
  <div class="px-5 py-7" v-if="projectsStore.projects.length">
    <header>
      <h2 class="font-bold text-2xl text-slate-200">
        Current project:
        <span class="text-3xl pl-3 capitalize underline">
          {{ projectsStore.activeProjectInfo.name }}
        </span>
      </h2>
    </header>
    <div class="py-2 my-4 border-cyan-100 min-h-full border-t-2">
      <div class="w-2/3 pt-3 min-h-full">
        <h3 class="font-bold text-2xl text-slate-200">Project info:</h3>
        <div class="flex border-cyan-100">
          <ProjectsValues
            :values-title="'Colors:'"
            :values-list="projectsStore.activeProjectInfo.colors"
          />
          <ProjectsValues
            :values-title="'Fonts:'"
            :values-list="projectsStore.activeProjectInfo.fonts"
          />
        </div>
      </div>
    </div>
  </div>
</template>
