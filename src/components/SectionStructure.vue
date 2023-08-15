<script setup>
import useHandleTab from './../use/handleTab'
import { ref } from 'vue'

const { textArea, codeValue, handleTab } = useHandleTab()
const htmlContainer = ref(document.createElement('div'))

const createHtmlStructure = () => {
  htmlContainer.value.innerHTML = codeValue.value
  console.log(htmlContainer.value)
}

</script>

<template>
  <div class="px-5 py7">
    <div class="columns-2">
      <div>
        <h2 class="font-bold text-2xl text-slate-200">HTML code</h2>
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
        <button @click="createHtmlStructure()">Generate structure</button>
      </div>
    </div>
  </div>  
</template>