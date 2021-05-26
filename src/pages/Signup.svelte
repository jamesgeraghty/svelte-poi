<script lang="ts">
    import image2 from "/src/assets/image2.jpg";
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import SignupForm from "../components/SignupForm.svelte"

    title.set("Svelte Point of Interests");
    subTitle.set("Please Sign up");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="800" src="{image2}" alt="Kilcash">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Fill in your details below</h3>
            <SignupForm />
        </div>
    </div>
</div>
