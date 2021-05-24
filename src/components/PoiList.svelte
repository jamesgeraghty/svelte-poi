
<script>
  import {getContext, onMount} from 'svelte'
  import { PoiService } from "../services/poi-service";

  const poiService = getContext("PoiService");
  let poiList = [];

  let categoryList;
  onMount(async () => {
    categoryList = await poiService.getCategories()
  })

  onMount(async () => {
    poiList= await poiService.getPointsofinterest();
  });
</script>

<h3 class="uk-heading-divider">
  Point of Interest List </h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
    <th>Point of Interest</th>
    <th>Location</th>
    <th>Rating</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>User Name</th>
    <th>Categories</th>
    <th> Delete</th>
    <th> Update</th>
    </thead>
    <tbody class="uk-text-left">
      {#each poiList as pointofinterst}
        <tr>
          <td>{pointofinterst.poi}</td>
          <td>{pointofinterst.text}</td>
          <td> {pointofinterst.method} </td>
          <td>{pointofinterst.latitude}</td>
          <td>{pointofinterst.longitude}</td>
          <td> {pointofinterst.firstName}, {pointofinterst.lastName} </td>
          <td>{pointofinterst.category}</td>
          <td><i class="far fa-trash-alt fa-1x" ></i></td>
          <td><i class="far fa-edit fa-1x" style=></i></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
