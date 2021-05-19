<script>
  import PoiList from "../components/PoiList.svelte";
 // import homer5 from "/src/assets/homer5.jpg";
  import {navBar, mainBar, subTitle, title} from "../stores"

  title.set("Donation Services Inc.");
  subTitle.set("Latest Donations");
  navBar.set({
    bar: mainBar
  });
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-4xlarge ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-4xlarge ">
      <PoiList/>
    </div>
  </div>

</div>
