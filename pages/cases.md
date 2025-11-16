---
layout: default
title: "Cases, Dockets & Public Trust"
permalink: /cases/
description: "Faith Frontier’s live dockets, case records, and public-trust matters—explained in plain language so working people can see how New Jersey courts and agencies are using power."
body_class: page-cases
---

<header class="section-intro hero hero-page hero-cases">
  <div class="container hero-inner">
    <div class="hero-copy">
      <p class="eyebrow">Faith Frontier Ecclesiastical Trust</p>
      <h1>Cases, Dockets and Public Trust</h1>
      <p class="section-lead">
        This is the public case record for <strong>Faith Frontier Ecclesiastical Trust</strong>—documenting how New Jersey courts, agencies, and toll systems touch the life of a working
        tradesman and pro se litigant.
      </p>
      <p class="text-muted">
        Every matter listed here is grounded in public records and filings. Nothing on this site is
        legal advice. It is an attempt to tell the truth about process, pressure, and mercy—in
        language an ordinary person can understand.
      </p>
    </div>

    <aside class="hero-aside">
      <h2 class="h4">Three ways to read these cases</h2>
      <ol class="hero-list numbered">
        <li><strong>Case Records:</strong> what was filed, where, and when.</li>
        <li><strong>Live Dockets:</strong> what’s active right now and what’s coming next.</li>
        <li><strong>Public-Trust Lens:</strong> how tolls, data, and procedures reveal the health of our systems.</li>
      </ol>
      <p class="hero-callout">
        <strong>Scripture note:</strong> “For the Lord loves justice; He will not forsake His saints.”
        <span class="text-muted">—Psalm 37:28</span>
      </p>
    </aside>
  </div>
</header>

<section class="section section-alt section-nav-cards" aria-label="Case navigation">
  <div class="container cards-grid">
    <article class="card card-link-block">
      <h2 class="h4"><a href="#records">1. Case Records</a></h2>
      <p>All matters advanced by Faith Frontier—appeals, PCR petitions, civil actions, and agency disputes.</p>
    </article>

    <article class="card card-link-block">
      <h2 class="h4"><a href="#live">2. Live Dockets and Upcoming Dates</a></h2>
      <p>Active cases with hearings or deadlines on the calendar, tracked in plain language.</p>
    </article>

    <article class="card card-link-block">
      <h2 class="h4"><a href="#public-trust">3. Public-Trust Matters</a></h2>
      <p>Cases that raise deeper questions about fairness, surveillance, tolls, or stewardship of public power.</p>
    </article>

    <article class="card card-link-block">
      <h2 class="h4"><a href="#court-context">How NJ Courts Fit Together</a></h2>
      <p>A short guide to trial courts, appeals, and post-conviction work using real Faith Frontier dockets.</p>
    </article>
  </div>
</section>

{% comment %}
  Collect cases from the dedicated `cases` collection if defined.
  Fall back to pages with layout "case" under /cases/ if needed.
{% endcomment %}
{% assign collection_cases = site.cases | default: empty %}
{% if collection_cases == empty %}
  {% assign collection_cases = site.pages
     | where: "layout", "case"
     | where_exp: "p", "p.url contains '/cases/'" %}
{% endif %}

{% assign all_cases = collection_cases
   | where_exp: "c", "c.archived != true"
   | sort: "filed_date"
   | reverse %}

{% assign active_cases = all_cases | where_exp: "c", "c.status contains 'Active'" %}
{% assign closed_cases = all_cases | where_exp: "c", "c.status contains 'Closed'" %}
{% assign trust_cases  = all_cases | where: "public_trust_issue", true %}

