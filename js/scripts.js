//////////////////////////////
//Back-end
//////////////////////////////
function Place(city, country, landmarks, timeOfYear, notes) {
  this.city = city;
  this.country = country;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

//////////////////////////////
//Front-end
//////////////////////////////
$(function() {

  $("#placeObject").submit(function(event) {
    event.preventDefault();

    var city = $("#city").val();
    var country = $("#country").val();
    var landmarks = $("#landmarks").val();
    var timeOfYear = $("#timeOfYear").val();
    var notes = $("#notes").val();

    var placeObject = new Place(city, country, landmarks, timeOfYear, notes);
  });
});
