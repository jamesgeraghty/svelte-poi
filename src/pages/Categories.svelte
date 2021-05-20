<script>
  import CategoryList from "../components/CategoryList.svelte";
  import image2 from "/src/assets/image2.jpg";
  import {navBar, mainBar, subTitle, title} from "../stores"

  title.set("Kilcash Points of Interest");
  subTitle.set("All Current Categories in Kilcash");
  navBar.set({
    bar: mainBar
  });
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <img width="1000" src="{image2}" alt="homer">
  </div>
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <CategoryList/>
    </div>
  </div>
</div>
