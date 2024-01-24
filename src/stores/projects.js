import { ref, computed, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([])

  const activeProject = ref(0)

  const activeProjectInfo = computed(() => {
    return projects.value[activeProject.value]
  })

  const setProjects = payload => {
    projects.value = payload
  }
  const setActiveProject = val => {
    activeProject.value = val
  }

  return { projects, activeProject, activeProjectInfo, setActiveProject, setProjects }
})