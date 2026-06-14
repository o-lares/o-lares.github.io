---
title: "Machine Vision Class Assignment"
description: "Computer vision project demonstrating feature tracking across image frames with ORB, brute force matching, and OpenCV."
category: "Software and AI Builds"
featured: false
date: "2023-01-01"
image: "/images/cv.gif"
images:
  - "/images/cv.gif"
proficiency:
  - "OpenCV"
  - "ORB Feature Detector"
  - "Brute Force Feature Matcher"
  - "Random Sample Consensus (RANSAC)"
tech:
  - Python
  - OpenCV
  - ORB
  - RANSAC
links:
  github: "https://github.com/o-lares/Computer-Vision-Class-Project1"
---

This project aimed to demonstrate how to perform image tracking using Python and OpenCV. The ORB feature detector was used to extract features from the images and the Brute Force matcher was used to match the features between the images. The accuracy was calculated by finding the number of correctly matched features between consecutive frames, and divided it by the total number of features detected in the previous frame. This gave me a percentage of how many features were accurately tracked, about 60% on 200 images.
