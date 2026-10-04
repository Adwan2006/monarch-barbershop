(() => {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const config = window.MONARCH_CONFIG || {};
  const services = { 'Signature Cut': [45, 45], 'Skin Fade': [50, 50], 'Beard Ritual': [30, 30], 'The Full Service': [75, 70] };
  const menu = $('.menu-toggle');
  const nav = $('#navigation');
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  const mobileQuery = matchMedia('(max-width: 760px)');
  mobileQuery.addEventListener('change', closeMenu);
  let lastTrigger;
  function openDialog(dialog, trigger) { lastTrigger = trigger; dialog.showModal(); document.body.classList.add('modal-open'); }
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { const box = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close(); });
    dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); if (lastTrigger) lastTrigger.focus({ preventScroll: true }); });
  });
  function externalUrl(value) { try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch { return null; } }
  function summary() { const [minutes, price] = services[$('#service').value]; $('#booking-summary').textContent = `${minutes} minutes · $${price}`; }
  function resetBooking() { $('#booking-form').hidden = false; $('#booking-result').hidden = true; }
  document.querySelectorAll('[data-book]').forEach(trigger => trigger.addEventListener('click', event => {
    event.preventDefault(); closeMenu();
    const url = externalUrl(config.bookingUrl);
    if (url) { window.location.assign(url); return; }
    resetBooking(); $('#service').value = trigger.dataset.service || 'Signature Cut'; $('#barber').value = trigger.dataset.barber || 'First available'; summary(); openDialog($('#booking-dialog'), trigger);
  }));
  $('#service').addEventListener('change', summary);
  $('#booking-form').addEventListener('submit', event => {
    event.preventDefault();
    const service = $('#service').value; const barber = $('#barber').value; const [minutes, price] = services[service];
    $('#booking-result-text').textContent = `${service} · ${minutes} minutes · $${price}. ${barber === 'First available' ? 'With the first available barber.' : `With ${barber}.`}`;
    $('#booking-form').hidden = true; $('#booking-result').hidden = false; $('#booking-reset').focus();
  });
  $('#booking-reset').addEventListener('click', () => { resetBooking(); $('#service').focus(); });
  document.querySelectorAll('[data-image]').forEach(trigger => trigger.addEventListener('click', () => {
    $('#gallery-full').src = trigger.dataset.image; $('#gallery-full').alt = trigger.querySelector('img').alt; $('#gallery-caption').textContent = trigger.dataset.caption; openDialog($('#gallery-dialog'), trigger);
  }));
  const reviews = [
    ['“The kind of place where you don’t have to explain yourself twice. A great cut, no rush, and a chair I’ll happily come back to.”', 'JAMIE R.'],
    ['“I came in with a vague idea and left with a cut that actually works for my mornings. Thoughtful from start to finish.”', 'CHRIS D.'],
    ['“A quiet half hour, a hot towel, and a beard that finally feels like me. The little details made the whole visit.”', 'SAM T.']
  ];
  let review = 0;
  function changeReview(direction) { review = (review + direction + reviews.length) % reviews.length; $('#review-quote').textContent = reviews[review][0]; $('#review-name').replaceChildren(document.createTextNode(reviews[review][1])); const sample = document.createElement('small'); sample.textContent = ' / SAMPLE REVIEW'; $('#review-name').append(sample); $('#review-count').textContent = `0${review + 1} / 03`; }
  $('#review-prev').addEventListener('click', () => changeReview(-1)); $('#review-next').addEventListener('click', () => changeReview(1));
  function showInfo(trigger, paragraphs) { const target = $('#info-content'); target.replaceChildren(); paragraphs.forEach(text => { const p = document.createElement('p'); p.textContent = text; target.append(p); }); openDialog($('#info-dialog'), trigger); }
  $('#contact-open').addEventListener('click', event => { const url = externalUrl(config.contactUrl); if (url) { window.location.assign(url); return; } showInfo(event.currentTarget, ['Thanks for stopping by. Monarch is a fictional barbershop concept created as a portfolio project for Yousef.', 'There is no real shop, phone number, or inbox attached to this demo. Contact can be connected to a hosted form or a business contact page when this design is adapted for a client.']); });
  $('#privacy-open').addEventListener('click', event => showInfo(event.currentTarget, ['Monarch, its team, address, prices, opening hours, and testimonials are fictional illustrative content. All photography is AI-generated for this project and does not document actual people or a real business.', 'This demo uses no analytics, cookies, local storage, payment collection, or form submission. Booking selections remain in this page’s memory and disappear when you refresh. The hosting provider may keep standard access logs.', 'Optional external booking or contact links, if configured by the site owner, lead to providers with their own privacy policies.']));
  $('#year').textContent = new Date().getFullYear();
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element)); document.documentElement.classList.add('motion');
  }
})();