<section id="records" class="section section-cases" aria-label="Case records">
  <div class="container">
    <h2>1. Case Records</h2>
    <p class="lead">
      These records are published under the oversight of <strong>Faith Frontier Ecclesiastical Trust</strong>—a faith-based public trust devoted to lawful stewardship, equity, and reform. Each case is presented
      to preserve the integrity of the record and to witness how law is actually applied to working people.
    </p>

    {% if all_cases.size == 0 %}
      <article class="case-card">
        <h3>No cases published yet</h3>
        <p class="text-muted">
          Case files are being organized and redacted for privacy. As matters are prepared for digital
          release, they will appear here with timelines, filings, and plain-language notes.
        </p>
      </article>
    {% else %}

      {% if active_cases.size > 0 %}
        <h3 class="mt-4">Active Matters</h3>
        <div class="case-grid">
          {% for case in active_cases %}
            <article class="case-card">
              <header>
                <h4>
                  <a href="{{ case.url | relative_url }}">
                    {{ case.short_title | default: case.title }}
                  </a>
                </h4>
                <p class="case-meta text-muted">
                  <strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong><br>
                  {% if case.venue %}
                    {{ case.venue }}
                  {% endif %}
                  {% if case.docket %}
                    {% if case.venue %} • {% endif %}
                    Docket: {{ case.docket }}
                  {% endif %}
                </p>
              </header>

              {% if case.summary %}
                <p>{{ case.summary | strip_html | truncate: 260 }}</p>
              {% endif %}

              <p class="case-tags">
                {% if case.status %}
                  <span class="badge badge-status">{{ case.status }}</span>
                {% endif %}
                {% if case.track %}
                  <span class="badge badge-track">{{ case.track }}</span>
                {% endif %}
                {% if case.public_trust_issue %}
                  <span class="badge badge-trust">Public-trust issue</span>
                {% endif %}
              </p>

              {% assign filed_on = case.filed_date | default: case.filed %}
              {% if filed_on %}
                <p class="text-muted">
                  <small>Filed {{ filed_on | date: "%B %-d, %Y" }}</small>
                </p>
              {% endif %}

              {% if case.docket_url %}
                <p class="text-muted">
                  <small>
                    Official docket:
                    <a href="{{ case.docket_url }}" target="_blank" rel="noopener">
                      View on Court System</a>
                  </small>
                </p>
              {% endif %}

              <p>
                <a class="card-link" href="{{ case.url | relative_url }}">
                  View Full Case Record</a>
              </p>
            </article>
          {% endfor %}
        </div>
      {% endif %}

      {% if closed_cases.size > 0 %}
        <h3 class="mt-5">Closed / Completed Matters</h3>
        <div class="case-grid">
          {% for case in closed_cases %}
            <article class="case-card">
              <header>
                <h4>
                  <a href="{{ case.url | relative_url }}">
                    {{ case.short_title | default: case.title }}
                  </a>
                </h4>
                <p class="case-meta text-muted">
                  <strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong><br>
                  {% if case.venue %}
                    {{ case.venue }}
                  {% endif %}
                  {% if case.docket %}
                    {% if case.venue %} • {% endif %}
                    Docket: {{ case.docket }}
                  {% endif %}
                </p>
              </header>

              {% if case.summary %}
                <p>{{ case.summary | strip_html | truncate: 220 }}</p>
              {% endif %}

              {% if case.status %}
                <p class="case-tags">
                  <span class="badge badge-closed">{{ case.status }}</span>
                </p>
              {% endif %}

              <p>
                <a class="card-link" href="{{ case.url | relative_url }}">
                  View Full Case Record</a>
              </p>
            </article>
          {% endfor %}
        </div>
      {% endif %}

    {% endif %}
  </div>
</section>

<section id="live" class="section section-alt section-live" aria-label="Live dockets and upcoming dates">
  <div class="container">
    <h2>2. Live Dockets and Upcoming Dates</h2>
    <p class="lead">
      Live dockets focus on what is <strong>currently moving</strong>—upcoming hearings,
      briefing deadlines, or motions that may shape the record. Dates are approximate and
      should always be confirmed on the official court docket.
    </p>

    {% assign live_cases = active_cases
       | where_exp: "c", "c.next_date or c.next_event" %}

    {% if live_cases.size == 0 %}
      <article class="case-card">
        <h3>No upcoming events listed</h3>
        <p class="text-muted">
          When hearings, argument dates, or decision deadlines are set, they will appear here
          with short explanations and links back to the full case records.
        </p>
      </article>
    {% else %}
      <div class="case-grid">
        {% for case in live_cases %}
          <article class="case-card">
            <h3 class="h4">
              <a href="{{ case.url | relative_url }}">
                {{ case.short_title | default: case.title }}
              </a>
            </h3>

            <p class="case-meta text-muted">
              <strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong>
              {% if case.venue %} • {{ case.venue }}{% endif %}
              {% if case.docket %} • Docket {{ case.docket }}{% endif %}
            </p>

            {% assign next_date = case.next_date | default: case.next_event.date %}
            <p class="text-muted">
              {% if next_date %}
                <strong>Next event:</strong>
                {% if case.next_event.label %}
                  {{ case.next_event.label }}
                {% elsif case.next_event %}
                  {{ case.next_event }}
                {% else %}
                  Scheduled matter
                {% endif %}
                on {{ next_date | date: "%B %-d, %Y" }}
              {% else %}
                <strong>Next event:</strong> To be scheduled
              {% endif %}
            </p>

            {% if case.faith_note %}
              <p class="faith-note">
                <strong>Why this matters:</strong> {{ case.faith_note }}
              </p>
            {% elsif case.summary %}
              <p>{{ case.summary | strip_html | truncate: 180 }}</p>
            {% endif %}

            <p>
              <a class="card-link" href="{{ case.url | relative_url }}">
                View timeline and filings</a>
            </p>
          </article>
        {% endfor %}
      </div>
    {% endif %}
  </div>
