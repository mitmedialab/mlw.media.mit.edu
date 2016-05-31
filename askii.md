---
layout: archive
title:  "Askii"
date:   2015-03-05
permalink: /askii/
---

<p class="disclaimer"> Making / Learning / Work was an adult learning innovation project hosted at the MIT Media Lab from September 2014 to May 2016. This site is an archive of the project documentation. </p>

In low-income jobs, certification exams are often a pathway to better employment prospects. Just in the healthcare field alone, passing an exam such as the Phlebotomy Technician Certification (CPT) and EKG Technician Certification (CET) can drastically improve your employability and annual income.

__Askii is an open-source API (application programming interface) for question and answer learning. Askii focuses on delivering a learning experience that helps adult learners study for certification exams. It can be used as the back-end to SMS, mobile, and web-based learning systems.__

Askii is designed to incorporate study skills. It tracks the questions that a learner struggles with, and interleaves personalized review content with in the learning experience.

Currently, Askii is designed to be used by developers, but we are working on ways to create customizable web applications, mobile applications, and SMS systems that allow people to create learning experiences without needing to code.

### Directions to Explore with Askii

__SMS Systems__

One avenue that we plan to explore with Askii is how to create a combined mobile web page and SMS system that allows adult learners to study for a certification exam while on their commute. When a learner has a spare five minutes, they can simply text Askii to begin their customized lesson. Askii will respond with a customized set of questions and links to content that learners can study from on the go.

As some adult learners do not have access to smart phones, Askii has been designed to be both smart phone and feature phone compatible. Any phone with access to basic Internet browsing will be able to use Askii.

The first prototype of this SMS and web-based system was completed in March 2015. We plan to run pilot tests of this system over the summer.

__Mobile Applications - Read Out Loud__

Askii is actually now powering the back-end of [Read Out Loud](http://learn.media.mit.edu/mlw/read-out-loud), allowing learners to save words they want to revisit and review them in context of the books they are reading.

__Questions / Comments__

Curious to learn more about Askii? Please feel free to [contact us](http://learn.media.mit.edu/mlw/contact/).



### Updates Regarding Askii

<div class="tiles">
    {% for post in site.categories.askii %}
        {% include post-grid.html %}
    {% endfor %}
</div>