A Pen created at CodePen.io. You can find this one at http://codepen.io/jeddy016/pen/qRRpPy.

 This is my first try at a web app. 
 
 It is a simple random fortune generator using a the API from fortunecookieapi.herokuapp.com to
 generate fortunes. 
 
 Users have the option to tweet their fortune via Twitter's intent functionality combined with jQuery magic to pre-fill 
 their Tweet. 

 KNOWN BUG: If adBlock is enabled, the Twitter button will sometimes disappear due to adBlock's filter picking up on the href of the
 twitter element and applying display: none to it. I cannot find a way to override this. 
