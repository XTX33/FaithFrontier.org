---
layout: default
title: "Cases"
---

<h1>Active & Archived Cases</h1>
<p class="text-muted">
Below are current matters documented by Faith Frontier, linking court records,
public-trust questions, and reflections on conscience and equity.
</p>

<div class="case-list">
  {% for case in site.cases %}
  <article class="case-card">
    <h2><a href="{{ case.url | relative_url }}">{{ case.short_title }}</a></h2>
    <p><strong>{{ case.court }}</strong></p>
    <p>{{ case.summary | truncate: 160 }}</p>
    <p class="text-muted"><small>Status: {{ case.status }} | Filed: {{ case.filed_date }}</small></p>
  </article>
  {% endfor %}
</div>
