$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var wordsInput = $("input#words").val();

    $(".shout").text(wordsInput.toUpperCase());

  event.preventDefault();
  });
});
