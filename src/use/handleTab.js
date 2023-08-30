import { ref, nextTick } from 'vue'

const useHandleTab = () => {
  const textArea = ref(null)
  const codeValue = ref('')

  const handleTab = async () => {
    const start = textArea.value.selectionStart
    const end = textArea.value.selectionEnd
    const spacesAmount = 4
    codeValue.value = `${codeValue.value.substring(0, start)}${' '.repeat(spacesAmount)}${codeValue.value.substring(end)}`

    await nextTick()
    textArea.value.selectionStart = start + spacesAmount
    textArea.value.selectionEnd = start + spacesAmount
  }

  return {
    textArea, codeValue, handleTab
  }
}

export default useHandleTab