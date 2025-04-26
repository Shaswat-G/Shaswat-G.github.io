---
title: "Research at ETH Zurich"
excerpt: "Center of Technology and Innovation Management"
sidebar:
  nav: "CTIM Research"
toc: true
toc_sticky: true
header:
  teaser: /assets/images/projects/ethz.jpg
---

I presently work part-time as a research assistant at the [Chair of Technology and Innovation Management](https://timgroup.ethz.ch/) at ETH Zurich, under the supervision of [Prof. Dr. Stefano Brusoni](https://timgroup.ethz.ch/people/group-leadership/stefano-brusoni.html). My work focuses on the intersection of machine learning, data engineering, and technical analysis, with a strong emphasis on automating complex workflows and enhancing data-driven decision-making processes.

## Enterprise ML & Technical Analysis Projects

_March 2024 - January 2025_

Led the data engineering and analytical components of a large-scale research collaboration between ETH Zurich and Zühlke, investigating machine learning and AI adoption patterns across 600+ enterprises in Europe and North America. This comprehensive study spanned multiple industries including consumer discretionary, IT, manufacturing, financial services, and healthcare sectors.

<div class="page__download" style="text-align:center; margin: 2em 0;">
  <a href="https://www.zuehlke.com/en/insights/ais-tangible-business-impact-5-key-learnings-from-zuhlke-eth-zurich" class="btn btn--primary" target="_blank" rel="noopener">
    <i class="fab fa-github"></i> View Exec Summary
  </a>
</div>

<div class="page__download" style="text-align:center; margin: 2em 0;">
  <a href="https://www.zuehlke.com/system/files/documents/Zuhlke_Whitepaper_AI_impact.pdf" class="btn btn--primary" download>
    <i class="fas fa-file-pdf"></i> Download Full Report (PDF)
  </a>
</div>

### Technical Implementation

- **End-to-End Data Pipeline**: Architected a comprehensive data processing framework integrating multiple sources (Prolific survey responses, Qualtrics data, demographics) with robust cleaning, standardization, and anonymization processes
- **Statistical Analysis Engine**: Developed an automated testing framework executing 10,000+ statistical tests (t-tests, ANOVA, Kruskal-Wallis, Chi-Square, Levene's, Mann-Whitney U) with intelligent test selection based on data characteristics
- **NLP & AI Integration**: Implemented text classification pipelines utilizing OpenAI's LLM APIs for categorization of free-text responses and sentiment analysis
- **Dynamic Visualization System**: Created a visualization engine generating 2,600+ charts automatically selected based on variable types and distributions
- **Automated Reporting**: Engineered systems to transform complex statistical outputs into business-friendly formats through programmatic Excel reporting

### Technologies

```python
# Core Data Stack
import pandas as pd
import numpy as np
import scipy.stats as stats
import statsmodels.api as sm

# Visualization
import matplotlib.pyplot as plt
import seaborn as sns

# NLP & ML
from openai import OpenAI
```

### Impact & Outcomes

- Reduced manual analysis time by 80% through comprehensive automation workflows
- Identified statistically significant ML adoption patterns across regions, company sizes, and industry sectors
- Created a reproducible research framework now used for ongoing studies at the Chair
- Generated actionable insights on ethical considerations, operational efficiency, and strategic ML/AI integration that informed the final research publication

---

## Unicode Technical Consortium Document Analysis

Developed a comprehensive system to analyze 20,000+ technical documents from the Unicode Technical Consortium spanning a decade of standardization history. This project enabled identification of key technological trends, particularly in emoji standardization and adoption patterns.

<div class="page__download" style="text-align:center; margin: 2em 0;">
  <a href="https://github.com/Shaswat-G/emoji" class="btn btn--primary" target="_blank" rel="noopener">
    <i class="fab fa-github"></i> View on GitHub
  </a>
</div>

### Technical Implementation

- **Scalable Web Crawling**: Engineered concurrent HTTP request handling with automatic retry logic and connection pooling, achieving 94% successful download rate for heterogeneous document sources
- **Multi-format Document Processing**: Built extraction engines for PDF, HTML, and plaintext documents with format-adaptive parsers handling the evolution of UTC's document repository structure
- **Document Classification System**: Developed a hierarchical classifier with 30+ document categories using domain-specific keyword patterns and regex-based boundary matching
- **Keyword Extraction Framework**: Implemented parallel processing using multiple algorithms (RAKE-NLTK, YAKE) for comprehensive content summarization
- **LLM Integration**: Engineered configurable OpenAI API client with token optimization techniques reducing API costs by 42% while maintaining extraction quality

### Technologies

```python
# Web Scraping & Document Processing
import asyncio
import aiohttp
from bs4 import BeautifulSoup
import PyPDF2

# NLP & Text Analysis
import nltk
from rake_nltk import Rake
import yake
from sklearn.feature_extraction.text import TfidfVectorizer

# LLM Integration
from openai import OpenAI
```

### Impact & Outcomes

- Created a comprehensive emoji reference database mapping 5,000+ emoji representations across different notation systems
- Enabled identification of cyclical patterns in Unicode standardization process
- Developed attribution analysis identifying key contributors and their influence over time
- Built visualization packages for temporal trends, category distributions, and emoji adoption patterns
- Reduced overall project costs by 31% through intelligent API usage and batch optimization

---

## Patent Analysis for Technological Shift Detection

Designed and implemented an advanced system for analyzing patent data from semiconductor companies to identify technological shifts and innovation patterns. This project processed 10,000+ patents across multiple decades to reveal strategic technology adoption trends in the semiconductor industry.

<div class="page__download" style="text-align:center; margin: 2em 0;">
  <a href="https://github.com/Shaswat-G/tech-shift" class="btn btn--primary" target="_blank" rel="noopener">
    <i class="fab fa-github"></i> View on GitHub
  </a>
</div>

### Technical Implementation

- **High-Performance Data Acquisition**: Built an asyncio-powered concurrent scraping system with intelligent session management, achieving 20x faster processing compared to sequential approaches
- **Text Optimization Pipeline**: Engineered token optimization for 15,000+ patent documents to fit within embedding windows while preserving critical technical information
- **Topic Modeling**: Deployed BERTopic with Sentence Transformers embeddings to identify 80+ distinct technology clusters across 20+ years of semiconductor industry patents
- **Domain-Specific Filtering**: Implemented LLM integration using OpenAI models to distinguish semiconductor-specific patents from general technology with 95% accuracyResearch Assistant at [Chair of Technology and Innovation Management](#) under [Prof. Name](#)\*  
  _August 2023 - December 2023_
- **Technological Shift Detection**: Created visualization and analysis of topic trends over time, identifying 5 major technological shifts in the semiconductor industry

### Technologies

```python
# Concurrent Processing
import asyncio
import aiohttp

# NLP & Embeddings
from sentence_transformers import SentenceTransformer
from bertopic import BERTopic
import umap
import hdbscan

# GPU Acceleration
import torch

# LLM Integration
from openai import OpenAI
```

### Impact & Outcomes

- Enabled identification of emerging technological areas and company-specific innovation patterns
- Created time-series analysis of patent trends through temporal tracking of topic distributions
- Developed a modular, configuration-driven pipeline that scaled from single-company to industry-wide analysis
- Produced visual representations of technological evolution in the semiconductor industry
- Built a reusable framework for patent analysis that can be applied to other technology sectors

---

## License

This project is licensed under the [MIT License](/assets/files/MIT_License.md).
