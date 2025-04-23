---
layout: cv
title:
permalink: /cv/
header:
  overlay_image: /assets/images/cv-header.png
#   overlay_filter: rgba(0, 0, 0, 0.6)
---

{% include cv-section.html
   title="Education"
   icon="graduation-cap"
   entries=site.data.cv.education %}

{% include cv-section.html
   title="Scholarships, Medals & Distinctions"
   icon="award"
   entries=site.data.cv.awards %}

{% include cv-section.html
   title="Technical Skills"
   icon="laptop-code"
   entries=site.data.cv.technical_skills %}

{% include cv-section.html
   title="Experience"
   icon="briefcase"
   entries=site.data.cv.experience %}

{% include cv-section.html
   title="Research"
   icon="flask"
   entries=site.data.cv.research %}

{% include cv-section.html
   title="Extracurricular Activities"
   icon="users"
   entries=site.data.cv.extracurriculars %}

{% include cv-section.html
   title="International Exposure & Conferences"
   icon="globe"
   entries=site.data.cv.international %}