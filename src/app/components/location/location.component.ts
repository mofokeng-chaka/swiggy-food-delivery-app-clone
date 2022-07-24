import {Component, OnInit} from '@angular/core';
import {faMapMarkerAlt, faPercent} from '@fortawesome/free-solid-svg-icons';
import { Loader } from '@googlemaps/js-api-loader';
import {environment} from '../../../environments/environment';

declare let google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: [ './location.component.scss']

})
export class LocationComponent implements OnInit {
  userAddress: string;
  queryWait: boolean;
  mapMarkerAlt = faMapMarkerAlt;
  faPercent = faPercent;
  constructor() { }

  ngOnInit(): void {
    this.userAddress = '';
    const loader = new Loader({
      apiKey: environment.googleApiKey,
      version: 'weekly',
      libraries: ['places'],
    });
    loader.load().then(() => {
      this.initMap();
    });
    this.getLocation();
  }

  // This example requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

  initMap(): void {
    const input = document.getElementById('pac-input') as HTMLInputElement;
    const options = {
      componentRestrictions: { country: 'za' },
      fields: ['formatted_address', 'geometry', 'name'],
      strictBounds: false,
      types: ['address'],
    };

    const autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', () => {

      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert('No details available for input: \'' + place.name + '\'');
        return;
      }

      this.userAddress = place.formatted_address;
    });
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        // Success function
        this.showAddress,
        // Error function
        this.showError,
        // Options. See MDN for details.
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        });
    } else {
      this.userAddress = '';
    }
  }

  showAddress(position): void {
    const input = document.getElementById('pac-input') as HTMLInputElement;
    const geocoder = new google.maps.Geocoder();
    const latlng = {
      lat: parseFloat(position.coords.latitude),
      lng: parseFloat(position.coords.longitude),
    };

    geocoder
      .geocode({ location: latlng }, (results, status) => {
        if (status === 'OK') {
          input.value = results[0].formatted_address;
          console.log(input.value, this.userAddress, typeof this.userAddress);
          // this.userAddress = input.value;
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
  }

  showError(error): void {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        console.log('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        console.log('An unknown error occurred.');
        break;
    }
  }

  onInput(e: Event): void {
    this.userAddress = (e.target as HTMLInputElement).value;
    console.log(this.userAddress);
  }
}
