
<script>
  import {getContext, onMount} from 'svelte'

  const poiService = getContext("PoiService");
  let poiList = [];

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
    <th>Difficulty</th>
    <th>Weather</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>User Name</th>
    <th>Categories</th>
    <th>Gallery</th>
    <th> Delete</th>
    <th> Update</th>
    </thead>
    <tbody class="uk-text-left">
      {#each poiList as pointofinterst}
        <tr>
          <td>{pointofinterst.poi}</td>
          <td>{pointofinterst.text}</td>
          <td> {pointofinterst.method} </td>
          <td>{pointofinterst.latitude}, {pointofinterst.longitude}</td>
          <td> {pointofinterst.firstName}, {pointofinterst.lastName} </td>
          <td>{pointofinterst.category.name}</td>
          <td><i class="fas fa-trash fa-2x" style="color:#653DC2"></i></td>
          <td><i class="fas fa-recycle fa-2x" style="color:#653DC2"></i></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
