---
layout: archive
permalink: /
title: "Technology innovation & adult learning"
---

_Making / Learning / Work is an adult learning innovation project hosted at the MIT Media Lab_

In the US, 36 Million adults have low basic literacy and numeracy skills. Many are stuck in low-paying jobs or unemployment. This is a challenge not just for the individuals and families directly affected, but for the US economy as a whole. "Learning" is the most promising pathway towards family-supporting employment and better futures. [[Read More]]({{site.baseurl}}/about/)

# Current Prototypes

<a href="{{ site.url }}{{site.baseurl}}/read-out-loud/"> 
    <img class="project-tile" src="{{site.baseurl}}/images/project_tiles/rol_tile.jpg" width="49%">
</a>
<a href="{{ site.url }}{{site.baseurl}}/askii/">
    <img class="project-tile" src="{{site.baseurl}}/images/project_tiles/askii_tile.jpg" width="49%">
</a>

# Project Updates

<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->