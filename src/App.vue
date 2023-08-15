<script setup>
import ProjectsList from './components/ProjectsList.vue'
import ProjectInfo from './components/ProjectInfo.vue'
import SectionStructure from './components/SectionStructure.vue'
</script>

<template>
  <main class="bg-slate-900 font-bold">
    <div class="container mx-auto">
      <div class="flex w-full">
        <div class="w-1/5">
          <ProjectsList />
        </div>
        <section class="w-4/5">
          <ProjectInfo />
          <SectionStructure />
        </section>
      </div>
    </div>
  </main>
</template>