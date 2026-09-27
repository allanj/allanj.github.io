// Single source of truth for profile facts, links and navigation.
// Edit here; every page (and the ⌘K palette) reads from this file.

export const site = {
  url: 'https://allanj.github.io',
  name: 'Zhanming (Allan) Jie',
  shortName: 'Allan Jie',
  handle: 'allanj',
  role: 'LLM Agent Researcher',
  org: 'ByteDance Seed',
  orgUrl: 'https://seed.bytedance.com/',
  location: 'Singapore',
  timezone: 'Asia/Singapore',
  email: 'allan.jie@bytedance.com',
  description:
    'Zhanming (Allan) Jie — LLM Agent Researcher at ByteDance Seed, Singapore. LLM agents for science, agentic reinforcement learning, reasoning, and formal theorem proving.',
  googleSiteVerification: '0m9D6GMo20UdxGfmrDgOAUSyYILfAz7Aejakz9Wswaw',
};

export type Social = { id: string; label: string; href: string; handle: string };

export const socials: Social[] = [
  { id: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=u68TA6oAAAAJ', handle: 'Zhanming Jie' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/allanj', handle: '@allanj' },
  { id: 'huggingface', label: 'Hugging Face', href: 'https://huggingface.co/allanjie', handle: 'allanjie' },
  { id: 'orcid', label: 'ORCID', href: 'https://orcid.org/0000-0002-0656-9228', handle: '0000-0002-0656-9228' },
  { id: 'email', label: 'Email', href: `mailto:${site.email}`, handle: site.email },
];

export const nav = [
  { href: '/about/', label: 'About' },
  { href: '/publications/', label: 'Publications' },
  { href: '/blog/', label: 'Writing' },
];

export const interests = [
  {
    key: 'agentic-rl',
    title: 'Agentic RL',
    blurb:
      'Training LLM agents with reinforcement learning over long horizons — now for science (materials, biology), previously for finance. Credit assignment, reward design, and learning from experience.',
    tags: ['agents for science', 'long-horizon RL', 'reward design'],
  },
  {
    key: 'formal-math',
    title: 'Formal theorem proving',
    blurb:
      'Lean 4 provers that search deep and broad at test time and improve through large-scale RL — the Seed-Prover line of work.',
    tags: ['Lean 4', 'test-time scaling', 'Seed-Prover'],
  },
  {
    key: 'reasoning',
    title: 'Reasoning in language models',
    blurb:
      'From deductive math-word-problem solvers to reinforced fine-tuning (ReFT): making multi-step reasoning more reliable and more explainable.',
    tags: ['chain-of-thought', 'ReFT', 'math'],
  },
];

export type Role = {
  period: string;
  title: string;
  org: string;
  orgUrl?: string;
  place: string;
  summary: string;
  head?: boolean;
};

export const experience: Role[] = [
  {
    period: '2025 — now',
    title: 'LLM Agent Researcher',
    org: 'ByteDance Seed',
    orgUrl: 'https://seed.bytedance.com/en/',
    place: 'Singapore',
    summary:
      'Building LLM agents for science — materials, biology and beyond. Previously built financial agents and worked on formal theorem proving as a core contributor to Seed-Prover (IMO 2025 silver-level score; 88% of PutnamBench); contributed financial-agent and Lean 4 proving capabilities to Seed2.1.',
    head: true,
  },
  {
    period: '2024 — 2025',
    title: 'Research Scientist',
    org: 'Salesforce AI Research',
    orgUrl: 'https://www.salesforceairesearch.com/',
    place: 'Singapore',
    summary: 'Efficient long-context inference and reasoning for large language models.',
  },
  {
    period: '2020 — 2024',
    title: 'NLP Scientist',
    org: 'ByteDance AI Lab / ByteDance Research',
    place: 'Singapore',
    summary:
      'Reasoning with language models: ReFT (reinforced fine-tuning, ACL 2024), chain-of-thought design, few-shot prompting for numerical reasoning, and visual document understanding.',
  },
  {
    period: '2019 — 2020',
    title: 'Research Intern',
    org: 'Alibaba',
    place: 'Singapore',
    summary: 'Knowledge-graph-to-text generation (ENT-DESC, EMNLP 2020) and named entity recognition.',
  },
  {
    period: '2019',
    title: 'Research Intern',
    org: 'Allen Institute for AI (AI2)',
    orgUrl: 'https://allenai.org/',
    place: 'Seattle',
    summary: 'Hosted by Pradeep Dasigi and Ana Marasović.',
  },
];

