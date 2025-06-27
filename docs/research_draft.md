# SentinelForgeAI: AI-Native Design Infrastructure for India’s Semiconductor Ecosystem

## Abstract

SentinelForgeAI is an AI-powered platform designed to support India’s semiconductor ecosystem by enabling intelligent RTL code generation, verification, and policy simulation workflows. By combining large language models (LLMs), open-source EDA tools, and real-time infrastructure simulation, the platform aims to democratize chip design while enhancing security and verification standards. This paper presents the motivation, architecture, and early implementation of SentinelForgeAI as a foundational step toward India’s self-reliant silicon innovation roadmap.

---

## Introduction

India’s growing ambitions in semiconductor manufacturing and electronics innovation have created an urgent need for accessible, intelligent design infrastructure. Despite government initiatives and increasing interest in local chip production, the Electronic Design Automation (EDA) ecosystem remains fragmented, costly, and heavily dependent on proprietary tools and expert-driven workflows. This presents a significant barrier for startups, universities, and early-stage designers to contribute to semiconductor R&D effectively.

At the same time, breakthroughs in large language models (LLMs) and open-source EDA tooling present a unique opportunity to reshape the RTL design and verification process. Inspired by state-of-the-art research in LLM-assisted EDA — such as AIVRIL and LLM4EDA — SentinelForgeAI proposes a cloud-native, AI-powered automation system for Verilog code generation, simulation, and verification. 

The platform is designed to help democratize access to semiconductor design flows by reducing the complexity, tooling overhead, and human error typically associated with RTL workflows. Through multi-agent AI loops that can generate and refine RTL code from natural language prompts, SentinelForgeAI aims to build the foundational infrastructure that enables India's chip design sector to become self-reliant, agile, and innovation-ready.

---

## Related Work

Recent advancements in the application of large language models (LLMs) to Electronic Design Automation (EDA) have laid the groundwork for intelligent, semi-autonomous chip design flows. Notable among these is **AIVRIL** (AI-Driven RTL Generation With Verification-in-the-Loop), which introduces a feedback-driven Verilog generation system using GPT-style models and syntax verification through open-source tools like Yosys. AIVRIL’s core innovation lies in its iterative refinement of RTL code using error messages from synthesis tools to guide code corrections. This concept forms the technical backbone of SentinelForgeAI’s code-review agent loop.

Another key development is **LLM4EDA**, a survey of the emerging ecosystem where LLMs assist in EDA flows ranging from synthesis to simulation and debugging. It outlines different architectural approaches — including single-agent assistants, chat-based debugging flows, and agent-based orchestration — many of which serve as inspiration for SentinelForgeAI’s multi-agent approach. Unlike LLM4EDA’s general exploration, SentinelForgeAI aims to deliver a focused SaaS platform that connects prompt-to-code-to-simulation in a minimal and usable loop.

While several proprietary tools (e.g., Synopsys DSO.ai, Cadence Cerebrus) explore AI-powered EDA optimization, their closed-source nature and high barrier to entry leave a wide gap for open, accessible, and India-first infrastructure. SentinelForgeAI occupies this space by marrying open-source EDA tools with LLMs in a looped, API-ready architecture — empowering early-stage teams to move fast with verifiable, AI-assisted hardware design.
