---
layout: cv
title:
permalink: /cv/
header:
  overlay_image: /assets/images/cv-header.png
#   overlay_filter: rgba(0, 0, 0, 0.6)
---

{% include cv-section.html 
   title="Experience" 
   icon="briefcase" 
   entries=site.data.cv.experience %}

{% include cv-section.html 
   title="Education" 
   icon="graduation-cap" 
   entries=site.data.cv.education %}
