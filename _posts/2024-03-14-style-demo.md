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


I'll create 8 multiple choice questions based on the provided documents about the upper limb anatomy. I'll list the answers separately at the end.

1. Which of the following is NOT a component of the proximal row of carpal bones?
   a) Lunate
   b) Triquetrum
   c) Scaphoid
   d) Trapezium
   e) Pisiform

2. The radio-carpal joint has which of the following characteristics?
   a) It's a pivot joint with one degree of freedom
   b) It's a ball-and-socket joint with two degrees of freedom
   c) It's an ellipsoidal joint with two concavities
   d) It's a saddle joint with three degrees of freedom
   e) It's a plane joint with limited motion

3. The flexor muscles in the anterior compartment of the forearm are arranged in how many layers?
   a) Two layers
   b) Three layers
   c) Four layers
   d) Five layers
   e) Six layers

4. Which of the following muscles is part of the deep layer of flexor-pronator muscles?
   a) Pronator teres
   b) Flexor carpi radialis
   c) Flexor digitorum superficialis
   d) Palmaris longus
   e) Pronator quadratus

5. The TFCC (triangular fibrocartilage complex) has which primary function?
   a) Enables flexion of the wrist
   b) Stabilizes the wrist at the distal radioulnar joint
   c) Provides attachment for the extensor tendons
   d) Facilitates thumb opposition
   e) Controls wrist rotation

6. In the wrist, the range of adduction (ulnar deviation) is approximately:
   a) 15 degrees
   b) 25 degrees
   c) 35 degrees
   d) 45 degrees
   e) 55 degrees

7. The extensor retinaculum of the wrist serves which primary purpose?
   a) Generates wrist extension
   b) Attaches to the pisiform bone
   c) Prevents displacement of tendons during hand extension
   d) Connects the radius and ulna
   e) Forms the carpal tunnel

8. Which of the following statements about the palmaris longus is correct?
   a) It's a deep flexor muscle
   b) It inserts into the second metacarpal
   c) It originates from the radius
   d) It extends into the flexor retinaculum and palmar aponeurosis
   e) It's the primary wrist flexor



Here are 8 more multiple choice questions based on the provided documents:

9. What is the range of flexion at the wrist joint from the reference position?
   a) 45 degrees
   b) 55 degrees
   c) 65 degrees
   d) 75 degrees
   e) 85 degrees

10. The lumbrical muscles in the hand contribute to which movements?
    a) Extension of MCP joints and flexion of PIP joints
    b) Flexion of MCP joints and extension of PIP joints
    c) Abduction of digits only
    d) Adduction of digits only
    e) Opposition of the thumb

11. Which of the following muscles belongs to the hypothenar group?
    a) Opponens pollicis
    b) Flexor pollicis brevis
    c) Opponens digiti minimi
    d) First dorsal interossei
    e) Adductor pollicis

12. The palmar and dorsal interossei muscles total how many muscles?
    a) 5 muscles
    b) 6 muscles
    c) 7 muscles
    d) 8 muscles
    e) 9 muscles

13. In the wrist, the range of abduction (radial deviation) is approximately:
    a) 5 degrees
    b) 10 degrees
    c) 15 degrees
    d) 20 degrees
    e) 25 degrees

14. Which of the following is TRUE about the pisiform bone?
    a) It's part of the radio-carpal joint articulation
    b) It articulates with the trapezium
    c) It's part of the distal row of carpal bones
    d) It's in contact with the palmar surface of the triquetrum
    e) It articulates directly with the radius

15. The extrinsic extensors of the digits include all of the following EXCEPT:
    a) Extensor digitorum communis
    b) Extensor indicis proprius
    c) Extensor digiti minimi
    d) Extensor carpi ulnaris
    e) Abductor pollicis longus

16. The flexor digitorum superficialis:
    a) Attaches to the distal phalanges
    b) Originates from the ulna only
    c) Inserts into the middle phalanges of the medial four digits
    d) Is part of the deep flexor layer
    e) Only flexes the proximal interphalangeal joints


Here are 8 more multiple choice questions based on the provided documents:

17. The mid-carpal joint is formed between:
    a) The radius and proximal row of carpals
    b) The ulna and proximal row of carpals
    c) The proximal and distal rows of carpal bones
    d) The distal row of carpals and metacarpals
    e) The radius and ulna

18. The flexor carpi ulnaris inserts into:
    a) The base of the second metacarpal
    b) The flexor retinaculum only
    c) The hamate bone only
    d) The pisiform, hook of hamate, and 5th metacarpal
    e) The palmar aponeurosis

19. The anterior ligaments of the wrist consist of:
    a) Only the palmar radiocarpal ligament
    b) Only the palmar ulnocarpal ligament
    c) Both palmar radiocarpal and palmar ulnocarpal ligaments
    d) The transverse carpal ligament only
    e) The collateral ligaments only

20. The capitate bone articulates with:
    a) Only the scaphoid
    b) Only the lunate
    c) The scaphoid and lunate
    d) The pisiform and triquetrum
    e) Only the trapezoid

21. During wrist movements, the function of ligaments includes:
    a) The lateral ligament is stretched during adduction only
    b) The medial ligament is stretched during adduction only
    c) Both anterior and posterior ligaments are stretched during flexion
    d) The posterior ligament is stretched during extension
    e) The posterior ligament is stretched during flexion

22. The flexor digitorum profundus:
    a) Originates from the radius
    b) Inserts into the middle phalanges
    c) Is part of the superficial flexor layer
    d) Flexes the distal phalanges of all digits
    e) Only affects the index and middle fingers

23. The trapezium articulates with:
    a) The ulna proximally
    b) The first metacarpal distally
    c) The pisiform laterally
    d) The third metacarpal distally
    e) The hamate medially

24. The extensor pollicis brevis:
    a) Originates from the ulna
    b) Inserts into the distal phalanx of the thumb
    c) Is part of the superficial extensor layer
    d) Originates from the posterior surface of the distal third of radius
    e) Extends only the interphalangeal joint


















ANSWERS (Don't look until you've attempted the questions!):
.
.
.
.
.
1. d) Trapezium
2. c) It's an ellipsoidal joint with two concavities
3. b) Three layers
4. e) Pronator quadratus
5. b) Stabilizes the wrist at the distal radioulnar joint
6. d) 45 degrees
7. c) Prevents displacement of tendons during hand extension
8. d) It extends into the flexor retinaculum and palmar aponeurosis
.
.
.
.
.
9. e) 85 degrees
10. b) Flexion of MCP joints and extension of PIP joints
11. c) Opponens digiti minimi
12. c) 7 muscles (3 palmar and 4 dorsal)
13. c) 15 degrees
14. d) It's in contact with the palmar surface of the triquetrum
15. d) Extensor carpi ulnaris
16. c) Inserts into the middle phalanges of the medial four digits

.
.
.
.
.
17. c) The proximal and distal rows of carpal bones
18. d) The pisiform, hook of hamate, and 5th metacarpal
19. c) Both palmar radiocarpal and palmar ulnocarpal ligaments
20. c) The scaphoid and lunate
21. e) The posterior ligament is stretched during flexion
22. d) Flexes the distal phalanges of all digits
23. b) The first metacarpal distally
24. d) Originates from the posterior surface of the distal third of radius