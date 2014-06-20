$('#ajax-form').submit(function(){
  $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=0f83f692a0bfe00f0107337760ddd10e",
    data: $('#ajax-form').serialize() 
  }).done(function() {
    //callback which can be used to show a thank you message and reset the form
    $('.contact-alert').show()
  });
  return false; //to stop the form from submitting
});