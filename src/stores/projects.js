import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([
    {
      id: 1,
      name: 'test',
      colors: [
        {
          name: '$main-color',
          value: '#ddd'
        },
        {
          name: '$add-color',
          value: '#000'
        }
      ],
      fonts: [
        {
          name: '$normal-font',
          value: 'Arial'
        },
        {
          name: '$title-font',
          value: 'sans-serif'
        }
      ],
    },
    {
      id: 2,
      name: 'another test',
      colors: [
        {
          name: '$main-color',
          value: '#fff'
        },
        {
          name: '$add-color',
          value: '#333'
        }
      ],
      fonts: [
        {
          name: '$normal-font',
          value: 'sans-serif'
        },
        {
          name: '$title-font',
          value: 'serif'
        }
      ],
    }
  ])

  const activeProject = ref(0)

  const activeProjectInfo = computed(() => {
    return projects.value[activeProject.value]
  })
  const setActiveProject = val => {
    activeProject.value = val
  }

  return {
    projects,
    activeProject,
    activeProjectInfo,
    setActiveProject
  }
})