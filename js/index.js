
var fortunes = [];
function getFortune() {
  $.ajax({
      url: 'https://fortunecookieapi.herokuapp.com/v1/fortunes',
      cache: false,
      success: function(data) {
        fortunes.push(data);
        $('.loadingText').hide();
        $('.btn').css('opacity', '100');
        $('.tweet').css('opacity', '100');
    }
  })
}
function postTweet() {
//Format fortune for URL
    var preFill = $('.header').text()
      .replace(/["/.]/g, "")
      .replace(/\s/g, "%20");
//Insert into URL
    $('.twit').attr('href', 'https://twitter.com/intent/tweet?text=My%20FortuneCookie%20fortune%20is%3A%20' + '%22' + preFill + '%22');
  };  
$(document).ready(function() {
  getFortune()
  $('.btn').click(function() {
    $('.header').addClass('fortune')
      .text(JSON.stringify(fortunes[0][Math.floor((Math.random() * 100) + 1)]
      .message));
    postTweet();
  });
});
