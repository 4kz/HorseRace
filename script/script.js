$(document).ready(() => {
    $.get("templates/character.html", function( data ) {
       // $("#characters").append(data);
        alert("Load was performed.");
      });
});