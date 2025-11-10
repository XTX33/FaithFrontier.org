---
layout: default
title: "Field Notes & Faith Essays"
permalink: /blog/
description: "Collected writings from Faith Frontier — proclamations, ministry charters, constitutional reflections, and public-trust meditations."
body_class: page-blog
---

<section class="section blog-index" aria-labelledby="blog-heading">
  <div class="container blog-shell">

    <header class="blog-hero">
      <p class="hero-eyebrow">Field Notes from the Frontier</p>
      <h1 id="blog-heading">Essays, Proclamations &amp; Declarations</h1>
      <p class="lead">
        Writings that sit where <strong>Scripture, conscience, and civil order</strong> collide —
        from ecclesiastical deed polls and ministry charters to reflections on food systems,
        constitutional covenant, and common-law revelations.
      </p>
      <p class="microcopy">
        These posts are not legal advice. They are records of how one tradesman and litigant
        has tried to hold law, policy, and power accountable to something higher than themselves.
      </p>
    </header>

    {% assign posts_sorted = site.posts | sort: "date" | reverse %}

    {% if posts_sorted == empty %}
      <p class="microcopy center mt-2">
        No essays are live yet. As writings are edited and released for public view,
        they will appear here with dates and brief summaries.
      </p>
    {% else %}
      <ul class="post-cards" aria-label="Faith Frontier essays and field notes">
        {% for post in posts_sorted %}
          <li class="post-card">
            <article class="post-card-inner">
              <header class="post-card-header">
                <p class="post-card-meta">
                  <time datetime="{{ post.date | date_to_xmlschema }}">
                    {{ post.date | date: "%B %e, %Y" }}
                  </time>
                </p>
                <h2 class="post-card-title">
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </h2>
              </header>

              {% if post.description %}
                <p class="post-card-excerpt">
                  {{ post.description }}
                </p>
              {% elsif post.excerpt %}
                <p class="post-card-excerpt">
                  {{ post.excerpt | strip_html | truncatewords: 40 }}
                </p>
              {% endif %}

              {% if post.tags %}
                <p class="post-card-tags">
                  {% for tag in post.tags %}
                    <span class="tag">{{ tag }}</span>
                  {% endfor %}
                </p>
              {% endif %}

              <p class="post-card-cta">
                <a class="btn btn-ghost" href="{{ post.url | relative_url }}">
                  Read this piece &rarr;
                </a>
              </p>
            </article>
          </li>
        {% endfor %}
      </ul>
    {% endif %}

  </div>
</section>

<style>
  /* ==============================
     Faith Frontier — Blog Index
     ============================== */

  body.page-blog {
    background: #020617;
  }

  .blog-index {
    padding: 3.5rem 1.5rem 4rem;
  }

  .blog-shell {
    max-width: 960px;
    margin: 0 auto;
  }

  /* Hero / intro */
  .blog-hero {
    max-width: 46rem;
    margin: 0 auto 2.75rem;
    text-align: left;
  }

  .blog-hero .hero-eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.78rem;
    margin-bottom: 0.5rem;
    color: #22c55e;
  }

  .blog-hero h1 {
    margin: 0 0 0.75rem;
    font-size: 1.9rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(248, 250, 252, 0.96);
  }

  .blog-hero .lead {
    font-size: 1.02rem;
    line-height: 1.7;
    color: #e5e7eb;
    margin-bottom: 0.5rem;
  }

  .blog-hero .microcopy {
    font-size: 0.9rem;
    color: rgba(148, 163, 184, 0.96);
    margin: 0.35rem 0 0;
  }

  /* Cards grid */
  .post-cards {
    list-style: none;
    margin: 2.25rem 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .post-cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .post-card {
    margin: 0;
  }

  .post-card-inner {
    height: 100%;
    border-radius: 1rem;
    border: 1px solid rgba(148, 163, 184, 0.7);
    padding: 1.4rem 1.3rem 1.3rem;
    background:
      radial-gradient(circle at top left, rgba(34, 197, 94, 0.12), rgba(15, 23, 42, 0.98));
    box-shadow: 0 14px 32px rgba(15, 23, 42, 0.82);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    transition:
      transform 0.16s ease,
      box-shadow 0.16s ease,
      border-color 0.16s ease,
      background 0.16s ease;
  }

  .post-card-inner:hover {
    transform: translateY(-2px);
    border-color: rgba(212, 175, 55, 1);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.9);
    background:
      radial-gradient(circle at top left, rgba(212, 175, 55, 0.18), rgba(15, 23, 42, 1));
  }

  .post-card-header {
    margin-bottom: 0.15rem;
  }

  .post-card-meta {
    margin: 0 0 0.25rem;
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(148, 163, 184, 0.9);
  }

  .post-card-title {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.35;
  }

  .post-card-title a {
    text-decoration: none;
    color: #f9fafb;
    position: relative;
  }

  .post-card-title a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.08em;
    width: 0;
    height: 2px;
    background: rgba(212, 175, 55, 1);
    transition: width 0.18s ease;
  }

  .post-card-inner:hover .post-card-title a::after {
    width: 100%;
  }

  .post-card-excerpt {
    margin: 0.25rem 0 0;
    font-size: 0.94rem;
    line-height: 1.65;
    color: #e5e7eb;
  }

  .post-card-tags {
    margin: 0.35rem 0 0;
    font-size: 0.8rem;
    color: rgba(148, 163, 184, 0.95);
  }

  .post-card-tags .tag {
    display: inline-block;
    margin: 0 0.35rem 0.2rem 0;
    padding: 0.16rem 0.5rem;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.6);
    font-size: 0.74rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .post-card-cta {
    margin-top: auto;
  }

  .post-card-cta .btn.btn-ghost {
    font-size: 0.88rem;
    padding: 0.4rem 0.85rem;
  }

  /* Empty state */
  .blog-index .microcopy.center {
    max-width: 30rem;
    margin: 2rem auto 0;
    text-align: center;
    color: rgba(148, 163, 184, 0.96);
  }
</style>
