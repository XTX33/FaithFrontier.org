---
layout: default
title: "Case Records"
permalink: /cases/
description: "Index of active and archived Faith Frontier case records, including New Jersey appeals, PCR filings, and civil matters."
---

<section class="section-intro">
  <h1>Case Records</h1>
  <p class="section-lead">
    An indexed archive of filings, timelines, and outcomes in matters involving
    <strong>Faith Frontier Ecclesiastical Trust</strong>, its trustees, and related parties.
    Each entry is published to promote transparency, public accountability, and a clearer
    understanding of how due process unfolds in New Jersey civil, chancery, appellate,
    and administrative forums.
  </p>
  <p class="text-muted">
    Documents reproduced here are public court filings, orders, or agency records.
    They are provided for informational and educational purposes only and do not constitute legal advice.
  </p>
</section>

{% comment %}
  Collect all case pages:
  - Only pages whose layout is "case"
  - Only URLs under /cases/
  - Exclude archived cases
  - Sort by filed date (newest first)
{% endcomment %}
{% assign all_cases = site.pages
  | where: "layout", "case"
  | where_exp: "p", "p.url contains '/cases/'"
  | where_exp: "p", "p.archived != true"
  | sort: "filed"
  | reverse %}

<section class="case-list" aria-label="Case records ordered by most recent filing">

  {% if all_cases.size == 0 %}
    <article class="case-card">
      <h2>No cases published yet</h2>
      <p class="text-muted">
        Case records are being prepared and will be posted as filings are organized and
        redacted for online publication. Please check back soon.
      </p>
    </article>
  {% else %}

    {% comment %}
      Split into Active vs Closed based on the status text.
      Anything else falls into "Other / Misc" if you ever need it later.
    {% endcomment %}
    {% assign active_cases = all_cases | where_exp: "c", "c.status contains 'Active'" %}
    {% assign closed_cases = all_cases | where_exp: "c", "c.status contains 'Closed'" %}
    {% assign other_cases = all_cases
       | where_exp: "c", "c.status contains 'Active' == false and c.status contains 'Closed' == false" %}

    {% if active_cases.size > 0 %}
      <h2 class="mt-4">Active Matters</h2>
      {% for case in active_cases %}
        <article class="case-card">
          <header>
            <h2>
              <a href="{{ case.url | relative_url }}">
                {{ case.short_title | default: case.title }}
              </a>
            </h2>
            <p class="text-muted">
              <small>
                <strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong><br>
                {{ case.venue | default: "Atlantic County" }} |
                Docket: {{ case.docket | default: "Pending" }}
              </small>
            </p>
          </header>

          {% if case.summary %}
            <p class="text-muted">
              {{ case.summary | strip_html | truncate: 260 }}
            </p>
          {% endif %}

          <p>
            <span class="badge bg-success">{{ case.status }}</span>
            {% if case.track %}
              <span class="badge bg-secondary">{{ case.track }}</span>
            {% endif %}
          </p>

          {% if case.filed %}
            <p class="text-muted">
              <small>Filed {{ case.filed | date: "%B %-d, %Y" }}</small>
            </p>
          {% endif %}

          {% if case.next_event %}
            <p class="text-muted">
              <small>
                {% if case.next_event.label and case.next_event.date %}
                  Next: {{ case.next_event.label }} — {{ case.next_event.date | date: "%B %-d, %Y" }}
                {% else %}
                  Next: {{ case.next_event }}
                {% endif %}
              </small>
            </p>
          {% endif %}

          <p>
            <a class="card-link" href="{{ case.url | relative_url }}">
              Open full record →
            </a>
          </p>
        </article>
      {% endfor %}
    {% endif %}

    {% if closed_cases.size > 0 %}
      <h2 class="mt-5">Closed / Completed Matters</h2>
      {% for case in closed_cases %}
        <article class="case-card">
          <header>
            <h2>
              <a href="{{ case.url | relative_url }}">
                {{ case.short_title | default: case.title }}
              </a>
            </h2>
            <p class="text-muted">
              <small>
                <strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong><br>
                {{ case.venue | default: "Atlantic County" }} |
                Docket: {{ case.docket | default: "" }}
              </small>
            </p>
          </header>

          {% if case.summary %}
            <p class="text-muted">
              {{ case.summary | strip_html | truncate: 220 }}
            </p>
          {% endif %}

          <p>
            <span class="badge bg-dark">{{ case.status }}</span>
          </p>

          {% if case.filed %}
            <p class="text-muted">
              <small>Filed {{ case.filed | date: "%B %-d, %Y" }}</small>
            </p>
          {% endif %}

          <p>
            <a class="card-link" href="{{ case.url | relative_url }}">
              Open full record →
            </a>
          </p>
        </article>
      {% endfor %}
    {% endif %}

    {% if other_cases.size > 0 %}
      <h2 class="mt-5">Other Matters</h2>
      {% for case in other_cases %}
        <article class="case-card">
          <header>
            <h2>
              <a href="{{ case.url | relative_url }}">
                {{ case.short_title | default: case.title }}
              </a>
            </h2>
          </header>

          {% if case.summary %}
            <p class="text-muted">
              {{ case.summary | strip_html | truncate: 220 }}
            </p>
          {% endif %}

          {% if case.status %}
            <p><span class="badge bg-secondary">{{ case.status }}</span></p>
          {% endif %}

          <p>
            <a class="card-link" href="{{ case.url | relative_url }}">
              Open full record →
            </a>
          </p>
        </article>
      {% endfor %}
    {% endif %}

  {% endif %}
</section>