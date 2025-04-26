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
- [Experience](#section-experience)
  - [AB InBev — Growth Analytics Center (Data Scientist)](#exp-1)
  - [AB InBev — Growth Analytics Center (Data Science Intern)](#exp-2)
  - [Glenmark Pharmaceuticals — Demand Planning](#exp-3)
  - [Growth Source Financial Technologies (Protium)](#exp-4)
  - [Rephrase.AI](#exp-5)
- [Research](#section-research)
  - [Medical Data Science Group, D-INFK, ETH Zurich](#res-1)
  - [ETH Zurich (Deep Learning Project)](#res-2)
  - [Chair of Technology and Innovation Management, ETH Zurich](#res-3)
    - [Enterprise Machine Learning Research](#res-3-1)
    - [Unicode Technical Consortium](#res-3-2)
    - [Patent Analysis and Technological Shift Detection](#res-3-3)
  - [World Bank Group x KPMG India](#res-4)
  - [Capital Foods Pvt. Ltd.](#res-5)
  - [Indian School of Business](#res-6)
  - [Various Institutions](#res-7)
- [Extracurricular Activities](#section-extracurriculars)
- [International Exposure & Conferences](#section-international)

<div class="cv-download">
   <a href="/assets/files/Shazz_CV.pdf" class="btn btn--primary">
      <i class="fas fa-download"></i> Download Complete CV
   </a>
</div>

{% include cv-section.html
   title="Education"
   icon="graduation-cap"
   anchor="section-education"
   entries=site.data.cv.education %}

{% include cv-section.html
   title="Scholarships, Medals & Distinctions"
   icon="award"
   anchor="section-awards"
   entries=site.data.cv.awards %}

{% include cv-section.html
   title="Technical Skills"
   icon="laptop-code"
   anchor="section-skills"
   entries=site.data.cv.technical_skills %}

{% include cv-section.html
   title="Experience"
   icon="briefcase"
   anchor="section-experience"
   entries=site.data.cv.experience
   entry_prefix="exp" %}

{% include cv-section.html
   title="Research"
   icon="flask"
   anchor="section-research"
   entries=site.data.cv.research
   entry_prefix="res" %}

{% include cv-section.html
   title="Extracurricular Activities"
   icon="users"
   anchor="section-extracurriculars"
   entries=site.data.cv.extracurriculars %}

{% include cv-section.html
   title="International Exposure & Conferences"
   icon="globe"
   anchor="section-international"
   entries=site.data.cv.international %}
