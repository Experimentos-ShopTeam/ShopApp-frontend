<template>
  <div class="home-shop">
    <toolbar />
    <div class="main-content">
      <dashboard />
    </div>
    <CheckBagItems/>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
import Toolbar from "../components/ToolbarHome.vue";
import CheckBagItems from "@/components/CheckBagItems.vue";

export default {
  name: "HomeShop",
  components: {
    Dashboard,
    Toolbar,
    CheckBagItems,
  },
};
</script>
