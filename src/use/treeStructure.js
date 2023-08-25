import { computed } from 'vue'
import { useCodeStore } from '../stores/code'

const useTreeStructure = () => {
  const codeStore = useCodeStore()
  
  const getHtml = computed(() => {
    const htmlContainer = document.createElement('div')
    htmlContainer.innerHTML = codeStore.codeValue
    htmlContainer.classList.add('html')
    return htmlContainer
  })

  const processElement = element => ({
    name: element.classList.value,
    elements: Array.from(element.children).map(processElement) 
  })

  const getClassesTree = val => {
    codeStore.setCodeValue(val)
    codeStore.resetClasses()
    const rootClass = processElement(getHtml.value)
    codeStore.fillClasses(rootClass)
  }

  return { getClassesTree }
}

export default useTreeStructure
