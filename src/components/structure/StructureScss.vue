<script setup>
  import { useStructureStore } from '../../stores/structure'
  const structureStore = useStructureStore()

  const getScssStructure = (elements, indent = ' ') => {
    let scss = ''
    if(elements && Array.isArray(elements.elements)) {
      scss += `${indent}.${elements.name} {\n`
      scss += elements.elements.reduce((acc, val) => acc + getScssStructure(val, `${indent} `), '')
      scss += `${indent}}\n`
    }
    return scss
  }
</script>

<template>
  <div>
    <div class="flex justify-between align-middle w-full relative pb-1">
      <h2 class="font-bold text-2xl text-slate-200">SCSS structure</h2>
      <button class="bg-cyan-900 px-3 text-1xl text-slate-100">copy</button>
    </div>
    <pre class="block overflow-auto h-72 w-full text-1xl py-3 px-5 border-2 text-slate-200 bg-slate-800 border-cyan-100"
      >{{ getScssStructure(structureStore.classesTree) }}</pre
    >
  </div>
</template>