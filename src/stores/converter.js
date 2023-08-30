import { defineStore } from 'pinia'
import { useProjectsStore } from './projects'
import { computed, ref } from 'vue'

export const useConverterStore = defineStore('converter', () => {
  const projectStore = useProjectsStore()
  const inputVariables = ref([]);

  const setInputVariables = val => {
    inputVariables.value = val.map(str => {
      const strName = str.slice(0, str.indexOf(':')).trim()
      const strVal = str.slice(str.indexOf(':') + 1).trim()
      const { colors, fonts } = projectStore.activeProjectInfo
      const values = [...colors, ...fonts]
      const index = values.findIndex(c => strVal === c.value)
      return index !== -1 ? `${strName}: ${values[index].name}` : `${strName}: ${strVal}`
    })
  }

  const getValues = values => 
    inputVariables.value
      .filter(item => values.find(val => val === item.slice(0, item.indexOf(':'))))

  const textArray = computed(() => getValues(['font-size', 'font-family', 'color', 'line-height']))
  const indentArray = computed(() => getValues(['padding', 'margin']))
  const sizeArray = computed(() => getValues(['width', 'height']))

  return { setInputVariables, textArray, indentArray, sizeArray }
})
