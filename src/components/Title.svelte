<script>
  import kilcash from "/src/assets/kilcash.jpg"
  import {title, subTitle, user} from "../stores.js"

</script>

<div class="uk-width-1-1@m  uk-card uk-card-default uk-padding-small uk-visible@m">
  <div class="uk-grid">
    <div class="uk-width-1-6@m">
      <a href="/"> <img src="{kilcash}" width="120" alt="img"/> </a>
    </div>
    <div class="uk-width-expand@m uk-text-left">
      <div class="title">
        {$title}
      </div>
      <div class="uk-text-muted uk-text-small">
        {$subTitle}
      </div>
    </div>
    <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
      <a target="_blank" href="https://github.com/jamesgeraghty/svelte-poi">
        <div>
          <span uk-icon="icon: github; ratio: 3.5"></span>
        </div>
        <div class="uk-width-expand@m uk-text-left">
          <div class="uk-text-muted uk-text-center" style="font-size:xx-small">{$user.email}</div>
        </div>
      </a>
    </div>
  </div>
</div>
