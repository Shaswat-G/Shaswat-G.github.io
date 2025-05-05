---
layout: cv
title: Shazz's CV
permalink: /cv/
header:
  overlay_image: /assets/images/cv-header.png
#   overlay_filter: rgba(0, 0, 0, 0.6)
author_profile: true
---

## Table of Contents

- [Education](#section-education)
- [Scholarships, Medals & Distinctions](#section-awards)
- [Technical Skills](#section-skills)
- [Professional Experience](#section-experience)
- [Research Experience](#section-research)
- [Extracurricular Activities](#section-extracurriculars)
- [International Exposure & Conferences](#section-international)

<div class="cv-download">
   <a href="/assets/files/Shazz_CV.pdf" class="btn btn--primary">
      <i class="fas fa-download"></i> Download Complete CV
   </a>
</div>

<details id="section-education" open>
  <summary>
    <strong>Education</strong>
    <span class="cv-section-summary">
      High-achieving computer science graduate from ETH Zürich (5.25/6 GPA) and IIT Bombay (9.6/10 GPA, Gold Medalist)
    </span>
  </summary>

{% include cv-section.html
   title="Education"
   icon="graduation-cap"
   anchor="section-education"
   entries=site.data.cv.education %}

</details>

<details id="section-awards">
  <summary>
    <strong>Scholarships, Medals & Distinctions</strong>
    <span class="cv-section-summary">
      Recognized for academic excellence and leadership through multiple awards and scholarships
    </span>
  </summary>

{% include cv-section.html
   title="Scholarships, Medals & Distinctions"
   icon="award"
   anchor="section-awards"
   entries=site.data.cv.awards %}

</details>

<details id="section-skills">
  <summary>
    <strong>Technical Skills</strong>
    <span class="cv-section-summary">
      Proficient in machine learning, data engineering, and cloud technologies
    </span>
  </summary>

{% include cv-section.html
   title="Technical Skills"
   icon="laptop-code"
   anchor="section-skills"
   entries=site.data.cv.technical_skills %}

</details>

<details id="section-experience">
  <summary>
    <strong>Professional Experience</strong>
    <span class="cv-section-summary">
      Experienced in delivering business impact through advanced machine learning
    </span>
  </summary>

{% include cv-section.html
   title="Experience"
   icon="briefcase"
   anchor="section-experience"
   entries=site.data.cv.experience
   entry_prefix="exp" %}

</details>

<details id="section-research">
  <summary>
    <strong>Research Experience</strong>
    <span class="cv-section-summary">
      Applied ML researcher at ETH Zurich
    </span>
  </summary>

{% include cv-section.html
   title="Research"
   icon="flask"
   anchor="section-research"
   entries=site.data.cv.research
   entry_prefix="res" %}

</details>

<details id="section-extracurriculars">
  <summary>
    <strong>Extracurricular Activities</strong>
    <span class="cv-section-summary">
      Active student leader across journalism, analytics, with creative pursuits and Mensa membership.
    </span>
  </summary>

{% include cv-section.html
   title="Extracurricular Activities"
   icon="users"
   anchor="section-extracurriculars"
   entries=site.data.cv.extracurriculars %}

</details>

<details id="section-international">
  <summary>
    <strong>International Exposure & Conferences</strong>
    <span class="cv-section-summary">
      Handpicked for international exchanges and global conferences
    </span>
  </summary>

{% include cv-section.html
   title="International Exposure & Conferences"
   icon="globe"
   anchor="section-international"
   entries=site.data.cv.international %}

</details>
