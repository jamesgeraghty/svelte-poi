<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Categories from "./pages/Categories.svelte";
  import Signup from "./pages/Signup.svelte"
  import Pois from "./pages/Pois.svelte";
  import Addpoi from "./pages/Addpoi.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("PoiService", new PoiService("http://laptop-burpbof6:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/signup" : Signup,
    "/categories": Categories,
    "/pois": Pois,
    "/addPoi": Addpoi,
    "/logout" : Main
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>
