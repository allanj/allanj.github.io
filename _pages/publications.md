---
layout: page
permalink: /publications/
title: Publications
description: A full list of my publications. See also my <a href="https://scholar.google.com/citations?user=u68TA6oAAAAJ">Google Scholar</a> profile.
nav: true
---
<!-- _pages/publications.md -->

<div class="publications">

<h2 class="bib-section-title">Conference Papers</h2>
{% bibliography -f papers -q @inproceedings %}

<h2 class="bib-section-title">Journal Papers</h2>
{% bibliography -f papers -q @article %}

</div>
