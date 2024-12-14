---
layout: post
title: "Markdown Style Demo"
date: 2024-03-14 12:00:00 +0100
categories: [demo]
---

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

This is a paragraph with **bold text**, *italic text*, and `inline code`. You can also [link to things](https://example.com).

Here's a quote:

> This is a blockquote. It can span multiple lines and is styled with a subtle border and italic text.
> 
> You can have multiple paragraphs too.

## Code Blocks

Here's a code block with syntax highlighting: 

```docker
FROM ruby:3.1-slim-bullseye

# Install essential Linux packages
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /site

# Copy Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install Jekyll and dependencies
RUN bundle install

# Copy the rest of the site
COPY . .

# Expose port 4000
EXPOSE 4000

# Set the default command
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"] 
```

> Here's a blockquote that contains other elements:
> 
> - A list item
> - Another item
> 
> And `some code` and **bold text**.



\newpage
\linenumbers

## Abstract

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue. Aliquet risus feugiat in ante metus. Massa id neque aliquam vestibulum morbi. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vitae semper quis lectus nulla at volutpat diam ut. Donec ultrices tincidunt arcu non sodales neque. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pharetra convallis posuere morbi leo urna molestie at. At tempor commodo ullamcorper a lacus vestibulum. Sagittis vitae et leo duis. At varius vel pharetra vel turpis. At tellus at urna condimentum mattis. Tristique senectus et netus et.

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue. Aliquet risus feugiat in ante metus. Massa id neque aliquam vestibulum morbi. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vitae semper quis lectus nulla at volutpat diam ut. Donec ultrices tincidunt arcu non sodales neque. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pharetra convallis posuere morbi leo urna molestie at. At tempor commodo ullamcorper a lacus vestibulum. Sagittis vitae et leo duis. At varius vel pharetra vel turpis. At tellus at urna condimentum mattis. Tristique senectus et netus et.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue. Aliquet risus feugiat in ante metus. Massa id neque aliquam vestibulum morbi. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vitae semper quis lectus nulla at volutpat diam ut. Donec ultrices tincidunt arcu non sodales neque. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pharetra convallis posuere morbi leo urna molestie at. At tempor commodo ullamcorper a lacus vestibulum. Sagittis vitae et leo duis. At varius vel pharetra vel turpis. At tellus at urna condimentum mattis. Tristique senectus et netus et.


## Materials and Methods

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue [@Stohl2010]. Aliquet risus feugiat in ante metus. Massa id neque aliquam vestibulum morbi. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vitae semper quis lectus nulla at volutpat diam ut. Donec ultrices tincidunt arcu non sodales neque. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pharetra convallis posuere morbi leo urna molestie at. At tempor commodo ullamcorper a lacus vestibulum. Sagittis vitae et leo duis. At varius vel pharetra vel turpis. At tellus at urna condimentum mattis. Tristique senectus et netus et.

## Results and Discussion

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue. Aliquet risus feugiat in ante metus. Massa id neque aliquam vestibulum morbi. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vitae semper quis lectus nulla at volutpat diam ut. Donec ultrices tincidunt arcu non sodales neque. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pharetra convallis posuere morbi leo urna molestie at. At tempor commodo ullamcorper a lacus vestibulum. Sagittis vitae et leo duis. At varius vel pharetra vel turpis. At tellus at urna condimentum mattis. Tristique senectus et netus et.

Table: Example table

!include tables/table.md

## Conclusions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue. Aliquet risus feugiat in ante metus. Massa id neque aliquam vestibulum morbi. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vitae semper quis lectus nulla at volutpat diam ut. Donec ultrices tincidunt arcu non sodales neque. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pharetra convallis posuere morbi leo urna molestie at. At tempor commodo ullamcorper a lacus vestibulum. Sagittis vitae et leo duis. At varius vel pharetra vel turpis. At tellus at urna condimentum mattis. Tristique senectus et netus et.

### Online content

Any method, additional references, statements of data availability and associated accession codes are available in attached supplementary document.

### Acknowledgements

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue. Aliquet risus feugiat in ante metus. Massa id neque aliquam vestibulum morbi. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Vitae semper quis lectus nulla at volutpat diam ut. Donec ultrices tincidunt arcu non sodales neque. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pharetra convallis posuere morbi leo urna molestie at. At tempor commodo ullamcorper a lacus vestibulum. Sagittis vitae et leo duis. At varius vel pharetra vel turpis. At tellus at urna condimentum mattis. Tristique senectus et netus et.

### Competing interests

The authors declare no conflict of interest.

### References

![alt text](https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=780&h=384&q=90&fit=crop&ar=16%3A10)

![alt text](https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-9.jpg)