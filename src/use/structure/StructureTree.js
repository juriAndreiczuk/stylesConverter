import { computed } from 'vue'
import { useStructureStore } from './../../stores/structure'

const useStructureTree = () => {
  const structureStore = useStructureStore()
  
  const getHtml = computed(() => {
    const htmlContainer = document.createElement('div')
    htmlContainer.innerHTML = structureStore.codeValue
    htmlContainer.classList.add('html')
    return htmlContainer
  })

  const processElement = element => ({
    name: element.classList.value,
    elements: Array.from(element.children).map(processElement) 
  })

  const getClassesTree = val => {
    structureStore.setCodeValue(val)
    structureStore.resetClasses()
    const rootClass = processElement(getHtml.value)
    structureStore.fillClasses(rootClass)
  }

  return { getClassesTree }
}

export default useStructureTree
