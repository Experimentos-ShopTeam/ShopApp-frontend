<template>
  <div class="item-view">
    <div class="back-button">
      <img src="../assets/icono7.png" alt="Icono 7">
      <button @click="$router.back()">Back</button>
    </div>
    <div class="item-details">
      <div class="item-image">
        <img :src="item.image" :alt="item.name">
      </div>
      <div class="item-info">
        <h2 class="item-name">{{ item.name }}</h2>
        <div class="item-rating">
          <span v-for="n in 5" :key="n" class="star" :class="{ 'filled': n <= item.rating }">&#9733;</span>
        </div>
        <p class="item-price">{{ item.price }}</p>
        <p class="item-description">{{ item.shortDescription }}</p>
        <hr>
        <h3 class="item-description-title">Description</h3>
        <p class="item-description-full">{{ item.description }}</p>
      </div>
      <div class="item-price">
        <span class="price">$499</span>
        <button class="add-to-bag">
          <img src="../assets/icono8.png" alt="Add to Bag Icon">
          Add to Bag
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.item-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-button {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.back-button img {
  height: 30px;
  width: 30px;
  margin-right: 10px;
}

.back-button button {
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.item-details {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 900px;
}

.item-image {
  width: 400px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}

.item-name {
  font-size: 28px;
  margin: 0;
}

.item-rating {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.star {
  font-size: 20px;
  color: #ccc;
  margin-right: 5px;
}

.star.filled {
  color: gold;
}

.item-price {
  font-size: 24px;
  margin: 0;
}

.item-description {
  font-size: 18px;
  margin: 10px 0;
}

.item-description-title {
  font-size: 24px;
  margin: 20px 0 10px 0;
}

.item-description-full {
  font-size: 18px;
  margin: 0;
}
.add-to-bag {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  border-radius: 20px;
  height: 40px;
  width: 200px;
  margin-top: 20px;
}

.add-to-bag img {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}

</style>
