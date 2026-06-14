---
title: "VI360 Buying Signal Impact Analysis"
description: "Clickstream and consumer signal analysis measuring the effect of the VI360 interactive vehicle viewer on buying intent, lead conversion, and MarketLevel movement, with a proposed enhancement to the Consumer Insights pipeline for vAuto."
category: "Professional Analytics & ML/AI"
featured: false
date: "2026-01-30"
image: "/images/vi-360.png"
images:
  - "/images/vi-leads.png"
highlightLabel: "Key Achievements"
highlights:
  - "Discovered Autotrader and KBB VI360 widget engaged consumers convert to leads at 4.47%, approximately 5X higher than the overall site conversion rate of 0.87%."
  - "Broke down lead conversion by individual VI360 tag type (exterior, interior, price advisor, mileage, photos, video, features), ranging from 8-13% per section."
  - "Designed and proposed a MarketLevel enhancement SQL function to boost consumer buying signal by one step when VI360 activity is detected, capped at READY_TO_BUY, recommended for integration into the Consumer Insights pipeline."
proficiency:
  - "Consumer analytics"
  - "Clickstream analysis"
  - "Behavioral attribution"
  - "Snowflake SQL"
  - "Web event data"
  - "Consumer buying signals"
tech:
  - Snowflake
  - SQL
  - Dataiku
  - Python
  - Visualizations
---

This project was commissioned by vAuto to determine whether the VI360 interactive 360-degree vehicle viewer had a measurable effect on consumer buying intent. Working across Autotrader and KBB, I analyzed 90 days of web clickstream events tagged with VI360 component identifiers (exterior, interior, price advisor, mileage, photos, video, features, certification, highlights, upgrades).

The headline finding was a significant lead conversion lift: VI360-engaged consumers submitted leads at a rate of 4.47% compared to 0.87% across overall site traffic, roughly __5x__ higher. Of ~438M total Pixall events in the window, 232,035 unique visitors (0.05%) had VI360 activity, and 10,394 of them went on to submit a lead. Breaking down by individual tag type, conversion rates ranged from 8-13% depending on which VI360 section the consumer interacted with.

I also built a pre/post framework joining VI360 hits against Consumer Insights daily snapshots to measure MarketLevel movement before and after widget engagement. Based on the conversion evidence, I proposed and drafted a MarketLevel enhancement SQL function that boosts a consumer's buying signal by one step (for example, CASUALLY_BROWSING to ACTIVELY_SHOPPING) when any VI360 activity is detected, capped at READY_TO_BUY. The recommendation was presented to product with the note that while the overall coverage was low due to the feature only recently being rolled out (only 0.05% of web traffic used it), it showed promise in helping identify higher-signal consumers and the analysis should be revisited as coverage grows.