export const education = [
  {
    period: '2016 — 2020',
    title: 'Ph.D., Computer Science',
    org: 'Singapore University of Technology and Design (SUTD)',
    orgUrl: 'https://www.sutd.edu.sg/',
    summary:
      'StatNLP group, advised by Prof. Wei Lu. Thesis: “Leveraging Dependency Trees for Structured Prediction”.',
    award: 'Best Thesis Award',
    link: 'https://github.com/allanj/phd-thesis',
  },
];

export type NewsItem = { date: string; html: string; tag?: 'paper' | 'release' | 'career' | 'talk' | 'service' | 'award' };

// Newest first. `date` is YYYY-MM, or YYYY when the month isn't public.
export const news: NewsItem[] = [
  {
    date: '2026',
    tag: 'career',
    html: 'Now building <b>LLM agents for science</b> — materials, biology and beyond — at ByteDance Seed.',
  },
  {
    date: '2026-07',
    tag: 'paper',
    html: '<em>Measure Twice, Locate Once</em> — mitigating hallucinations in LLM agents for repository-scale fault localization — published in <b>ACM TOSEM</b>.',
  },
  {
    date: '2026-06',
    tag: 'release',
    html: '<a href="https://seed.bytedance.com/en/seed2_1">Seed2.1</a> is released — I contributed its <b>financial-agent</b> and <b>Lean 4 proving</b> capabilities. The <a href="https://arxiv.org/abs/2607.00248">Seed2.0 Model Card</a> also landed on arXiv.',
  },
  {
    date: '2025-12',
    tag: 'release',
    html: '<a href="https://arxiv.org/abs/2512.17260">Seed-Prover 1.5</a>: agentic RL + test-time scaling solves <b>88% of PutnamBench</b> and <b>11/12 Putnam 2025</b> problems within 9 hours.',
  },
  {
    date: '2025-07',
    tag: 'release',
    html: 'Seed-Prover takes part in <b>IMO 2025</b>: an IMO-certified <b>30/42</b>, silver-medal level. Papers: <a href="https://arxiv.org/abs/2507.23726">Seed-Prover</a> and <a href="https://arxiv.org/abs/2507.15225">Delta Prover</a>.',
  },
  { date: '2025', tag: 'career', html: 'Joined <b>ByteDance Seed</b> in Singapore to work on LLM agents and reinforcement learning.' },
  {
    date: '2024-08',
    tag: 'paper',
    html: '<a href="https://aclanthology.org/2024.acl-long.410/">ReFT: Reasoning with Reinforced Fine-Tuning</a> appears at <b>ACL 2024</b>, alongside a Findings paper on non-autoregressive MT as a constrained HMM.',
  },
  { date: '2024', tag: 'career', html: 'Joined <b>Salesforce AI Research</b>, Singapore.' },
  {
    date: '2023-05',
    tag: 'paper',
    html: '<a href="https://arxiv.org/abs/2305.18170">Leveraging Training Data in Few-Shot Prompting for Numerical Reasoning</a> accepted to Findings of ACL 2023.',
  },
  { date: '2022-07', tag: 'service', html: 'Serving as a Senior Program Committee member for <b>AAAI 2023</b>.' },
  {
    date: '2022-04',
    tag: 'talk',
    html: 'Talk at the workshop on “A Science of Certified AI” (<a href="/files/smu_talk.pdf">slides</a>).',
  },
  {
    date: '2022-03',
    tag: 'paper',
    html: '<a href="https://arxiv.org/abs/2203.10316">Learning to Reason Deductively</a> accepted to <b>ACL 2022</b>; talk on math word problem solving at SMT, SUTD (<a href="/files/sutd_smt_talk.pdf">slides</a>).',
  },
  {
    date: '2020-04',
    tag: 'award',
    html: 'Ph.D. from the <a href="https://statnlp-research.github.io/">StatNLP</a> group at SUTD — received the <b>Best Thesis Award</b> (<a href="https://github.com/allanj/phd-thesis">thesis &amp; slides</a>).',
  },
];

export type Highlight = {
  id: string;
  kicker: string;
  title: string;
  blurb: string;
  stats?: { value: string; label: string }[];
  /** shown instead of stats when there are no headline numbers */
  tags?: string[];
  links: { label: string; href: string }[];
};

