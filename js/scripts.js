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

    $("#city").val("");
    $("#country").val("");
    $("#landmarks").val("");
    $("#timeOfYear").val("");
    $("#notes").val("");

    $("#placeInfo").append("<h3>" + placeObject.city + ", " + placeObject.country + "</h3>");
    $("#placeInfo").append("<ul></ul>");
    $("#placeInfo ul:last-of-type").append("<li>" + placeObject.landmarks + "</li>");
    $("#placeInfo ul:last-of-type").append("<li>" + placeObject.timeOfYear + "</li>");
    $("#placeInfo ul:last-of-type").append("<li>" + placeObject.notes + "</li>");


    $("li").hide();

    $("#placeInfo h3:last-of-type").click(function() {
      $(this).next().children().toggle();
    });
  });
});
