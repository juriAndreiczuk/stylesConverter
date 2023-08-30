<script setup>
  import useCoverterInput from './../../use/converter/converterInput'

  const { inputCode, convertToScss } = useCoverterInput()
</script>

<template>
  <div>
    <h2 class="font-bold pb-1 text-2xl text-slate-200">Figma code</h2>
    <textarea
      v-model="inputCode"
      ref="textArea"
      class="h-72 w-full resize-none py-3 px-5 text-1xl border-2 text-slate-200 bg-slate-800 border-cyan-100 block"
    >
    </textarea>
    <div>
      <button
        @click="convertToScss"
        class="bg-cyan-900 p-3 text-1xl text-slate-100 mt-3"
      >
        Convert styles
      </button>
    </div>
  </div>
</template>