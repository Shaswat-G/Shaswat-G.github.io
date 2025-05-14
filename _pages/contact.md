---
layout: single
title: "Contact"
permalink: /contact/
---

<section class="contact-section">
  <h2>Contact Shaswat</h2>
  <form action="https://formspree.io/f/mvgavnka" method="POST">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit">Send</button>
  </form>
  <p style="margin-top:1em; color:#888; font-size:0.97em;">Your message will be sent securely via Formspree. Please do not include sensitive information.</p>
</section>

<style>
  .contact-section { max-width: 540px; margin: 2.5em auto; background: #f8fafd; padding: 2.5em 2em; border-radius: 1em; box-shadow: 0 2px 14px rgba(42,122,226,0.07); }
  .contact-section h2 { color: #2a7ae2; margin-bottom: 1.2em; }
  .form-group { margin-bottom: 1.3em; }
  label { display: block; margin-bottom: 0.4em; font-weight: 500; }
  input, textarea { width: 100%; padding: 0.7em; border: 1px solid #c7d0e1; border-radius: 0.4em; font-size: 1em; }
  button[type="submit"] { background: #2a7ae2; color: #fff; border: none; padding: 0.8em 2.2em; border-radius: 0.4em; font-size: 1.08em; font-weight: 600; cursor: pointer; transition: background 0.18s; }
  button[type="submit"]:hover { background: #174a8b; }
</style>
