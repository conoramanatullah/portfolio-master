$(document).ready(function(){
  // Ready all page elements
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.modal-trigger').leanModal({
    dismissible: false,
    opacity: 0
  });
  var clicks = 0;
  $('#me').click(function(){
    clicks++;
    if(clicks == 20){
      $('#meFace').attr('src','img/ayylmao.jpg')
    }

  });
  console.log("HEY YOU. Do you like my website? Send me an email and I'll build you one.")
})
