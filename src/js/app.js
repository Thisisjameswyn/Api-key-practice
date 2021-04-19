// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
// UI
import $ from 'jquery'
// BIZ

//DATA
import sampleResponseToDetect from './sample-response.json'


$(document).ready(function() {
  $('#picSubmit').submit(function() {
    const city = $('#location').val();
    $('#location').val("");

    // const imageUrlFromUser = $("#pictureURL").val();
    //image from user

    // let request = new XMLHttpRequest();
    // const url = `http://api.skybiometry.com/fc/faces/detect.JSON?api_key=${process.env.API_KEY}&api_secret=${process.env.API_SECRET}&attributes=all&urls=${imageUrlFromUser}`;

    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const response = JSON.parse(this.responseText);
    //     getElements(response);
    //   }
    // };

    // request.open("GET", url, true);
    // request.send();

   
  });
});

function appendSummaryOfAttributes(responseToDetect) {
  // const { attributes } = response.photos[0].tags[0]
  // const attributes = response.photos[0].tags[0].attributes
  // const attributesClone = { ...response.photos[0].tags[0].attributes }

  const { attributes } = responseToDetect.photos[0].tags[0]
  // const attributesEntries = Object.entries(attributes)

  const angerLevel = attributes.anger.confidence;

  // console.log(responseToDetect.photos[0].tags[0].width)
  // console.log(width) // same as previous line
  // console.log(attributes)
  // console.log(attributesEntries)
  // $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
  // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  $('body').append(`Your anger level is: ${angerLevel}`);
}
appendSummaryOfAttributes(sampleResponseToDetect)