export const highlights: Highlight[] = [
  {
    id: 'seed-2.1',
    kicker: 'ByteDance Seed · 2026',
    title: 'Seed2.1',
    blurb:
      'ByteDance’s flagship model family for agentic productivity, in Pro and Turbo sizes. I contributed to its financial-agent and Lean 4 theorem-proving capabilities.',
    tags: ['financial agents', 'Lean 4 proving', 'agentic productivity'],
    links: [
      { label: 'model card', href: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2.1/Seed2_1_Model_Card.pdf' },
      { label: 'blog', href: 'https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity' },
    ],
  },
  {
    id: 'seed-prover-1.5',
    kicker: 'ByteDance Seed · 2025',
    title: 'Seed-Prover 1.5',
    blurb:
      'A Lean 4 prover trained with large-scale agentic RL that keeps accumulating experience from Lean and other tools, plus a test-time workflow bridging natural-language and formal proofs.',
    stats: [
      { value: '88%', label: 'PutnamBench' },
      { value: '11/12', label: 'Putnam 2025, ≤ 9 h' },
      { value: '80%', label: 'Fate-H (graduate)' },
    ],
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2512.17260' },
      { label: 'code', href: 'https://github.com/ByteDance-Seed/Seed-Prover' },
      { label: 'blog', href: 'https://seed.bytedance.com/en/blog/seed-prover-1-5-advanced-mathematical-reasoning-through-a-novel-agentic-architecture' },
    ],
  },
  {
    id: 'seed-prover',
    kicker: 'ByteDance Seed · IMO 2025',
    title: 'Seed-Prover',
    blurb:
      'Lemma-style whole-proof reasoning that iteratively refines proofs from Lean feedback, with deep and broad test-time search for olympiad-level problems.',
    stats: [
      { value: '30/42', label: 'IMO 2025 · silver level' },
      { value: '78.1%', label: 'past IMO problems' },
      { value: '99.6%', label: 'miniF2F-test' },
    ],
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2507.23726' },
      { label: 'code', href: 'https://github.com/ByteDance-Seed/Seed-Prover' },
      { label: 'blog', href: 'https://seed.bytedance.com/en/blog/bytedance-seed-prover-achieves-silver-medal-score-in-imo-2025' },
    ],
  },
  {
    id: 'reft',
    kicker: 'ByteDance Research · ACL 2024',
    title: 'ReFT',
    blurb:
      'Reinforced fine-tuning: warm up with SFT, then run PPO over many sampled chain-of-thought paths, rewarded by answer correctness — generalising better than SFT alone on math reasoning.',
    stats: [
      { value: 'SFT → RL', label: 'two-stage recipe' },
      { value: 'ACL', label: '2024 main' },
    ],
    links: [
      { label: 'paper', href: 'https://aclanthology.org/2024.acl-long.410/' },
      { label: 'code', href: 'https://github.com/lqtrung1998/mwp_ReFT' },
    ],
  },
];

export const service = [
  { role: 'Senior Program Committee', venues: 'AAAI 2023' },
  {
    role: 'Program Committee / Reviewer',
    venues: 'ACL 2020–2022 · EMNLP 2018–2022 · NAACL 2019 · AACL 2022 · AAAI 2019 · NLPCC 2017, 2020 · PACLIC 2018 · IJCNLP 2017',
  },
  { role: 'Journal Reviewer', venues: 'IEEE Transactions on Emerging Topics in Computing · Natural Language Engineering · ACM TALLIP' },
];

export type Repo = { name: string; repo: string; blurb: string; stars: number; lang: string };

// `stars` is a fallback; the build refreshes them from the GitHub API when it can.
export const repos: Repo[] = [
  { name: 'pytorch_neural_crf', repo: 'allanj/pytorch_neural_crf', blurb: 'LSTM / BERT-CRF for named entity recognition in PyTorch.', stars: 395, lang: 'Python' },
  { name: 'repo-level-codegen-papers', repo: 'allanj/repo-level-codegen-papers', blurb: 'A curated list of repository-level code generation papers.', stars: 235, lang: 'List' },
  { name: 'ner_incomplete_annotation', repo: 'allanj/ner_incomplete_annotation', blurb: 'NER with incomplete annotations (NAACL 2019).', stars: 134, lang: 'Python' },
  { name: 'ner_with_dependency', repo: 'allanj/ner_with_dependency', blurb: 'Dependency-guided LSTM-CRF (EMNLP 2019).', stars: 77, lang: 'Python' },
  { name: 'Deductive-MWP', repo: 'allanj/Deductive-MWP', blurb: 'Deductive reasoner for math word problems (ACL 2022).', stars: 63, lang: 'Python' },
  { name: 'LayoutLMv3-DocVQA', repo: 'allanj/LayoutLMv3-DocVQA', blurb: 'Fine-tuning LayoutLMv3 on DocVQA.', stars: 53, lang: 'Python' },
];

export const talks = [
  { date: '2022-04', title: 'Workshop on “A Science of Certified AI”', href: '/files/smu_talk.pdf' },
  { date: '2022-03', title: 'Math word problem solving — SMT, SUTD', href: '/files/sutd_smt_talk.pdf' },
];
