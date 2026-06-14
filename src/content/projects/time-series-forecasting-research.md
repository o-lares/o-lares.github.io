---
title: "Time Series Forecasting Research Project"
description: "Traffic volume forecasting project using dense VDS traffic data to predict sparse but reliable CCS station measurements."
category: "Transportation Research"
featured: false
date: "2023-01-01"
image: "/images/vds.png"
images:
  - "/images/vds.png"
  - "/images/vds tables.png"
proficiency:
  - "Time series forecasting"
  - "Darts Python library"
  - "Recurrent neural networks (RNN, LSTM, GRU)"
  - "Temporal Convolutional Networks (TCN)"
  - "Autoencoders (AEs)"
tech:
  - Darts
  - RNN
  - LSTM
  - GRU
  - TCN
  - Autoencoders
links:
  github: "https://github.com/o-lares/Time-Series-Project/tree/main"
---

The objective of this project was to test different methods for time series predictions of traffic volume data. Using more densely distributed Video Detection System (VDS) traffic data to predict more sparse, but more reliable Continuous Count Station (CCS) traffic data. Varying methods were used to predict the traffic volume at one specific CCS site, using matching VDS sites as covariates.

Autoencoder architectures were also explored and tested to aid in denoising some of the time series that had anomalies or errors in it where missing or erroneous data was present.
