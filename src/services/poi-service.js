import axios from "axios";

export class PoiService {
  categoryList = [];
  poiList = [];
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getCategories() {
    try {
      const response = await axios.get(this.baseUrl + "/api/categories")
      this.categoryList =  response.data;
      return this.categoryList;
    } catch (error) {
      return [];
    }
  }

  async getPointsofinterest() {
    try {
      const response = await axios.get(this.baseUrl + "/api/poi")
      this.poiList = response.data;
      return this.poiList;
    } catch (error) {
      return [];
    }
  }

  async getUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      this.userList = response.data;
      return this.userList;
    } catch (error) {
      return [];
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }
  async addPoi(poi, text, category) {
    try {
      const newPois = {
        poi: poi,
        text: text,
        category: category,
      };
      const response = await axios.post(this.baseUrl + "/api/categories/" + category._id + "/poi", newPois);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

}
