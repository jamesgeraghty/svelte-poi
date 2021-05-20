import axios from "axios";
import {user} from "../stores";

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
      if (response.data.success) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      _id: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
  }

  async addPoi(poi, text, method,latitude, longitude, name, category ) {
    try {
      const newPois = {
        poi: poi,
        text: text,
        method: method,
        latitude:latitude,
        longitude: longitude,
        name: name,
        category: category,

      };
      this.poiList.push(addPoi);
      const response = await axios.post(this.baseUrl + "/api/pois/" + newPois._id );
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

}
