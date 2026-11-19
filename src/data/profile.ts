export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type Experience = {
  id: string;
  range: string;
  title: string;
  company: string;
  companyHref?: string;
  summary: string;
  bullets?: string[];
  tech: string[];
  links?: Array<{ label: string; href: string }>;
  image?: {
    src: string;
    alt: string;
  };
};

export type ExperienceGroup = {
  id: string;
  kind: "group";
  company: string;
  companyHref?: string;
  range: string;
  roles: Array<{
    id: string;
    range: string;
    title: string;
    summary: string;
    bullets?: string[];
    tech: string[];
  }>;
};

export type ExperienceEntry =
  | ExperienceGroup
  | (Experience & { kind?: "role" });

export type Project = {
  id: string;
  title: string;
  href?: string;
  description: string;
  tech: string[];
  metric?: string;
  status?: "in-progress" | "completed";
  links?: Array<{ label: string; href: string }>;
  image: {
    src: string;
    alt: string;
  };
};

export type Writing = {
  year: string;
  title: string;
  href?: string;
  kind: string;
};

export type Certification = {
  label: string;
  href?: string;
};

export const profile = {
  name: "Jesús Salatiel",
  role: "AI-Native SDET",
  tagline:
    "I build agentic test systems that cut release cycles from days to minutes.",
  location: "México",
  email: "jesussalatiel@hotmail.com",
  about: [
    "AI-native SDET with 6+ years building agentic test systems that cut release cycles from days to minutes. Former Zoox project via Globant; currently at Globant leading AI-driven test strategy. Specialized in LLM evaluation, autonomous test generation, and AI agent orchestration for QA at scale.",
    "I build AI agents that generate, execute, and auto-fix tests (LLMs + RAG); Playwright/Cypress/Selenium frameworks in GitHub Actions & Azure DevOps; cloud-native QA pipelines (AWS · GCP); and CLI tooling that cuts manual QA by 90%+. Domains: autonomous vehicles, fintech, enterprise SaaS, and GCP→AWS migrations.",
    "M.S. Artificial Intelligence at TES Jocotitlán (thesis on evaluator error under partial verification — in progress). B.S. thesis: facial recognition for a virtual assistant (OpenCV + VGG16). Summer internship at Tec de Monterrey Guadalajara on EEG-controlled prosthetics advised by Dr. Javier Mauricio Antelis Ortíz (SNI Level 3; Neurotechnology & BCI Lab). Founder of Kivo, a multi-tenant Business Workspace.",
  ],
  social: [
    {
      label: "Email",
      href: "mailto:jesussalatiel@hotmail.com",
      icon: "mail",
    },
    {
      label: "GitHub",
      href: "https://github.com/jesussalatiel",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jesussalatiel/",
      icon: "linkedin",
    },
  ] as SocialLink[],
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Writing", href: "#writing" },
    { label: "Education", href: "#education" },
  ],
  experience: [
    {
      id: "kivo",
      range: "Present",
      title: "Founder",
      company: "Kivo",
      summary:
        "Building a multi-tenant Business Workspace for SMB operations — POS, catalog, inventory, billing — with AI-native engineering practices on NestJS, Nuxt 4, DynamoDB, Cognito, and Pulumi/AWS.",
      tech: ["NestJS", "Nuxt", "DynamoDB", "Cognito", "Pulumi", "TypeScript"],
      image: {
        src: "/projects/kivo.jpg",
        alt: "Kivo Business Workspace dashboard mockup with catalog and lime CTA",
      },
    },
    {
      id: "globant",
      kind: "group",
      company: "Globant",
      companyHref: "https://www.globant.com/",
      range: "May 2021 — Present",
      roles: [
        {
          id: "globant-ai-agents",
          range: "Jan 2026 — Present",
          title: "SDET · AI Agents",
          summary:
            "Building agentic QA for a cloud-native SaaS platform migrating GCP→AWS. Leading AI-driven test automation strategy within a 2-engineer team (Lead) — LLM orchestration and RAG at scale.",
          bullets: [
            "Playwright + Cucumber cross-browser/multi-device framework with GitHub Actions parallel CI.",
            "Multi-agent QA workflows: complex test-case generation from ~1 day to ~1 hour.",
            "AI auto-fix agent (LLMs + RAG) that resolves failing tests and opens PRs — or emits diagnostics.",
            "Agentic exploratory analyzers and a custom CLI for orchestration and failure triage.",
            "Regression/validation suites with observability hooks across the GCP→AWS migration.",
          ],
          tech: [
            "Playwright",
            "Cucumber",
            "Python",
            "TypeScript",
            "LLMs",
            "RAG",
            "AWS",
            "GitHub Actions",
          ],
        },
        {
          id: "globant-salesforce",
          range: "May 2025 — Mar 2026",
          title: "Salesforce QA Automation Engineer",
          summary:
            "Led UFT automation for Salesforce and SAP with Azure DevOps; mentored 5 QA engineers.",
          bullets: [
            "Regression from ~1 day to under 5 minutes across 30+ critical end-to-end scenarios.",
            "OCR validation for previously manual UI checks across legacy and cloud systems.",
            "Sprint reliability: teams consistently hit 90–100% of planned story points.",
          ],
          tech: ["UFT", "VBScript", "Salesforce", "SAP", "Azure DevOps", "OCR"],
        },
        {
          id: "zoox",
          range: "Oct 2024 — May 2025",
          title: "SDET · Zoox (via Globant)",
          summary:
            "Embedded at Zoox (California) — safety-critical validation across the Level 4 robotaxi stack: vehicle control, sensor fusion, HIL, and simulation.",
          bullets: [
            "Zero-defect tolerance across control, fusion, and real-time decision modules.",
            "HIL testing for vehicle control and simulation suites for robotaxi edge cases.",
            "Partnered with perception and robotics on adversarial visualization and Android infotainment validation.",
          ],
          tech: [
            "HIL",
            "Simulation",
            "Android",
            "Embedded",
            "Sensor Fusion",
            "QA for AV",
          ],
        },
        {
          id: "globant-fintech",
          range: "Feb 2022 — Nov 2024",
          title: "SDET · Fintech",
          summary:
            "Led QA strategy in a high-growth fintech (Lima), scaling QA from 1 to 4 engineers in one-week agile cycles.",
          bullets: [
            "Playwright and Cypress with 80%+ regression coverage and 70% less manual testing.",
            "Internal CLI on AWS CI/CD that cut pipeline feedback time by 60%.",
            "Partnered with Product, Engineering, and the CTO on roadmap and release quality.",
          ],
          tech: [
            "Playwright",
            "Cypress",
            "TypeScript",
            "AWS",
            "CI/CD",
            "Fintech",
          ],
        },
        {
          id: "globant-frameworks",
          range: "May 2021 — Feb 2022",
          title: "QA Automation · Web & Mobile",
          summary:
            "Selenium and Appium frameworks with BDD (Cucumber/SpecFlow), Docker, and Azure DevOps continuous regression.",
          tech: [
            "Selenium",
            "Appium",
            "Java",
            "C#",
            "Cucumber",
            "Docker",
            "Azure DevOps",
          ],
        },
      ],
    },
    {
      id: "softtek",
      range: "Sep 2019 — May 2020",
      title: "QA Process Developer",
      company: "Softtek",
      companyHref: "https://www.softtek.com/",
      summary:
        "Evolved QA practices combining manual testing, business analysis, and automation; supported CMMI-aligned continuous improvement (Aguascalientes).",
      tech: ["QA Strategy", "Manual Testing", "Automation", "CMMI"],
    },
    {
      id: "eeg-summer-intern",
      range: "2017 — 2018",
      title: "Intern · EEG Prosthetic Control",
      company: "Tecnológico de Monterrey · Campus Guadalajara",
      companyHref: "https://tec.mx/es",
      summary:
        "Summer internship advised by Dr. Javier Mauricio Antelis Ortíz (SNI Level 3; Neurotechnology and Brain-Computer Interface Laboratory, Campus Guadalajara): prosthetic design controlled via neural networks from non-invasive EEG — acquisition, intent decoding, and actuator mapping.",
      bullets: [
        "Brain–computer interface path from EEG acquisition to prosthetic motion commands.",
        "Neural-network models to classify motor-intent patterns for upper-limb control.",
        "Mapped decoded classes to prosthetic actuators in a design/prototype setting.",
      ],
      links: [
        {
          label: "Advisor · Dr. Javier Mauricio Antelis Ortíz",
          href: "https://research.tec.mx/vivo-tec/display/PID_32953",
        },
      ],
      tech: [
        "EEG",
        "BCI",
        "Neural networks",
        "Signal processing",
        "Prosthetic control",
      ],
      image: {
        src: "/projects/eeg-prosthesis.jpg",
        alt: "EEG-controlled prosthetic concept with neural signal path to a robotic hand",
      },
    },
  ] as ExperienceEntry[],
  projects: [
    {
      id: "kivo",
      title: "Kivo · Business Workspace",
      description:
        "Multi-tenant platform for SMB operations — POS, catalog, inventory, billing, and AI-native engineering. NestJS modular monolith, Nuxt 4, DynamoDB, Cognito, and Pulumi on AWS.",
      tech: ["NestJS", "Nuxt", "DynamoDB", "Cognito", "Pulumi", "TypeScript"],
      metric: "Founder · in progress",
      status: "in-progress",
      image: {
        src: "/projects/kivo.jpg",
        alt: "Kivo Business Workspace dashboard mockup with catalog and lime CTA",
      },
    },
    {
      id: "devinsight",
      title: "DevInsightAI",
      href: "https://github.com/jesussalatiel/DevInsightAI",
      description:
        "Intelligent QA assistant for querying Java code, logs, and docs using LangChain, FAISS, and a local Ollama LLM.",
      tech: ["Python", "LangChain", "FAISS", "Ollama", "RAG"],
      image: {
        src: "/projects/devinsight.jpg",
        alt: "DevInsightAI interface with code panel and AI answer chips",
      },
    },
    {
      id: "healenium",
      title: "Self-healing with Healenium",
      href: "https://github.com/jesussalatiel/self-healing-with-healenium",
      description:
        "Demo of self-healing UI automation that recovers from locator drift without rewriting tests by hand.",
      tech: ["Healenium", "Selenium", "Java"],
      image: {
        src: "/projects/healenium.jpg",
        alt: "Abstract self-healing automation path repairing a broken locator",
      },
    },
    {
      id: "speech-ai",
      title: "Speech Recognition AI Assistant",
      href: "https://github.com/jesussalatiel/speech-recognition-artificial-intelligence",
      description:
        "Virtual assistant that identifies people to improve user attention through speech recognition.",
      tech: ["Python", "Speech Recognition", "AI"],
      image: {
        src: "/projects/speech-ai.jpg",
        alt: "Speech recognition assistant with microphone and sound-wave arcs",
      },
    },
  ] as Project[],
  research: [
    {
      id: "thesis-agent-evaluators",
      title:
        "Estimating automated AI-agent evaluator error under partial verification and imperfect references",
      href: "/thesis.pdf",
      description:
        "How partial verification, non-random audit selection, and imperfect labels distort automated evaluator error and agent success rates. Diagnostic-accuracy methods + LLM-as-judge correction: factorial simulation, cost-aware audit model, and planned AgentRewardBench validation. Pilot: corrected intervals/weighted variance and ~32% evaluation+audit cost cut under stratified auditing (preliminary).",
      tech: [
        "Agent evaluation",
        "Verification bias",
        "Imperfect reference",
        "LLM-as-judge",
        "Simulation",
        "AgentRewardBench",
      ],
      metric: "M.S. thesis · v3.0 progress report · Nov 2026",
      status: "in-progress",
      image: {
        src: "/projects/thesis.jpg",
        alt: "Diagram of judge verdict, partial audit sample, and imperfect reference for evaluator auditing",
      },
    },
    {
      id: "thesis-face-assistant",
      title:
        "Facial recognition & identification module for a virtual assistant",
      href: "/tesis-licenciatura.pdf",
      description:
        "Bachelor’s thesis (TES Jocotitlán, Sep 2019; advisor: M.C.C. Juan Carlos Ambriz Polo). Viola–Jones/OpenCV detection, modified VGG16 with transfer learning (2,622-D features), cosine similarity for owners vs guests. Identification scores 0.6150–0.8243 by lighting, traits, and profile angle.",
      tech: [
        "OpenCV",
        "VGG16",
        "CNN",
        "Transfer learning",
        "Viola–Jones",
        "Cosine similarity",
      ],
      metric: "B.S. thesis · Sep 2019 · cosine match 0.615–0.824",
      status: "completed",
      links: [
        { label: "Summary PDF", href: "/tesis-licenciatura.pdf" },
        { label: "Full manuscript (DOCX)", href: "/tesis-licenciatura.docx" },
      ],
      image: {
        src: "/projects/face-assistant.jpg",
        alt: "Face detection box and CNN feature maps for virtual-assistant identity matching",
      },
    },
  ] as Project[],
  writing: [
    {
      year: "2026",
      title:
        "Estimating automated AI-agent evaluator error under partial verification and imperfect references",
      href: "/thesis.pdf",
      kind: "M.S. thesis · in progress",
    },
    {
      year: "2019",
      title:
        "Facial recognition & identification module for a virtual assistant",
      href: "/tesis-licenciatura.pdf",
      kind: "B.S. thesis",
    },
  ] as Writing[],
  education: [
    {
      id: "ms-ai",
      range: "Sep 2025 — Present",
      title: "Master’s Degree in Artificial Intelligence",
      company: "TES Jocotitlán",
      summary:
        "Thesis on estimating automated AI-agent evaluator error under partial verification and imperfect references (advisor: M.C.C. Erika López González). Coursework in AI, ML, and applied data science.",
      tech: ["Machine Learning", "Data Science", "Agent Evaluation", "Statistics"],
    },
    {
      id: "tesjo-bs",
      range: "2014 — 2019",
      title: "Bachelor’s Degree · Computer Systems Engineering",
      company: "TES Jocotitlán",
      summary:
        "Professional thesis: facial recognition and identification module for a virtual assistant using OpenCV, Viola–Jones, and VGG16 (advisor: M.C.C. Juan Carlos Ambriz Polo).",
      tech: ["Computer Vision", "CNN", "OpenCV", "Python"],
    },
    {
      id: "itesm",
      range: "2018 — 2019",
      title: "Computer Science studies",
      company: "Tecnológico de Monterrey",
      summary:
        "Computer Science coursework focused on software engineering foundations (Campus Guadalajara context).",
      tech: ["Computer Science"],
    },
  ] as Experience[],
  certifications: [
    {
      label: "Anthropic · AI Fluency Framework & Foundations",
      href: "https://verify.skilljar.com/c/yokixfs5zpmd",
    },
    {
      label: "Cisco · Python Essentials 2",
      href: "https://credly.com/badges/dd744335-1762-4aa7-a766-37e5e8293559/linked_in_profile",
    },
    {
      label: "Cisco · Python Essentials 1",
      href: "https://credly.com/badges/9f492494-763b-4ec5-ac7f-a2b6e3daf9cc/linked_in_profile",
    },
    {
      label: "Cisco · Introduction to Modern AI",
      href: "https://credly.com/badges/c52faefc-9d99-4f79-a411-fea290c580e5/linked_in_profile",
    },
    {
      label: "Cisco · Introduction to Data Science",
      href: "https://credly.com/badges/f08a3a90-1819-41ba-837c-0552e3ccf7c4/linked_in_profile",
    },
    {
      label: "Logali · SAP Conceptos e Iniciación",
      href: "https://aulavirtual.logalisap.com/mod/simplecertificate/view.php?id=1728&action=get",
    },
  ] as Certification[],
  resumeHref: "/resume/",
  linkedInHref: "https://www.linkedin.com/in/jesussalatiel/",
} as const;