</section>

<section id="public-trust" class="section section-trust" aria-label="Public-trust cases">
  <div class="container">
    <h2>3. Public-Trust Matters</h2>
    <p class="lead">
      Some disputes are bigger than one person’s bill or ticket. They show how tolls, licenses,
      data, and enforcement tools are aimed—and whether that use of power honors the public
      it claims to serve.
    </p>
    <p class="text-muted">
      Cases are tagged as <strong>public-trust matters</strong> when they involve toll authorities,
      motor vehicle records, automated enforcement, probation terms, or other powers that touch
      thousands of people the same way they touch me.
    </p>

    {% if trust_cases.size == 0 %}
      <article class="case-card">
        <h3>No public-trust cases tagged yet</h3>
        <p class="text-muted">
          As toll disputes, data-driven enforcement, or licensing cases are fully documented and
          ready for publication, they will appear here with both legal context and faith-based
          reflection.
        </p>
      </article>
    {% else %}
      <div class="case-grid">
        {% for case in trust_cases %}
          <article class="case-card">
            <h3 class="h4">
              <a href="{{ case.url | relative_url }}">
                {{ case.short_title | default: case.title }}
              </a>
            </h3>

            <p class="case-meta text-muted">
              <strong>Court:</strong>
              {{ case.court | default: "Superior Court of New Jersey" }}<br>
              {% if case.venue %}
                <strong>Venue:</strong> {{ case.venue }}<br>
              {% endif %}
              {% if case.docket %}
                <strong>Docket:</strong> {{ case.docket }}<br>
              {% endif %}
              {% if case.status %}
                <strong>Status:</strong> {{ case.status }}
              {% endif %}
            </p>

            {% if case.summary %}
              <p>{{ case.summary | strip_html | truncate: 260 }}</p>
            {% endif %}

            {% if case.faith_note %}
              <p class="faith-note">
                <strong>Faith reflection:</strong> {{ case.faith_note }}
              </p>
            {% endif %}

            <p>
              <a class="card-link" href="{{ case.url | relative_url }}">
                View full record and notes
              </a>
            </p>
          </article>
        {% endfor %}
      </div>
    {% endif %}
  </div>
</section>

<section id="court-context" class="section section-alt section-court" aria-label="How New Jersey courts and procedures fit together">
  <div class="container">
    <h2>How the New Jersey Courts Fit Together</h2>
    <p class="lead">
      One life event can appear in three or four different dockets. Understanding the structure
      helps keep fear and confusion from doing all the talking.
    </p>

    <div class="grid-2">
      <div>
        <h3>Layers of the system</h3>
        <ul>
          <li><strong>Municipal and trial courts:</strong> where tickets, complaints, and most day-to-day hearings start.</li>
          <li><strong>Law Division, Criminal:</strong> indictments, pleas, sentencing, probation, and violation proceedings.</li>
          <li><strong>Appellate Division:</strong> reviews legal errors, timing issues, and requests to file “as within time.”</li>
          <li><strong>Post-Conviction Relief (PCR):</strong> challenges to ineffective assistance and constitutional violations after conviction.</li>
        </ul>
      </div>
      <div>
        <h3>Why Faith Frontier publishes this</h3>
        <p>
          Court records are “public,” but they are not written for working people. Without context,
          a docket can make a parent or tradesman look reckless or hopeless when the truth involves
          bad counsel, withheld evidence, or economic pressure.
        </p>
        <p>
          By pairing official filings with honest explanation and faith-anchored reflection, Faith
          Frontier aims to show how justice feels on the ground—and why due process, accurate
          records, and mercy matter for anyone trying to work, rent, and love in New Jersey.
        </p>
      </div>
    </div>

    <p class="text-muted small">
      All descriptions are personal interpretation of public records. Always read the official docket
      and orders before relying on any summary.
    </p>
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Cases, Dockets & Public Trust",
  "description": "Faith Frontier Ecclesiastical Trust publishes live dockets, case records, and public-trust matters from New Jersey courts and agencies, explained in plain language.",
  "url": "{{ '/cases/' | absolute_url }}",
  "publisher": {
    "@type": "Organization",
    "name": "Faith Frontier Ecclesiastical Trust"
  }
}
</script>