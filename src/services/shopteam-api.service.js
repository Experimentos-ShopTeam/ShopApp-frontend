import axios from 'axios';

const baseURL = 'http://localhost:3000/products'; // Aquí debes poner la ruta correcta a tu archivo laptops.json

export default class LaptopsService {
  static async getAllLaptops() {
    const response = await axios.get(baseURL);
    return response.data;
  }

  static async createLaptop(laptop) {
    const response = await axios.post(baseURL, laptop);
    return response.data;
  }

  static async updateLaptop(id, laptop) {
    const response = await axios.patch(`${baseURL}/${id}`, laptop);
    return response.data;
  }

  static async deleteLaptop(id) {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
  }
}
