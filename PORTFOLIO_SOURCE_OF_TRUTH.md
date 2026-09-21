# Portfolio source of truth — v1

Built from: `Kanishka_Resume.pdf`, `Kanishka_Projects.pdf`, `Kanishka_Academic_Research_Work_1.pdf`,
`GitHub · LinkedIn · LeetCode`, `Kanishka's Strava Profile Link`, `Current Blog Section Content`.

Only one resume version has been supplied so far, so the cross-version deduplication step is
pending. Everything below should be updated as new resumes, repos, and artifacts arrive.

---

## 1. Master inventory

### Professional experience

**Sahay Life, Co-Founder** · Summer 2026
- Early-stage women's health venture supporting women through pregnancy and early motherhood.
- Led the technical side; built the end-to-end MVP.
- System designed around trusted-source retrieval, safety guardrails, escalation, and responsible
  responses to sensitive healthcare questions.
- Tested with pregnant women; research conducted with doctors and prospective users.
- Early discussions with IIM Ahmedabad Ventures.
- Source: intro copy supplied by Kanishka (not in the resume PDF). **Add to the resume.**

**Ernst & Young — Senior Analyst** · Jul 2024 – Apr 2025
- LLM-powered enterprise search: OpenAI APIs, LangChain, RAG pipelines, vector retrieval, GCP-backed
  data services, for context-aware information access.
- Conversational search system with memory-aware retrieval and few-shot prompting for multi-turn
  queries; worked inside an existing team codebase (debugging, testing, extending).
- ML prediction engine over 2+ years of inventory data; data-processing and feature pipelines for
  ensemble models. **85% accuracy on FMCG stock-out prediction.**
- Source: resume only.

**Ernst & Young — Data Science & Analytics Intern** · Jun 2023 – Jul 2024
- Owned end-to-end backend for an EV analytics platform: Python ETL, relational data models,
  PostgreSQL views. **Supported 15 dashboards.**
- **Dashboard refresh 60 min → 6 min** via PostgreSQL query optimization and backend retrieval
  restructuring.
- Reusable Python/SQL pipelines over **1M+ row** automotive and FMCG tables: ingestion, batch
  processing, validation, deduplication, incremental processing.
- Embedding-based KPI discovery indexing KPIs across hundreds of dashboards, **Top-3** dashboard
  matches by vector search.
- Source: resume only. Overlaps undergraduate study (Sept 2020 – Apr 2024), consistent with the
  "year-long undergraduate internship" blog draft.

### Software engineering projects

