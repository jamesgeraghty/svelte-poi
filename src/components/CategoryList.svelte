<script>
  import {onMount, getContext} from 'svelte'
  import { PoiService } from "../services/poi-service";
  const poiService = getContext("PoiService");

  let categoryList;
  onMount(async () => {
    categoryList = await poiService.getCategories()
  })
</script>

<h3 class="uk-heading-divider">
  Category List </h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
      <th>
       Name
      </th>
    </thead>
    <tbody class="uk-text-left">
      {#if categoryList}
        {#each categoryList as category}
          <tr>
            <td>{category.name}</td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
