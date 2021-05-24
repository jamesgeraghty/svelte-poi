import axios from "axios";
import {user} from "../stores";

export class PoiService {
  categoryList = [];
  poiList = [];
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (localStorage.pois) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.pois);
    }
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
        user.set({
          email: email,
          token: response.data.token
        });
        localStorage.pois = JSON.stringify(response.data.token);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      const response = await axios.post(this.baseUrl + "/api/users", userDetails);
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  };


  async logout() {
    user.set({
      email: "",
      token: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.pois = null;
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