| Project | Stack | Status | Links |
| --- | --- | --- | --- |
| Relay — distributed job execution | Go, gRPC, PostgreSQL, Redis, Docker, K8s | In development | [repo](https://github.com/up-the-ladder/Relay) |
| IndexForge — search engine from scratch | C++20, CMake, threads, BM25, GoogleTest | In development | [repo](https://github.com/up-the-ladder/IndexForge) |
| VaultFS — cloud file storage backend | Java, Spring Boot, PostgreSQL, Redis | In development | [repo](https://github.com/up-the-ladder/VaultFS) |
| Bubble Rush Grand Prix — engine-less browser game | React, Canvas, Web Audio API | Deployed (GH Pages) | [repo](https://github.com/up-the-ladder/f1-game) |

Substance held per project:
- **Relay.** gRPC submission; PostgreSQL durable state and concurrency-safe claiming; leases,
  heartbeats, failure detection, retries, exponential backoff, idempotency; transactional ownership,
  race conditions, worker coordination, graceful shutdown, recovery after process failure; Docker for
  reproducible local deployment; Redis/K8s only where justified. Failure testing, load testing,
  observability and benchmarks described as *future* work.
- **IndexForge.** Ingestion, inverted index and posting lists, corpus statistics, candidate
  retrieval, BM25 ranking, heap-based top-k. Disk persistence, parallel indexing across worker
  threads and concurrent query serving described as *designed/planned*. Methodology: reproducible
  baselines → profile → optimize measured bottlenecks (synchronization, memory layout, caching).
- **VaultFS.** Chunked/resumable uploads, parallel chunk processing, SHA-256 integrity, versioning,
  content-based deduplication; PostgreSQL metadata separate from object contents; upload sessions,
  transactional state changes, idempotent retries, optimistic concurrency control; Redis only where
  metadata caching measurably helps. **100+ simultaneous transfers is explicitly a target, not a
  result.**
- **Bubble Rush.** 60 fps loop inside React with all mutable state in one `useRef` and display-only
  React state once per frame; circle-vs-rectangle collision for bubbles, directional-guarded AABB for
  traffic; per-frame lane occupancy (≤3 traffic cars, always one free lane, bubbles never overlap
  cars); Web Audio API synthesis; three time-gated difficulty phases; keyboard and touch input.

### Machine learning / ML systems projects

**Multimodal Video Search & Ranking Engine** — [repo](https://github.com/up-the-ladder/Multimodal-Video-Search-Ranking-Engine)
- Segment-level indexing across transcripts (Whisper), frames (OpenCLIP), OCR text, captions (BLIP).
- Sparse BM25 + dense FAISS candidate retrieval, multimodal fusion, optional cross-encoder rerank →
  two-stage pipeline.
- Controlled comparison of transcript-only / visual / sparse / dense / hybrid / reranked systems on
  Recall@K, MRR, NDCG, latency. No numbers published yet.
- Serving stack (FastAPI, Redis, PostgreSQL, Docker) appears on the **resume only** — see contradiction C3.

**Personalized Search Ranking Engine** — [repo](https://github.com/up-the-ladder/Personalized-Ranking-Engine)
- LambdaMART via LightGBM Ranker over watch history, engagement, creator affinity, content signals,
  semantic relevance.
- Full lifecycle: label construction, negative sampling, leakage-aware splitting, ranking-specific
  offline eval (NDCG@K, MRR, MAP, Recall@K), feature ablations, error analysis.
- Serving: FastAPI, PostgreSQL, Redis, Docker; offline training and online inference explicitly
  separated. No numbers published yet.

### Academic / research work

**Adaptive Inference Scheduling for Diffusion-Based MRI Reconstruction** —
[repo](https://github.com/up-the-ladder/adaptive-inference-diffusion-mri) ·
[paper](https://github.com/up-the-ladder/adaptive-inference-diffusion-mri/blob/main/Adaptive_Inference_Scheduling_for_Diffusion_Based_MRI_Reconstruction.pdf)
- Conditional diffusion model reconstructing brain MRI from undersampled k-space; adaptive
  early-stopping controller over three per-sample convergence signals (predicted-noise magnitude,
  x0-prediction stability, measured k-space consistency); patience mechanism.
- PyTorch, DDIM sampling, data-consistency projection. Calgary-Campinas, 4× and 8× acceleration.
- **Result: ~25% fewer denoising steps, higher PSNR and lower NMSE than fixed 100-step sampling,
  modest SSIM tradeoff.** The only project with fully substantiated, self-consistent results.

**Sentiment-Aware Bitcoin Volatility Forecasting** —
[repo](https://github.com/up-the-ladder/Predictive-Analytics-Project---Sentiment-Analysis) ·
[paper](https://github.com/up-the-ladder/Predictive-Analytics-Project---Sentiment-Analysis/blob/main/Reseach%20Paper.pdf)
- Next-hour realized BTC volatility from 72-hour history; BTC/ETH + S&P 500 + gold + Twitter activity
  + Fear & Greed + cross-asset correlations + temporal features.
- Five-block N-BEATS, iterative residual decomposition; custom Huber + jump + trend loss.
- Benchmarked against LSTM, CNN, Transformer, TFT under chronological evaluation.
  **Validation MAE 0.2897**, loss ablations supporting the full objective.
- **Likely the project referred to as "Botcoin" — unconfirmed.**

### Education

- **NYU Courant**, M.S. Computer Science, Sept 2025 – May 2027 (expected). Available Summer/Fall 2027.
  Resume coursework: Machine Learning, Deep Learning, GPUs: Architecture & Programming, Fundamentals
  of Algorithms. Computer Vision added on the site (currently enrolled) — remove if you'd rather list
  completed courses only.
- **KIIT**, B.Tech Computer Science & Engineering, Sept 2020 – Apr 2024, GPA 9.04/10.

### Skills (resume)

Python, C++, Go, Java, SQL, JavaScript, TypeScript · PyTorch, Scikit-learn, LightGBM,
Learning-to-Rank, recommendation systems, feature engineering · FAISS, BM25, embeddings, vector
search, semantic search, cross-encoders · FastAPI, gRPC, PostgreSQL, Redis, REST, ETL · LangChain,
RAG, OpenAI APIs · Docker, Kubernetes, AWS, GCP, Git, GitHub Actions, CI/CD.

No skills section on the site: the project stacks already carry this, and a standalone list would
dilute it. Reconsider if a version with unlisted technologies appears.

### Links

GitHub `up-the-ladder` · LinkedIn `singh-kanishka` · LeetCode `kanishka_singh` ·
kanishka.singh33@gmail.com · Strava athlete `1771882980`. Phone number is on the resume and is
deliberately **not** on the website.

### Not used in v1

- **Blog drafts** ("Almost Co-Founder", "Engineering Before Graduation"). Both are in progress; no
  Writing section until at least one is finished. The Parenthood AI story is strong material — it's
  the only entry involving real users and product decisions — and worth finishing.
- Phone number, GPA-adjacent detail beyond the single line, full coursework list.

---

## 2. Contradictions — flagged, not resolved

**C1 · Relay performance claims.** Resume: "3,000+ jobs/min across 8 workers with <150 ms p95
scheduling latency", "<5-second worker recovery", "deployed with Docker and Kubernetes". Project
description: load testing, failure testing and reproducible benchmarks are listed as things the
*completed* system will include, and Kubernetes is introduced "only where it solves demonstrated
system needs". These cannot both be current. **Omitted from the site.** If the benchmarks exist,
send them and they go into the Evaluation section of `projects/relay.html` and the homepage entry.

**C2 · IndexForge performance claims.** Resume: "500K+ documents", "<50 ms p95 latency", "throughput
2.5x+", "p95 latency reduced 20%+", parallelized indexing and queries. Project description: disk
persistence, parallel indexing and concurrent serving are what the completed system is *designed* to
do. **Omitted from the site**, same resolution path as C1.

**C3 · Where the serving stack belongs.** The resume attributes FastAPI + Redis + PostgreSQL + Docker
serving to Multimodal Video Search; the project descriptions attribute that stack to Personalized
Search Ranking Engine and don't mention serving for the multimodal system. Currently kept on the
Multimodal project page and left off its homepage stack line. Confirm which is accurate.

**C4 · VaultFS concurrency target.** "100+ simultaneous file transfers" is described in your own
source as a benchmark target until reproduced experimentally. Not on the site. Don't let it into a
future resume as a result until it is one.

**C5 · "Botcoin".** You named Botcoin as an academic/research item; the only matching material is
Sentiment-Aware Bitcoin Volatility Forecasting. Treated as the same project under its descriptive
name. Confirm, or send the separate project.

**C7 · Co-founder vs "almost".** The intro says "I was the Co-Founder of Sahay Life" and describes a
built MVP tested with users; the Writing entry is titled "Almost Co-Founder" and calls it "the startup
that almost happened". Both sit on the same page. The venture name is now Sahay Life throughout
(Parenthood AI removed at your request). The essay title still needs a decision: either retitle it so
it reads as "the company that didn't continue" rather than "the role I didn't take", or add a closing
clause to the Sahay Life experience entry saying the venture wound down.

**C8 · Timeline gap.** Sahay Life is dated Summer 2026, between your first and second years at NYU.
That reads naturally as a summer venture in place of an internship. Worth being ready to speak to it,
since it's the slot recruiters look at hardest.

**C6 · Bubble Rush demo.** The description says it's deployed on GitHub Pages, but no URL was
supplied. No demo link on the site — send the URL and it becomes a `Demo` link, which is worth more
than the repo for this project.

---

## 3. Tiering

**Tier 1 — homepage, prominent.**
Ernst & Young Senior Analyst · Ernst & Young Intern · Relay · Multimodal Video Search & Ranking
Engine · Personalized Search Ranking Engine · IndexForge · Diffusion MRI · NYU Courant.

These carry the SWE + MLE story: two systems projects in different languages with real concurrency
and failure reasoning, two retrieval/ranking projects that show ML *systems* rather than notebook ML,
one research project with clean measured results, and professional experience that spans LLM systems
and data engineering.

**Tier 2 — homepage, lower weight.**
VaultFS (overlaps Relay's concurrency story — kept because Java/Spring adds range) · Bubble Rush
Grand Prix (narrow relevance, but a genuinely unusual engineering constraint and the only thing that
runs in a browser) · Bitcoin volatility forecasting · KIIT · Beyond Work.

**Tier 3 — off the site for now.**
Unfinished blog drafts · full coursework list · standalone skills list · phone number · resume
bullets whose metrics conflict with project descriptions (C1, C2).

**Biggest weakness.** Four of six engineering projects are in development, and none of them currently
publishes a measured result. The Diffusion MRI work is the only entry with numbers that survive
scrutiny. Finishing the benchmark and evaluation work on *one* of Relay, IndexForge or Multimodal
Search would change this profile more than starting anything new.

---

## 4. Information architecture (as built)

| Section | Why it exists | What's in it |
| --- | --- | --- |
| Intro | Answers who/where/when/what-kind in ~10 seconds, with all five professional links one click away | Name, degree + graduation, two-sentence positioning, availability, portrait, GitHub · LinkedIn · Resume · LeetCode · Email |
| Experience | Only section with external validation | Two EY roles, rewritten as prose |
| Selected projects | The centrepiece, split SWE / ML | Four SWE entries, two ML entries, each with a one-line positioning, a paragraph, a stack line, and real links |
| Academic & research | Keeps research out of the engineering section while showing depth | Two entries, with an explicit note that these are self-authored, not peer-reviewed |
| Education | Establishes background without becoming a transcript | NYU (prominent), KIIT (one line) |
| Beyond work | Memorable as a person, two short paragraphs, Strava lives here | Running, cycling, badminton, basketball, swimming, hiking invitation |

Deliberately absent: navigation bar, Writing, News/Currently, skills list, testimonials, stats.

**Project pages built:** Relay (strongest SWE story), Multimodal Video Search (strongest ML systems
story). Both follow the same shape — an "At a glance" block for recruiters, then Problem → Motivation
→ Constraints → Architecture → Failure model / Justification → Engineering decisions → Evaluation →
Tradeoffs → Next → Resources for engineers.

**Project pages that should come next, in order:** IndexForge (once benchmarks exist — the profiling
story is the most interesting thing you have), Personalized Ranking Engine (ablations and
leakage-aware splitting are strong signals), Diffusion MRI (only if you want a page that outranks the
PDF for skimmers), VaultFS.

---

## 5. Assets and links still needed

**Blocking publication**
1. `assets/kanishka.jpg` — 4:5 portrait crop.
2. `assets/resume.pdf` — the current resume.

**High value**
3. Benchmark evidence for Relay and IndexForge (resolves C1 and C2, and unlocks the strongest claims on the site).
4. The Bubble Rush live demo URL.
5. Repository access or READMEs for all six engineering projects — the project pages are currently written from your descriptions; repo evidence would let them name concrete modules, schemas, and APIs.
6. Confirmation on C3 (which project has the FastAPI/Redis/PostgreSQL serving layer) and C5 (Botcoin).

**Nice to have**
7. Architecture diagrams for Relay and Multimodal Search — the pages have the prose slot ready for them.
8. Ablation tables for Multimodal Search and Personalized Ranking.
9. Any older resume versions, for the cross-version pass.
10. A screenshot or short clip of Bubble Rush; a basketball/action photo for Beyond Work.
11. The finished "Almost Co-Founder" essay, which would justify a Writing section on its own.
