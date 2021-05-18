<script>
  import CategoryList from "../components/CategoryList.svelte";
  import homer4 from "/src/assets/homer4.jpeg";
  import {navBar, mainBar, subTitle, title} from "../stores"

  title.set("Donation Services Inc.");
  subTitle.set("All Current Candidates");
  navBar.set({
    bar: mainBar
  });
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-1@m ">
    <img width="300" src="{homer4}" alt="homer">
  </div>
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <CategoryList/>
    </div>
  </div>
</div>
