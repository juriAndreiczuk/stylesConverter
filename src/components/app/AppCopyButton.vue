<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  textForCopy: {
    type: String,
    required: true
  }
})

const copyButtonText = ref('copy')

const copyStructure =  () => {
  navigator.clipboard.writeText(props.textForCopy)
  copyButtonText.value = 'copied !'
  setTimeout(() => {
    copyButtonText.value = 'copy'
  }, 2000)
}
</script>


<template>
<button
  :disabled="props.textForCopy === ''"
  @click="copyStructure()"
  class="bg-cyan-900 px-3 text-1xl text-slate-100"
  :class="{'opacity-50' : props.textForCopy === ''}"
>
  {{ copyButtonText }}
</button>
</template>
