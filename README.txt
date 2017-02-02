 This is my first try at a web app. It is a simple random fortune generator using a the API from fortunecookieapi.herokuapp.com to
 generate fortunes. Users have the option to tweet their fortune via Twitter's intent functionality combined with jQuery magic to pre-fill 
 their Tweet. 

 KNOWN BUG: If adBlock is enabled, the Twitter button will sometimes disappear due to adBlock's filter picking up on the href of the
 twitter element and applying "display: none" to it. I cannot find a way to override this. 
 
 Things I learned on this project:
  -AdBlock is a pain
  -HTTP/HTTPS mixed-media errors are also not my favorite
  -AJAX requests using jQuery
  -How to overcome issues with defining variables using asynchronous Javascript methods
  -What a callback function is
