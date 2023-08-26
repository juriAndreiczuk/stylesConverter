import { ref, watch } from 'vue'
import { useStructureStore } from './../../stores/structure'

const useStructureScss = () => {
  const structureStore = useStructureStore()
  const copyButtonText = ref('copy')
  const scss = ref('')

  const getScssStructure = (elements = structureStore.classesTree, indent = ' ') => {
    scss.value = ''
    if(elements && Array.isArray(elements.elements)) {
      scss.value += `${indent}.${elements.name} {\n`
      scss.value += elements.elements.reduce((acc, val) => acc + getScssStructure(val, `${indent} `), '')
      scss.value += `${indent}}\n`
    }
    return scss.value
  }

  const copyStructure =  () => {
    navigator.clipboard.writeText(scss.value)
    copyButtonText.value = 'copied !'
    setTimeout(() => {
      copyButtonText.value = 'copy'
    }, 2000)
  }

  watch(
    () => structureStore.classesTree,
    val => { getScssStructure(val) },
    { deep: true }
  )

  return { scss, copyButtonText, copyStructure }
}

export default useStructureScss