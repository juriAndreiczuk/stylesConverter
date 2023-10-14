import { computed } from 'vue'
import { useConverterStore } from './../../stores/converter'

const useConverterOutput = () => {
  const converterStore = useConverterStore()
  const getKeyVal = str => {
    const [key, val] = str.split(':').map((item) => item.trim())
    return { key, val }
  } 

  const textScssMixin = computed(() => {
    const allValues = converterStore.textArray.reduce((acc, item) => {
      const { key, val } = getKeyVal(item)
      acc[key] = val
      return acc
    }, {})

    if(JSON.stringify(allValues) === '{}') return ''

    const fontSize = allValues['font-size']?.slice(0, allValues['font-size'].indexOf('px')).trim() || '18'
    const color = allValues['color'] || '$main-color'
    const fontFamily = allValues['font-family'] || '$normal-font'
    const lineHeight = allValues['line-height'] || '1.5'

    return `@include page-text(${fontSize}, ${color}, ${fontFamily}, ${lineHeight});`
  })

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
      ${textScssMixin.value}
      ${sizesScssMixin.value.join('\n')}
      ${indentScssMixin.value.join('\n')}
    `
  })

  return { scss }
}

export default useConverterOutput
