---
title: "Dataiku MCP Server"
description: "An MCP server that gives AI assistants deep, structured access to Dataiku DSS projects — extracting datasets, recipes, models, flow DAGs, and more, then generating Markdown documentation through natural conversation."
category: "Professional Analytics & ML/AI"
featured: true
date: "2026-06-01"
image: "/images/dku-mcp.png"
images: 
    - "/images/dku-mcp.png"
highlightLabel: "Key Achievements"
highlights:
 - "Built a production MCP server exposing 14 tools that let Claude and GitHub Copilot inspect Dataiku DSS projects end-to-end."
 - "Extracted comprehensive project metadata — datasets, recipes, saved models, notebooks, flow graph (DAG), scenarios, managed folders, wiki pages, and project config — via the Dataiku API."
 - "Solved the MCP 1 MB tool-result limit with server-side auto-compaction and a single-call extract-and-generate workflow."
 - "Enabled the team to auto-generate living Markdown documentation for complex Dataiku projects without any CLI."
proficiency:
 - "MCP server design"
 - "Python"
 - "Dataiku DSS API"
 - "AI tool orchestration"
 - "Metadata extraction"
 - "Documentation generation"
 - "Pydantic data modeling"
tech:
 - Python
 - MCP (Model Context Protocol)
 - Dataiku DSS
 - Pydantic
 - Claude
 - GitHub Copilot
---

This project is an MCP (Model Context Protocol) server I built for my team to give AI assistants deep, structured access to Dataiku DSS projects. Instead of clicking through the DSS UI or writing one-off scripts, teammates simply ask Claude or GitHub Copilot to inspect a project, and the server exposes 14 tools that extract comprehensive metadata — datasets, recipes with visual configs, saved models with full training details, notebooks, the flow graph (DAG), scenarios, managed folders, wiki pages, code environments, and project variables — then generate Markdown documentation. There is no CLI; the AI assistant is the entire interface.

The work combined careful API integration with the Dataiku DSS client, Pydantic-based data modeling, and a discovery-to-generation workflow that mirrors how analysts actually explore a project. A core engineering challenge was the MCP 1 MB tool-result limit on large projects, which I solved with automatic server-side compaction (stripping heavy fields like full code and preprocessing config) and a single-call `extract_and_generate_project_docs` tool that keeps the full metadata server-side so it never crosses the wire. The result is a tool my team can use conversationally to turn opaque Dataiku flows into clear, shareable documentation.
