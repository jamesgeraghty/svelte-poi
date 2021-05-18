<script>
  import {title, subTitle, navBar, welcomeBar} from "../stores"
  import homer2 from "/src/assets/homer2.png";
  title.set("Donation Services Inc");
  subTitle.set("Sign up or Log in");

  navBar.set({
    bar: welcomeBar
  });
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-2@m">
    <img width="200" src="{homer2}" alt="homer">
    <p> Lets do this thing </p>
  </div>
  <div class="uk-width-2xlarge ">
    <div class="uk-width-2xlarge">
      <h3 class="uk-heading-small uk-flex"> Help Me Run Springfield  </h3>
      <p> Bitcoins accepted! </p>
    </div>
  </div>
</div>

