<script setup>
import useCovcerterDivide from './../../use/converter/converterDivide'
const {inputCode, convertToScss} = useCovcerterDivide()
</script>

<template>
  <div class="px-5 py7">
    <div class="columns-2 pb-5">
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
          Convert styles</button>
        </div>
      </div>
      <div>
        <div class="flex justify-between align-middle w-full relative pb-1">
          <h2 class="font-bold text-2xl text-slate-200">SCSS code</h2>
          <button
            class="bg-cyan-900 px-3 text-1xl text-slate-100"
          >Copy</button>
        </div>
        <pre
          class="block overflow-auto h-72 w-full text-1xl py-3 px-5 border-2 text-slate-200 bg-slate-800 border-cyan-100"
          ></pre
        >
      </div>
    </div>
  </div>
</template>
