---
layout: default
title:  "Contact Us"
date:   2014-06-17
---

# Contact Us

We'd love to hear your thoughts, questions, and comments.

<div class="contact-form-wrapper col-sm-12">
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
			<div class="col-xs-12 col-md-2 col-md-offset-5 form-group">
				<button class="btn btn-block contact-sumbit-button pull-right" type="submit">Send</button>
			</div>
		</div>
	</form>
</div>

<!-- Jquery and Contact Form Ajax Script -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="javascripts/contact-form.js"></script>