<script lang="ts">
    import { onMount, getContext } from "svelte";
    import Coordinates from "./Coordinates.svelte";
    const poiService = getContext("PoiService");

    let categoryList = [];
    let amount = 0;
    let selectedPoi = 0;
    let selectedCategory = 0;
    let methods = ["Kilcash Woods", "Kilcash Walk", "Slievenamon"]
    let errorMessage = "";


    export let lat = 0.0;
    export let lng = 0.0;

    onMount(async () => {
        categoryList = await poiService.getCategories()
    });

    async function addPoi() {
        const success = await poiService.addPoi(amount, methods[selectedPoi], categoryList[selectedCategory])
        if (success) {
         //   if (justDonated) justDonated(amount, categoryList[selectedCategory]);
        } else {
            errorMessage = "Donation not completed - some error occurred";
        }
    }
</script>

<form on:submit|preventDefault={addPoi} class="uk-form-stacked uk-text-left">
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-1@m">
            <div class="uk-margin">
                <legend class="uk-legend">Add New Point of Interest</legend>
                <label class="uk-form-label" for="form-stacked-text">Enter amount</label>
                <div class="uk-form-controls">
                    <input bind:value={amount} class="uk-input" id="form-stacked-text" type="text" name="amount" placeholder="Description">
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-form-label">Categories </div>

                <div class="uk-form-controls">
                <div class="uk-form-controls">
                    <label><input bind:group={selectedPoi} value={0} class="uk-radio" type="radio" name="method"> {methods[0]} </label><br>
                    <label><input bind:group={selectedPoi} value={1} class="uk-radio" type="radio" name="method"> {methods[1]} </label><br>
                    <label><input bind:group={selectedPoi} value={2} class="uk-radio" type="radio" name="method"> {methods[2]} </label>
                </div>
            </div>
            </div>
        </div>
        <div class=" uk-width-1-2@m">
            <div class="uk-margin uk-text-left">
                <div class="uk-form-label">Select Candidate </div>
                <div class="uk-form-controls ">
                    {#each categoryList as category, i}
                        <label>
                            <input bind:group={selectedCategory} value={i} class="uk-radio" type="radio" name="category" />
                            {category.name}
                        </label>
                        <br>
                    {/each}
                </div>
            </div>
            <div class="uk-margin">
                <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add Point of Interest</button>
            </div>
            {#if errorMessage}
                <div class="uk-text-left uk-text-small">
                    {errorMessage}
                </div>
            {/if}
        </div>
    </div>
    <Coordinates bind:lat={lat} bind:lng={lng}/>
</form>


