// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
// LOGIC


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

      const imageFromUser = $()
    //image from user

    let request = new XMLHttpRequest();
    const url = `http://api.skybiometry.com/fc/faces/detect.JSON?api_key=s9tfp0gj5r5u150424i8l2dvkd&api_secret=o13apo127ku71ql6lfbic3f040&attributes=all&urls=${imageFromUser}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

   function getElements(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});