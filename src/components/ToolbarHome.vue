<template>
  <div class="toolbar">
    <div class="toolbar-top">
      <button class="toolbar-button">
        <img src="../assets/icono1.png" alt="Icono 1">
      </button>
      <button class="toolbar-button">
        <img src="../assets/icono2.png" alt="Icono 2">
      </button>
      <button class="toolbar-button">
        <img src="../assets/icono3.png" alt="Icono 3">
      </button>
      <button class="toolbar-button">
        <img src="../assets/icono4.png" alt="Icono 4">
      </button>
    </div>
    <div class="toolbar-bottom">
      <button class="toolbar-button">
        <img src="../assets/icono5.png" alt="Icono 5">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolbarHome"
};
</script>

<style scoped>
.toolbar {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  width: 50px;
}
.toolbar-top {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.toolbar-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
}


.toolbar-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
  border: none;
  background-color: transparent;
}

.toolbar-button:hover {
  cursor: pointer;
  background-color: #e5e5e5;
}

.toolbar-button img {
  height: 40px;
  width: 40px;
}
</style>
