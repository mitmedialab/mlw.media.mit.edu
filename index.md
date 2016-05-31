---
layout: archive
permalink: /
title: "Technology innovation & adult learning"
---

_Making / Learning / Work was an adult learning innovation project hosted at the MIT Media Lab from September 2014 to May 2016. This site is an archive of the project documentation. The research work will be continued as part of a new Learning Innovation Fellowship at the Media Lab._

In the US, 36 Million adults have low basic literacy and numeracy skills. Many are stuck in low-paying jobs or unemployment. This is a challenge not just for the individuals and families directly affected, but for the US economy as a whole. "Learning" is the most promising pathway towards family-supporting employment and better futures. [[Read More]]({{site.baseurl}}/about/)

# Current Prototypes

<div class="tiles" style="min-width: 100%; min-height: 30vh;">
	<article class="tile" itemscope itemtype="http://schema.org/Article">
  		<a href="{{ site.url }}{{site.baseurl}}/read-out-loud/" title="Read Out Loud">
  			<img src="{{ site.url }}{{site.baseurl}}/images/project_tiles/rol_tile.jpg" alt="teaser" itemprop="image">
    	</a>
	</article>
	<article class="tile" itemscope itemtype="http://schema.org/Article">
  		<a href="{{ site.url }}{{site.baseurl}}/askii/" title="Askii">
  			<img src="{{ site.url }}{{site.baseurl}}/images/project_tiles/askii_tile.jpg" alt="teaser" itemprop="image">
    	</a>
	</article>
	<article class="tile" itemscope itemtype="http://schema.org/Article">
  		<a href="{{ site.url }}{{site.baseurl}}/libranet/" title="Libranet">
  			<img src="{{ site.url }}{{site.baseurl}}/images/project_tiles/libranet_tile.jpg" alt="teaser" itemprop="image">
    	</a>
	</article><!-- /.tile -->
</div>

# Project Updates

<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->