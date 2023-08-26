import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useStructureStore = defineStore('structure', () => {
  const classes = reactive({})
  const codeValue = ref('')
  
  const setCodeValue = val => codeValue.value = val

  const classesTree = computed(() => {
    let result = []
    if(classes.html) {
      result = classes.html.elements = classes.html.elements[0][0]
    }
    return result
  })

  const resetClasses = () => {
    Object.keys(classes).forEach(key => delete classes[key])
  }

  const fillClasses = (rootClass) => {
    if (!classes[rootClass.name] && rootClass) {
      classes[rootClass.name] = { name: rootClass.name, elements: [] }
    }
    classes[rootClass.name].elements.push(rootClass.elements)
  }

  return {
    classes, resetClasses, fillClasses, classesTree, setCodeValue, codeValue
  }
})