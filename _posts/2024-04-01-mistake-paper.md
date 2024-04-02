---
layout: post
title: Paper Reading: Can LLMs Learn from Previous Mistakes? Investigating LLMs’ Errors to
Boost for Reasoning
date: 2024-04-01 11:59:00-0800
comments: true
categories: nlp


---

# TL;DR

The paper investigates whether Large Language Models (LLMs) can learn from their mistakes, particularly in reasoning tasks. 
It introduces a new benchmark called **COTERRORSET** with questions designed to include both correct and error references. 
The study proposes two methods:
    - Self-rethinking prompting
    - Mistake tuning 
to guide LLMs in learning from their mistakes. 
By analyzing the types and reasons for errors made by LLMs, the research aims to enhance LLMs' reasoning capabilities by leveraging their mistakes.

<div >
        {% include figure.html path="assets/img/mistake_paper/2024-03-paper-summary.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>