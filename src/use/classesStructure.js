import { reactive, computed, ref } from 'vue'

const useClassesStructure = () => {
  const classes = reactive({})
  const codeValue = ref('')

  const getHtmlStructure = computed(() => {
    const htmlContainer = document.createElement('div')
    htmlContainer.innerHTML = codeValue.value
    htmlContainer.classList.add('html')
    return htmlContainer
  })

  const processElement = element => ({
    name: element.classList.value,
    elements: Array.from(element.children).map(processElement) 
  })

  const getAllClasses = val => {
    codeValue.value = val
    Object.keys(classes).forEach(key => delete classes[key])
    const rootClass = processElement(getHtmlStructure.value)
    
    if (!classes[rootClass.name] && rootClass) {
      classes[rootClass.name] = { name: rootClass.name, elements: [] }
    }
    classes[rootClass.name].elements.push(rootClass.elements)
  }

  return { getAllClasses, classes }
}

export default useClassesStructure
