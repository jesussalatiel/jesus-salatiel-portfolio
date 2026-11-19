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

/** LinkedIn is the content source of truth for career copy. */
export const profile = {
  name: "Jesús Salatiel",
  role: "SDET & QA Automation · AI Agents, MCP & Test Strategy",
  tagline: "Quality work is thinking work.",
  location: "México",
  email: "jesussalatiel@hotmail.com",
  about: [
    "Quality work is thinking work. For 6+ years I've helped engineering teams see what their systems actually do under pressure. At Globant I lead quality engineering for InStride's AWS data platform. Before that, I built multi-agent AI systems that cut test design from 1 day to 1 hour, and validated safety-critical software for Zoox's Level 4 robotaxis.",
    "I use AI agents to design and run test automation strategies: agents that plan coverage, generate tests, run them and fix failures across the full testing life cycle. I build Playwright, Selenium, Cypress and k6 frameworks into CI/CD, and test web, mobile, APIs, data pipelines and AWS serverless systems. The goal isn't more automation for its own sake. It's clearer decisions and releases teams can stand behind.",
    "I'm completing an M.S. in Artificial Intelligence, researching how partial verification and imperfect references distort automated evaluator error. I'm also building Kivo, a modular SaaS for business operations with 5 paying customers, where AI agents connected through MCP work as digital employees.",
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
      range: "Oct 2026 — Present",
      title: "Founder",
      company: "Kivo",
      summary:
        "Built a modular SaaS for business operations from zero to 5 paying customers, with hubs designed around each client's needs.",
      bullets: [
        "Design, build and test MCP (Model Context Protocol) servers that power digital employees: AI agents that handle real business tasks",
        "Own the serverless AWS architecture, UI design in Figma and sales",
        "Orchestrate AI agents across the product cycle: requirements, design, testing, delivery and observability",
      ],
      tech: [
        "MCP",
        "AI Agents",
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "CloudFront",
        "Figma",
        "NestJS",
        "Nuxt",
        "Cognito",
        "Pulumi",
      ],
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
          id: "globant-instride",
          range: "Aug 2026 — Present",
          title: "SDET · InStride",
          summary:
            "Lead quality engineering for InStride's AWS data platform, a client backed by Arizona State University, partnering with Product and Engineering.",
          bullets: [
            "Own the k6 performance testing framework and UI/API automation with Playwright and Selenium",
            "Coordinate AI agents across the full software testing life cycle (STLC)",
            "Validate data pipelines in Databricks and MongoDB, build Datadog dashboards, and apply shift-left, fuzz and adversarial testing",
          ],
          tech: [
            "k6",
            "Playwright",
            "Selenium",
            "Databricks",
            "Datadog",
            "MongoDB",
            "AWS Lambda",
            "Step Functions",
            "AI Agents",
          ],
        },
        {
          id: "globant-ai-agents",
          range: "Jan 2026 — Jul 2026",
          title: "SDET · AI Agents",
          summary:
            "Cut test case design time from 1 day to 1 hour by building a multi-agent AI system (LLM + RAG) for a SaaS platform migrating from GCP to AWS.",
          bullets: [
            "Agents generated test cases, explored the app for edge cases and auto-fixed failing tests through pull requests",
            "Built on a Playwright and Cucumber framework with parallel runs in GitHub Actions",
          ],
          tech: [
            "Playwright",
            "Cucumber",
            "LLMs",
            "RAG",
            "Python",
            "TypeScript",
            "GitHub Actions",
          ],
        },
        {
          id: "globant-salesforce",
          range: "May 2025 — Mar 2026",
          title: "Salesforce QA Automation Engineer",
          summary:
            "Reduced regression testing from 1 day to under 5 minutes by automating 30+ critical end-to-end scenarios for Salesforce and SAP.",
          bullets: [
            "Designed a UFT framework integrated with Azure DevOps CI/CD",
            "Mentored 5 QA engineers; sprint delivery stayed at 90–100%",
          ],
          tech: ["UFT", "VBScript", "Salesforce", "SAP", "Azure DevOps", "OCR"],
        },
        {
          id: "zoox",
          range: "Oct 2024 — May 2025",
          title: "SDET · Zoox",
          summary:
            "Validated safety-critical software for Zoox (Amazon) fully autonomous robotaxis.",
          bullets: [
            "Owned Hardware-in-the-Loop (HIL) testing for vehicle control systems",
            "Built simulation test suites for complex driving scenarios with perception, robotics and embedded teams",
          ],
          tech: [
            "HIL",
            "Simulation",
            "Embedded Systems",
            "Android",
            "Sensor Fusion",
          ],
        },
        {
          id: "globant-fintech",
          range: "Feb 2022 — Nov 2024",
          title: "SDET · BNPL Fintech",
          summary:
            "Reached 80%+ regression coverage and cut manual testing by 70% as QA owner for a fast-growing Buy Now, Pay Later startup.",
          bullets: [
            "Built Playwright and Cypress frameworks that kept checkout and payment flows stable through weekly releases",
            "Partnered with the CTO on the roadmap and grew the QA team from 1 to 4 engineers",
          ],
          tech: [
            "Playwright",
            "Cypress",
            "TypeScript",
            "AWS",
            "CI/CD",
            "Payments",
          ],
        },
        {
          id: "globant-frameworks",
          range: "May 2021 — Feb 2022",
          title: "QA Automation · Web & Mobile",
          summary:
            "Designed web and mobile test automation frameworks with Selenium and Appium for apps in regulated industries, using BDD with Cucumber and SpecFlow in Java and C#, Azure DevOps pipelines and Docker.",
          tech: [
            "Selenium",
            "Appium",
            "Java",
            "C#",
            "BDD",
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
        "Improved QA delivery for client projects by combining manual testing, business analysis and test automation, with root cause analysis and CMMI-aligned process improvements.",
      tech: [
        "Manual Testing",
        "Test Automation",
        "Root Cause Analysis",
        "CMMI",
      ],
    },
    {
      id: "eeg-intern",
      range: "2017 — 2018",
      title: "Intern · EEG Prosthetic Control",
      company: "Tecnológico de Monterrey · Campus Guadalajara",
      companyHref: "https://tec.mx/es",
      summary:
        "Research internship advised by Dr. Javier Mauricio Antelis Ortíz (SNI Level 3; Neurotechnology and Brain-Computer Interface Laboratory, Campus Guadalajara): prosthetic design controlled via neural networks from non-invasive EEG — acquisition, intent decoding, and actuator mapping.",
      bullets: [
        "Brain–computer interface path from EEG acquisition to prosthetic motion commands",
        "Neural-network models to classify motor-intent patterns for upper-limb control",
        "Mapped decoded classes to prosthetic actuators in a design/prototype setting",
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
        "Modular SaaS for business operations — from zero to 5 paying customers. Hubs tailored per client; MCP servers power digital employees on serverless AWS, with NestJS, Nuxt, Cognito and Pulumi.",
      tech: [
        "MCP",
        "AI Agents",
        "NestJS",
        "Nuxt",
        "DynamoDB",
        "Cognito",
        "Pulumi",
        "AWS Lambda",
      ],
      metric: "Founder · 5 paying customers",
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
        "Estimating the Error of Automated Evaluators for AI Agents under Partial Verification and Imperfect References",
      href: "/thesis.pdf",
      description:
        "M.S. thesis (TES Jocotitlán, in progress). How partial verification, non-random audit selection, and imperfect labels distort automated evaluator error and agent success rates. Diagnostic-accuracy methods + LLM-as-judge correction: factorial simulation, cost-aware audit model, and planned AgentRewardBench validation.",
      tech: [
        "Agent evaluation",
        "Verification bias",
        "Imperfect reference",
        "LLM-as-judge",
        "Simulation",
        "AgentRewardBench",
      ],
      metric: "M.S. thesis · in progress · TES Jocotitlán",
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
        "Bachelor's thesis (2019; advisor: M.C.C. Juan Carlos Ambriz Polo). Viola–Jones/OpenCV detection, modified VGG16 with transfer learning (2,622-D features), cosine similarity for owners vs guests. Identification scores 0.6150–0.8243 by lighting, traits, and profile angle.",
      tech: [
        "OpenCV",
        "VGG16",
        "CNN",
        "Transfer learning",
        "Viola–Jones",
        "Cosine similarity",
      ],
      metric: "B.S. thesis · 2019 · cosine match 0.615–0.824",
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
        "Estimating the Error of Automated Evaluators for AI Agents under Partial Verification and Imperfect References",
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
      title: "Master's Degree in Artificial Intelligence",
      company: "TES Jocotitlán",
      summary:
        "Thesis: Estimating the Error of Automated Evaluators for AI Agents under Partial Verification and Imperfect References.",
      tech: ["Machine Learning", "Data Science", "Agent Evaluation", "Statistics"],
    },
    {
      id: "itesm",
      range: "2018 — 2019",
      title: "Bachelor's Degree, Computer Science",
      company: "Tecnológico de Monterrey",
      summary:
        "Computer Science studies at Tecnológico de Monterrey.",
      tech: ["Computer Science"],
    },
    {
      id: "toluca",
      range: "2012 — 2014",
      title: "Logistics, Materials and Supply Chain Management",
      company: "Instituto Tecnológico de Toluca",
      summary:
        "Undergraduate studies in logistics, materials, and supply chain management.",
      tech: ["Logistics", "Supply Chain"],
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
