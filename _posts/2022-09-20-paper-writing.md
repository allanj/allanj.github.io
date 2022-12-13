---
layout: post
title: My Personal Practice in ACL Paper Formatting
date: 2022-07-30 11:59:00-0800
comments: true
categories: nlp

toc:
  - name: Introduction
  - name: Research Motivation
  - name: Problem Description
  - name: Existing Methods
  - name: Deductive Reasoning
  - name: Deductive Systems
  - name: Model Implementation
  - name: Experiments
  - name: Interpretable Analysis
  - name: Conclusions
  - name: References

---


This post summarizes some personal practice in formatting ACL-style papers. It can 
such as content of each section and formatting in writing ACL-style papers. The following can serve as a reference for beginners but may not apply to all types of writing in general as the situation for different topics/papers would be different. 


# Figure

1. __Tikz__: I often draw figures/chart with the `tikz` package as the visualization makes the figure seem like built-in rather than embedded. 
Getting started with this package can be very painful. But once you gets your hand dirty, you would feel much faster to draw. 

   One of my favorite figures when I started using `tikz` is the dynamic programming inference in Eisner's dependency parsing algorithm. The figure is partially shown below.
<div>  
        {% include figure.html path="assets/img/paper-writing/dynamic-programming.png" class="img-fluid rounded z-depth-2" zoomable=true %}
</div> 


2. __Matplotlib__: this is useful when we try to convey a much more comprehensive message via the visualization using matplotlib rather than just table. We all know that sometimes table cannot really share what we want to express to the readers. For example, heatmap and bar chart. (Note that, `tikz` can help you with that too.)

3. __Draw.io__: I often use this tool to prototype some figures because it is quite easy to use and user-friendly. I also saw some papers draw pretty nice figure using this tool. 

_Tips_: Sometimes if you find the figures in arxiv papers are attractive, you may be able to download the latex files to check out their tex files for the actual image code/files.

# Table 
* My advisor suggested us use the __booktabs__ package. Check out this blog for introduction. [https://nhigham.com/2019/11/19/better-latex-tables-with-booktabs/](https://nhigham.com/2019/11/19/better-latex-tables-with-booktabs/)
* Dashline: `\cdashlinelr{1-4}` add a dash line from column 1 to 4.

# Content Structure
The abstract and introduction are probably the most important sections that we need to pay attention to. 
* __Abstract__: Make your motivation clear and go straight to what you propose/present. Try to elaborate how exciting your research is. 
* __Introduction__: Again, explain your motivation in details and try to make it clear. Then, how are you going to propose something to solve the problems that mentioned in the motivation. It would be good to have a figure to illustrate "such motivation and your proposed solution". 

  Usually the figure could be quite effective to make reviewer quickly understand what you are trying to do since figure is usually something capture our attention first. You definitely want to make it nice, clear, and exciting. 

# Overcome the Page Limit
We often put too much content which go over the 4/8-page limit in ACL papers. Here are some of the tips people usually use to squeeze the space when they submit the paper.
1. `adjustbox`: basically, you can adjust your figure/table with the number `0.95` below. The scale can be set within `[0,1]`. `1` means fit the size of the comumn
```tex
\begin{figure}
      \adjustbox{max width=0.95\linewidth}{
        % your figure/table
      }
\end{figure}
```
2. `vspace`: it is only suggested to squeeze the space between caption and figure/table, space between caption and following content. 
```tex
\begin{figure}
    ....
  \vspace{-2mm}
  \caption{Your image/table caption}
\end{figure}
```
3. __Squeezed Itemized/enumerate__: the original `itemize` takes a too much space and not really elegant presented in the paper. We simply use a squeeze version below
```tex
% first define some new commands
%
\newcommand{\squishlist}{
\begin{list}{$\bullet$}
{   \setlength{\itemsep}{0pt}
      \setlength{\parsep}{3pt}
      \setlength{\topsep}{3pt}
      \setlength{\partopsep}{0pt}
      \setlength{\leftmargin}{1.5em}
      \setlength{\labelwidth}{1em}
      \setlength{\labelsep}{0.5em} } }
%
\newcounter{Lcount}
\newcommand{\squishlisttwo}{
\begin{list}{\arabic{Lcount}. }
  { \usecounter{Lcount}
    \setlength{\itemsep}{0pt}
    \setlength{\parsep}{0pt}
    \setlength{\topsep}{0pt}
    \setlength{\partopsep}{0pt}
    \setlength{\leftmargin}{2em}
    \setlength{\labelwidth}{1.5em}
    \setlength{\labelsep}{0.5em} } }
%
\newcommand{\squishend}{\end{list} }
%
% to use the new command below
% create an itemize list
\squishlist
  \item this is the first item
\squishend
%
% create an enumerate list
\squishlist2
  \item this is the first item
\squishend
```
4. __Equation__: Someitmes the equations (_i.e._, `{equation}` package) rendered by Latex takes too much space. We can use the following script to replace `equation`
```tex
\begin{center}
     \begin{tabular}{c}
     $
         x + y = 2
     $
     \end{tabular}
\end{center}
```
5. __Simple Latex Tricks__:  
* use `\S` to represent Section
* Use smaller font size if your figure is too large. Overleaf shows a nice family of [commands](https://www.overleaf.com/learn/latex/Font_sizes%2C_families%2C_and_styles) for different font size. 
* Use footnote to describe something not really important but still meaningful. 

