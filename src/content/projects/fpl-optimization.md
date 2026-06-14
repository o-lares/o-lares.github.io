---
title: "FPL Optimizer"
description: "A Fantasy Premier League what-if web app built through an AI-agent-first development workflow with Codex, showing how many points a manager could have scored with optimal weekly lineups, captains, and transfer-hit accounting."
category: "Software and AI Builds"
featured: true
date: "2026-06-14"
image: "/images/fpl.png"
images:
    - "/images/fpl-detail.png"
highlightLabel: "Key Achievements"
highlights:
 - "Built my first end-to-end project using Codex as the primary developer, following an AI-agent-first workflow instead of writing the application code manually."
 - "Created a static React and TypeScript web app that calculates optimal Fantasy Premier League lineups and captain choices from a user's actual 15-player squad each gameweek."
 - "Integrated public FPL API endpoints for manager history, weekly picks, live player scores, chips, and player metadata."
 - "Handled real deployment constraints with GitHub Pages, GitHub Actions, CORS limitations, and a Cloudflare Worker proxy for reliable API access."
 - "Added production-focused features including dark mode, captain comparison, transfer-hit accounting, responsive UI, tests, dependency auditing, and automated deployment."
proficiency:
 - "AI-agent-first development"
 - "Codex workflow"
 - "API integration"
 - "GitHub Pages deployment"
 - "Cloudflare Workers"
 - "Frontend testing"
 - "Fantasy Premier League analytics"
tech:
 - React
 - TypeScript
 - Vite
 - Vitest
 - Fantasy Premier League API
 - GitHub Pages
 - GitHub Actions
 - Cloudflare Workers
links:
  github: "https://github.com/o-lares/FPL-optimizer"
  app: "https://o-lares.github.io/FPL-optimizer/"
---

FPL Optimizer is a Fantasy Premier League what-if app I built as my first serious project using Codex as the primary developer. Rather than focusing on hand-coding every feature, the project became an experiment in agent-led software development: defining product requirements, testing like a user, identifying issues, and iterating with an AI coding agent until the result was production-ready. The application allows managers to enter their Team ID and see how many points they could have scored by selecting the optimal valid lineup and captain from the squad they actually owned each gameweek.

The app integrates with public Fantasy Premier League APIs to retrieve manager history, weekly squad picks, chips, player metadata, and gameweek scores. It evaluates every valid starting XI, applies formation and chip rules, selects the optimal captain, accounts for transfer hits, and compares optimized results against official FPL scores.

A major lesson from the project was discovering how much engineering surrounds a seemingly simple idea. To overcome browser CORS restrictions on GitHub Pages, I implemented a Cloudflare Worker proxy and automated testing and deployment with GitHub Actions. Along the way, I added dark mode, responsive design improvements, enhanced visualizations, better error handling, and test coverage for the optimization engine.
