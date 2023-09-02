<script setup>
  import useStructureScss from '../../use/structure/structureScss'
  import AppCopyButton from './../app/AppCopyButton.vue'
  const { scss } = useStructureScss()
</script>

<template>
  <div>
    <div class="flex justify-between align-middle w-full relative pb-1">
      <h2 class="font-bold text-2xl text-slate-200">SCSS structure</h2>
      <AppCopyButton
        :text-for-copy="scss"
      />
    </div>
    <pre class="block overflow-auto h-72 w-full text-1xl py-3 px-5 border-2 text-slate-200 bg-slate-800 border-cyan-100"
      >{{ scss }}</pre
    >
  </div>
</template>