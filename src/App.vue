<script setup>
import { RouterLink, RouterView } from "vue-router";
import Bag from "./components/Bag.vue";
import ToolbarHome from "@/components/ToolbarHome.vue";
</script>

<template>
  <div class="grid grid-cols-6 bg-[#ededed]">
    <ToolbarHome />

    <RouterView class="col-span-4" />

    <div class="flex justify-end">
      <Bag />
    </div>
  </div>
</template>
