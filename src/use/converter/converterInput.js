import { useConverterStore } from './../../stores/converter'
import { computed, ref } from 'vue'

const useConverterInput = () => {
  const converterStore = useConverterStore()

  const inputCode = ref(``)

  const inputArray = computed(() => inputCode.value
    .replace(/\n/g, '')
    .split(';')
    .map(str => str.trim())
    .filter(str => str !== '')
  )

  const convertToScss = () => {
    converterStore.setInputVariables(inputArray.value)
  }

  return { inputCode, convertToScss }
}

export default useConverterInput