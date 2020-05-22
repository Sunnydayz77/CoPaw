import React, { Component } from 'react'
import '../styles/Map.css'
import icon from '../media/Dept.png'
import { offices } from '../data/offices'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY


/* global google */

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      locations: offices
    }
  }


  // google maps display help from https://stackoverflow.com/questions/53176069/reactjs-external-script-google-maps and other kind stackoverflowers
  getGoogleMaps() {
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(google);

          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }

    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }

  componentWillMount() {
    // Start Google Maps API loading since we know we'll soon need it
    this.getGoogleMaps();
  }

  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map
    this.getGoogleMaps().then((google) => {
      const hq = { lat: 40.730610, lng: -73.935242 };
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: hq
      });

      const markers = this.state.locations.map((location, index) => {
        new google.maps.Marker({
          position: location,
          icon: icon,
          map: map
        })
      })

    })

  }

 
  render() {

    return (
      <div className='worldwide' >
        <h2>Datadog Locations</h2>
        <div id="map">
        </div>
      </div>
    )

  }

}

export default Map;