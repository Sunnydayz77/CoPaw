import React, { Component } from 'react'
import { readAllUsers, readAllProfiles } from '../services/user-helper'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import '../styles/Map.css'
import icon from '../media/Dept.png'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY


/* global google */

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      locations: [
        { lat: -25.366, lng: 131.044 },
        { lat: 40.730610, lng: -73.935242 }
      ]
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
      <div className='landing' >
        <div id="map">
        </div>
      </div>
    )

  }

}

export default Map;