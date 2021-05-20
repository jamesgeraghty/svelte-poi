<script>
   //import homer from "/src/assets/homer.png";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import AddPoiForm from "../components/AddPoiForm.svelte";
   import 'leaflet/dist/leaflet.css';
   import {LeafletMap} from '../services/leaflet-map';
   import {onMount} from "svelte";


   let lat = 52.160858;
   let lng = -7.152420;

   let map;
   onMount(async () => {
       const mapConfig = {
           location: {lat: lat, lng: lng},
           zoom: 8,
           minZoom: 7,
       };
       map = new LeafletMap("donation-map", mapConfig, 'Terrain');
       map.showZoomControl();
   });



    title.set("Donation Services Inc.");
    subTitle.set("Make a Donation!");
    navBar.set({
        bar: mainBar
    });

   function justAdded(amount, user) {
       const poiStr = `${user.firstName} ${user.lastName} €${amount.toString()}`;
       map.addMarker({lat: lat, lng: lng}, poiStr);
       map.moveTo(12, {lat: lat, lng: lng})
   }

</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <div id="donation-map" class="ui embed" style="height:600px"></div>
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <AddPoiForm {justAdded} bind:lat={lat} bind:lng={lng}/>
        </div>
    </div>
</div>