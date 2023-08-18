<script setup>
import useHandleTab from './../use/handleTab'
import useClassesStructure from './../use/classesStructure'
const { textArea, codeValue, handleTab } = useHandleTab()
const { getAllClasses, classes } = useClassesStructure()
</script>

<template>
  <div class="px-5 py7">
    <div class="columns-2">
      <div>
        <pre class="font-bold text-slate-200">{{ classes }}</pre>
        
        <textarea 
          ref="textArea"
          @keydown.tab.prevent="handleTab"
          v-model="codeValue"
          class="h-72 w-full resize-none py-3 px-5 text-1xl border-2 text-slate-200 bg-slate-800 border-cyan-100 block"
        >
        </textarea>
      </div>
      <div>
        <h2 class="font-bold text-2xl text-slate-200">SCSS structure</h2>
        <code class="block h-72 w-full text-1xl py-3 px-5 border-2 text-slate-200 bg-slate-800 border-cyan-100"></code>
        <button @click="getAllClasses(codeValue)">Generate structure</button>
      </div>
    </div>
  </div>  
</template>