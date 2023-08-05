<script setup>
const props = defineProps({
  valuesTitle: {
    type: String,
    required: true
  },
  valuesList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="pr-20 w-1/2">
    <h4 class="font-bold text-1xl text-slate-200 pb-3 pt-5">{{props.valuesTitle}}</h4>
    <ul>
      <li
        class="py-1 font-normal text-sm text-slate-50"
        v-for="item of props.valuesList"
        :key="item.name"
      >
        {{ item.name }} : {{ item.value }}
      </li>
    </ul>
  </div>
</template>
