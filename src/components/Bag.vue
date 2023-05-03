<template>
  <div class="check-bag ">
    <div class="bag-title">
      <h3>Bag</h3>
    </div>
    <div class="bag-items">
      <!-- Aquí irán los productos añadidos -->
    </div>
    <div class="view-bag">
      <button>
        <img src="../assets/icono6.png" alt="Icono 6">
        <span>View Bag</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBagItems",
};
</script>

<style scoped>
.check-bag {
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: -1px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  
  padding: 20px;
}

.bag-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.view-bag {
  margin-top: auto;
}

.view-bag button {
  display: flex;
  align-items: center;
  background-color: black;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.view-bag button img {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}

.view-bag button:hover {
  background-color: #3e8e41;
}
</style>
