<script setup>
  import useStructureScss from '../../use/structure/structureScss'
  const { copyStructure, copyButtonText, scss } = useStructureScss()
</script>

<template>
  <div>
    <div class="flex justify-between align-middle w-full relative pb-1">
      <h2 class="font-bold text-2xl text-slate-200">SCSS structure</h2>
      <button
        :disabled="scss === ''"
        @click="copyStructure()"
        class="bg-cyan-900 px-3 text-1xl text-slate-100"
        :class="{'opacity-50' : scss === ''}"
      >
        {{ copyButtonText }}
      </button>
    </div>
    <pre class="block overflow-auto h-72 w-full text-1xl py-3 px-5 border-2 text-slate-200 bg-slate-800 border-cyan-100"
      >{{ scss }}</pre
    >
  </div>
</template>