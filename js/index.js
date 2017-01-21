$(document).ready(function() {
//Get new Fortune//
  $('.btn').click(function getFortune() {
    $('.header').addClass('fortune');
    $.ajax({
      url: 'https://fortunecookieapi.herokuapp.com/v1/cookie',
      success: function(data) {
        var fort = JSON.stringify(data[0].fortune.message);
//Only return fortunes short enough for Tweet//
        fort.length <= 125 ? $('.header').text(fort).addClass('fortune') :
          getFortune();
      }
    })
  });
//Pre-fill tweet with fortune//
  $('.tweet').click(function() {
//Format fortune for URL//
    var preFill = $('.header').text()
      .replace(/["/.]/g, "")
      .replace(/\s/g, "%20");
//Insert into URL//
    $('.tweet').attr('href', 'https://twitter.com/intent/tweet?text=My%20fortune%20is%3A%20' + '%22' + preFill + '%22');
  });
});