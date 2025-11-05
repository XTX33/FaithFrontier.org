// main.js — Faith Frontier / Case Portal
// Lightweight, dependency-free utilities for navigation and accessibility.

(function () {
  'use strict';

  // -----------------------------
  // Small helpers
  // -----------------------------
  var $ = function (selector, scope) {
    return (scope || document).querySelector(selector);
  };

  var $$ = function (selector, scope) {
    return Array.prototype.slice.call(
      (scope || document).querySelectorAll(selector)
    );
  };

  var isGithubLikeHost = function () {
    var host = window.location.hostname;
    return host.endsWith('github.io') || host === 'localhost';
  };

  // -----------------------------
  // Mobile navigation toggle
  // Expects:
  //   <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">☰</button>
  //   <nav class="site-nav">...</nav>
  // -----------------------------
  var initMobileNav = function () {
    var toggle = $('.nav-toggle');
    var nav = $('.site-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  };

  // -----------------------------
  // Highlight active nav item
  // Matches current path to <a href="..."> in .site-nav
  // -----------------------------
  var initActiveNav = function () {
    var navLinks = $$('.site-nav a');
    if (!navLinks.length) return;

    var path = window.location.pathname.replace(/\/+$/, ''); // strip trailing slash

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      // Strip origin if absolute URL is used
      var linkPath = href.replace(/^https?:\/\/[^/]+/, '');
      linkPath = linkPath.replace(/\/+$/, '');

      if (linkPath && linkPath === path) {
        link.classList.add('is-active');
      }
    });
  };

  // -----------------------------
  // Smooth scroll for in-page anchors
  // Links like <a href="#main">Skip to content</a>
  // -----------------------------
  var initSmoothScroll = function () {
    document.addEventListener('click', function (evt) {
      var target = evt.target;

      // Walk up DOM tree if inside an <a>
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }
      if (!target) return;

      var href = target.getAttribute('href') || '';
      if (!href || href.charAt(0) !== '#') return;

      var id = href.slice(1);
      var el = document.getElementById(id);
      if (!el) return;

      evt.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Try to move focus for accessibility, if element can be focused
      if (typeof el.focus === 'function') {
        el.focus({ preventScroll: true });
      }
    });
  };

  // -----------------------------
  // External link handling:
  //   - Adds rel="noopener noreferrer"
  //   - Opens in new tab for off-site links
  // -----------------------------
  var initExternalLinks = function () {
    var origin = window.location.origin;

    $$('a[href^="http"]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      if (href.indexOf(origin) === 0) return; // same site

      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      link.classList.add('external-link');
    });
  };

  // -----------------------------
  // Static contact form handler
  // For <form name="contact"> on static hosts
  // -----------------------------
  var initContactForm = function () {
    var form = document.forms.contact;
    if (!form) return;

    form.addEventListener('submit', function (evt) {
      if (!isGithubLikeHost()) {
        // On a real backend, allow normal submission
        return;
      }
      evt.preventDefault();
      alert('Thanks! Your message has been submitted.');
      form.reset();
    });
  };

  // -----------------------------
  // Collapsible timelines (optional)
  // For long case timelines with .timeline and .timeline-toggle
  // -----------------------------
  var initTimelineToggle = function () {
    var toggles = $$('.timeline-toggle');
    if (!toggles.length) return;

    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetSelector = btn.getAttribute('data-target');
        var timeline =
          targetSelector ? $(targetSelector) : btn.closest('.timeline-wrapper');
        if (!timeline) return;

        var expanded = btn.getAttribute('aria-expanded') === 'true';
        var next = !expanded;

        btn.setAttribute('aria-expanded', String(next));
        timeline.classList.toggle('is-collapsed', !next);
      });
    });
  };

  // -----------------------------
  // DOM Ready
  // -----------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initActiveNav();
    initSmoothScroll();
    initExternalLinks();
    initContactForm();
    initTimelineToggle();
  });
})();