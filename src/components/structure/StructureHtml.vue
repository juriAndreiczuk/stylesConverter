<script setup>
  import useTreeStructure from '../../use/treeStructure'
  import useHandleTab from './../../use/handleTab'

  const { getClassesTree } = useTreeStructure()
  const { textArea, codeValue, handleTab } = useHandleTab()
</script>
<template>
  <div>
    <h2 class="font-bold pb-1 text-2xl text-slate-200">HTML structure</h2>
    <textarea
      ref="textArea"
      @keydown.tab.prevent="handleTab"
      v-model="codeValue"
      class="h-72 w-full resize-none py-3 px-5 text-1xl border-2 text-slate-200 bg-slate-800 border-cyan-100 block"
    >
    </textarea>
    <div>
      <button
        class="bg-cyan-900 p-3 text-1xl text-slate-100 mt-3"
        @click="getClassesTree(codeValue)"
      >
        Generate structure
      </button>
    </div>
  </div>
</template>