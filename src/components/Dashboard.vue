<template>
  <div class="dashboard">
    <div class="search">
      <input type="text" v-model="searchText" placeholder="Search Item...">
      <div class="suggestions" v-if="showSuggestions">
        <div class="suggestion" v-for="suggestion in suggestions" @click="selectSuggestion(suggestion)">
          {{ suggestion }}
        </div>
      </div>
    </div>
    <div class="items">
      <div class="grid grid-cols-4 gap-4">
        <div class="item cursor-pointer rounded-lg bg-gray-200" v-for="(item, index) in filteredItems" :key="index">
          <img :src="item.image" alt="Product Image" class="object-contain">
          <div class="details p-4">
            <div class="name">{{ item.name }}</div>
            <div class="price flex items-center justify-between mt-2">
              <div class="text-black font-bold">{{ 's/' + item.price }}</div>
              <button class="bg-black text-white flex items-center justify-center rounded-full w-20 h-10">
                <img src="../assets/icono8.png" alt="Add to cart" class="w-6 h-5">
                <span class="ml-2">Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      searchText: "",
      suggestions: ["Apple Watch", "Samsung S21", "Macbook Pro"],
      items: []
    };
  },
  created() {
    axios.get("http://localhost:3000/products").then(response => {
      this.items = response.data.filter(item => item.category === "laptop");
    });
  },
  computed: {
    showSuggestions() {
      return this.searchText && this.suggestions.length > 0;
    },
    filteredItems() {
      if (this.searchText) {
        return this.items.filter(item => {
          return item.name.toLowerCase().includes(this.searchText.toLowerCase());
        });
      } else {
        return this.items;
      }
    }
  },
  methods: {
    selectSuggestion(suggestion) {
      this.searchText = suggestion;
    }
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 10px;
  position: absolute;
  width: 953px;
  height: 2286px;
  left: 122px;
  top: 0px;
  overflow-y: hidden; /* Oculta el scroll en el contenedor de la sección de búsqueda */
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0px;
  width: 905px;
  height: 2129px;
  /* Muestra el scroll solo en el contenedor de la sección de items */
  overflow-y: scroll;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

.search {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.search input[type="text"] {
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 60%;
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
}



</style>
