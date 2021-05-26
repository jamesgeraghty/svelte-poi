<script>
  import {title, subTitle, navBar, welcomeBar} from "../stores"
  import kilcash from "/src/assets/kilcash.jpg";
  title.set("Svelte Point of Interests");
  subTitle.set("Sign up or Log in");

  navBar.set({
    bar: welcomeBar
  });
</script>


<div class="uk-container uk-margin">
  <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>

    <div class="uk-width-expand@m">
      <h1 class="uk-heading-small">Welcome to the village of Kilcash</h1>
      <p>There is lots to do and see, please check in and if there are any categories not listed please feel free to add as many as you like </p>
      <br>
    </div>

  </div>
  <div class="uk-position-relative" uk-slideshow="animation: fade">

    <div class="uk-width-1-1@m">
      <a href="/"> <img src="{kilcash}" width="2000" alt="img"/> </a>
    </div>

    <div class="uk-position-bottom-center uk-position-small">
      <ul class="uk-thumbnav">
        <li uk-slideshow-item="0"><a href="#"><img src="images/20210221_143443.jpg" width="100" alt=""></a></li>
        <li uk-slideshow-item="1"><a href="#"><img src="images/20210221_145547.jpg" width="100" alt=""></a></li>
        <li uk-slideshow-item="2"><a href="#"><img src="images/20210221_145606.jpg" width="100" alt=""></a></li>
      </ul>
    </div>

  </div>

</div>
