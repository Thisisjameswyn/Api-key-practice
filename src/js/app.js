// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
// UI
import $ from 'jquery'
// BIZ

//DATA
// import sampleResponse from './sample-response.json'


$(document).ready(function() {
  $('#picSubmit').submit(function(event) {
    const imageUrlFromUser = $("#pictureURL").val();
    
    let request = new XMLHttpRequest();
    const url = `http://api.skybiometry.com/fc/faces/detect.JSON?api_key=${process.env.API_KEY}&api_secret=${process.env.API_SECRET}&attributes=all&urls=${imageUrlFromUser}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        appendSummaryOfAttributes(response);
      }
    };

    request.open("GET", url, true);
    request.send();

   event.preventDefault()
  });
});


function appendSummaryOfAttributes(response) {

  const { attributes } = response.photos[0].tags[0]
  console.log(attributes);

  const { neutral_mood, anger, disgust, fear, sadness, happiness, surprise } = attributes

  const $neutralLevel = $('<div/>').text(`Your neutrality level is: ${neutral_mood.confidence}`);
  const $angerLevel = $('<div/>').text(`Your anger level is: ${anger.confidence}`);
  const $disgustLevel = $('<div/>').text(`Your disgust level is: ${disgust.confidence}`).attr('id', 'blah');
  const $fearLevel = $('<div/>').text(`Your fear level is: ${fear.confidence}`);
  const $sadnessLevel = $('<div/>').text(`Your sadness level is: ${sadness.confidence}`);
  const $happinessLevel = $('<div/>').text(`Your happiness level is: ${happiness.confidence}`);
  const $surpriseLevel = $('<div/>').text(`Your surprise level is: ${surprise.confidence}`);

  $('body').append(
    $neutralLevel,
    $angerLevel,
    $disgustLevel,
    $fearLevel,
    $sadnessLevel,
    $happinessLevel,
    $surpriseLevel
    );
}
