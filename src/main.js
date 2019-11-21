import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import loadGoogleMapsApi from 'load-google-maps-api';

$(document).ready(function() {
 
    loadGoogleMapsApi({'key':'AIzaSyB-Mgt8OR12z9WUmehS8HIQoCq_ItoMV_U'}).then(function (googleMaps) {
        new googleMaps.Map(document.querySelector('.map'), {
          center: {
            lat: 47.608013,
            lng: -122.335167
          },
          zoom: 12
        })
      }).catch(function (error) {
        console.error(error)
      })
});
