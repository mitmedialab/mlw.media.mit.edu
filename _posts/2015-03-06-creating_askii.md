---
layout: article
title:  "Creating Askii"
date:   2015-03-06
categories: updates, askii
image:
    teaser: thumbnails/askii_on_iphone_thumbnail.jpg
comments: true
---

Askii began first as a mobile application called "XpressMe", which originated from [one of the ideas]({{site.baseurl}}/xpress-me/) at the IdeaShop in May 2014. 

### Initial Prototyping

In January 2015, we created a first prototype of XpressMe, which was a mobile app that would deliver basic numeracy content in small chunks of time that  a learner could utilize on their commute.

### Re-Thinking the Concept

However, in February, we decided to re-think the idea after hearing from experts in the field that we might want to focus on a system that delivers certification content, not basic numeracy content, as it is more natural to read on the go than do math (makes logical sense).

When re-thinking "XpressMe", I was fortunate enough to have a conversation with Alison from [Cell-Ed](http://cell-ed.org), where we talked about some of the technological barriers that learners may have to using an application such as "XpressMe". Alison explained Cell-Ed's rationale for using an SMS-based system, and gave me some inspiration to think through what "XpressMe" would look like as an SMS-based-system that was targeted specifically at certification content.

Some of the advantages for creating an SMS-based system:

- It would not limit the user group to only adult learners with smart phones, but would allow learners with feature phones to interact with the application as well.
- Learners may feel like they are interacting with a real person
- Their is the ability to seamlessly integrate a feature where learners could request feedback from a real tutor. (This will come later in the prototyping process.)

### Fleshing out the Idea

I began to think about how we could deliver certification content on-the-go, and honed in on creating a SMS-based-system for helping learners study exams such as the CPT Exam while on their commutes. As initial test material, I chose the US Naturalization Exam because it is an exam with publicly available study guides.

My initial thought processes for what the system would behave like look like this, lots of arrows indicating a learner's discussion with the service via SMS.

<center><img src="{{site.baseurl}}/images/askii_user_flow.jpg" width="50%"></center>

### Prototyping Again

From these system flow charts, I then translated them into a first prototype, which we have named "Askii". Askii is built on [Twilio](http://twilio.com) and [TextIt](http://textit.in), which gives it the ability to interact via a mobile phone number. The logic of the application, which is running in the background as a external API that interfaces with TextIt, is written in Node.js with a Mongoose database of questions, answers, and content.

The prototype is up and running, and _very soon_ there will be a demo video of the system right here :)

For now, here is a screenshot as a placeholder.
<center><img src="{{site.baseurl}}/images/askii_on_iphone.jpg" width="50%"></center>


In the coming months, we will be fleshing out this prototype (and likely building a more stable code base), with the hopes of beginning user testing with Askii in May 2015. 

Askii is meant to be a system that can be used for all sorts of certification content, so if you have more suggestions for content you would like to see put in the system, please feel free to leave a comment or reach out to us by email.




