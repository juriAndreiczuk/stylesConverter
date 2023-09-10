import { computed } from 'vue'
import { useConverterStore } from './../../stores/converter'

const useConverterOutput = () => {
  const converterStore = useConverterStore()
  const getKeyVal = (str) => {
    return ({
      key: str.slice(0, str.indexOf(':')),
      val: str.slice(str.indexOf(':') + 1)
    })
  } 
  const sizesScssMixin = computed(() => {
    return converterStore.sizeArray.map(item => {
      const { key, val } = getKeyVal(item)
      return `@include rwd-${key}(${val.slice(0, val.indexOf('px')).trim()});`
    })
  })

  const indentScssMixin = computed(() => {
    return converterStore.indentArray.map(item => {
      const { key, val } = getKeyVal(item)
      return `@include rwd-${key}(${val.replaceAll('px', ',').trim().slice(0, -1)});`
    })
  })

  const scss = computed(() => {
    return `
      ${sizesScssMixin.value.join('\n')}
      ${indentScssMixin.value.join('\n')}
    `
  })

  return { scss }
}

export default useConverterOutput
