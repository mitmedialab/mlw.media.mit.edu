---
layout: default
title:  "Contact Us"
date:   2014-06-17
comments: true
---

# Contact Us

We'd love to hear your thoughts, questions, and comments.

<div class="contact-form-wrapper col-sm-8">
	<div class="contact-alert alert alert-success">Thanks for contacting us! We will be in touch shortly.</div>
	<form id="ajax-form" action="#" role="form">
		<input type='hidden' name='redirect_to' value='' />
		<div class="row">
			<div class="col-xs-6 col-md-6 form-group">
				<input class="form-control contact-form-control" id="name" name="name" placeholder="Name" type="text" required autofocus />
			</div>
			<div class="col-xs-6 col-md-6 form-group">
				<input class="form-control contact-form-control" id="email" name="email" placeholder="Email" type="email" required />
			</div>
		</div>
		<textarea class="form-control contact-form-control" id="message" name="message" placeholder="Questions, comments, thoughts..." rows="5"></textarea>
		<br />
		<div class="row">
			<div class="col-xs-12 col-md-12 form-group">
				<button class="btn btn-block contact-sumbit-button pull-right" type="submit">Send</button>
			</div>
		</div>
	</form>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript">
      
      $('#ajax-form').submit(function(){
        $.ajax({
          dataType: 'jsonp',
          url: "http://getsimpleform.com/messages/ajax?form_api_token=0f83f692a0bfe00f0107337760ddd10e",
          data: $('#ajax-form').serialize() 
        }).done(function() {
          //callback which can be used to show a thank you message
          //and reset the form
          $('.contact-alert').show()
        });
        return false; //to stop the form from submitting
      });
    
</script>