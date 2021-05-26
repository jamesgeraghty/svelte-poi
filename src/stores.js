import { writable } from "svelte/store";

export const welcomeBar = [
  {
    title: "Sign Up",
    icon: "fas fa-user-cog fa-3x",
    colour: "color:rgb(63, 160, 155)",
    link: "/#/signup",
  },
  {
    title: "Log In",
    icon: "fas fa-sign-in-alt fa-3x",
    colour: "color:green",
    link: "/#/login",
  },
];

export const mainBar = [

  {
    title: "Add POI",
    icon: "fas fa-map-marked fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/addPoi",
  },
    {
  title: "Points of Interest",
  icon: "far fa-list-alt fa-3x",
  colour: "color:rgb(153, 196, 74)",
  link: "/#/pois",
}, {
  title: "Categories",
  icon: "fas fa-clipboard-list fa-3x",
  colour: "color:rgb(63, 122, 139)",
  link: "/#/categories",
},  {
    title: "Settings",
    icon: "fas fa-sliders-h fa-3x",
    colour: "color:rgb(14, 168, 160)",
    link: "/#/settings",
  }, {
  title: "Logout",
  icon: "fas fa-sign-out-alt fa-3x",
  colour: "color:rgb(156, 70, 128)",
  link: "/#/logout",

}];

export const navBar = writable({
  bar: [],
});
export const title = writable("");
export const subTitle = writable("");

export const user = writable({

  firstName: "",
  lastName: "",
  email: "",
  password: "",
 // token: "",
  _id:""
});