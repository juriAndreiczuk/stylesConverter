<script setup>
import ProjectsList from './components/projects/ProjectsList.vue'
import ProjectsInfo from './components/projects/ProjectsInfo.vue'
import StructureSection from './components/structure/StructureSection.vue'
import ConverterSection from './components/converter/ConverterSection.vue'
</script>

<template>
  <main class="bg-slate-900 font-bold">
    <div class="container mx-auto">
      <div class="flex w-full">
        <div class="w-1/5 relative">
          <ProjectsList />
        </div>
        <section class="w-4/5">
          <ProjectsInfo />
          <StructureSection />
          <ConverterSection />
        </section>
      </div>
    </div>
  </main>
</template>