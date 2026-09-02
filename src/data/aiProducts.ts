// ── AI Product Catalog Data ────────────────────────────────────────────────────
// All product content sourced from https://agileleap.ai/ai-product-catalog

export interface AIProduct {
  id: string;
  title: string;
  image: string;
  useCaseCount: number;
  useCases: string[];
  industries: string[];
  overview: string;
  detailedSolution: {
    whoValuesThis: string[];
    exampleUseCase: string;
    howItWorks: string[];
    valueDelivered: string[];
  };
}

export const aiProducts: AIProduct[] = [
  {
    id: 'business-process-automation',
    title: 'Business Process Automation Solution',
    image: '/images/ai-products/business-process-automation.webp',
    useCaseCount: 9,
    useCases: [
      'Productivity Tool',
      'Customer Experience',
      'Forecasting',
      'Hiring & Onboarding',
      'Inventory Management',
      'Project Management',
      'Supply Chain & Logistics',
      'Workflow Automation',
    ],
    industries: [
      'Technology & Software',
      'Banking & Finance',
      'Energy & Utilities',
      'Government & Public Sector',
      'Healthcare',
      'Education',
      'Manufacturing',
      'Retail & E-commerce',
      'Logistics & Supply Chain',
      'Telecommunications',
    ],
    overview:
      'Enterprise AI agents are intelligent digital assistants that streamline and automate complex business workflows across functions like customer service, operations, finance, HR, and decision support. These agents operate 24/7, connect with existing systems, and handle repetitive tasks, data gathering, and process automation—freeing teams for higher-impact work. They provide instant, personalized responses, manage real-time data, and adapt to business needs—delivering improved accuracy, increased productivity, and significant cost savings. By unifying data and automating approvals, support, and analytics, this solution enhance decision-making, deliver better customer and employee experiences, and scale effortlessly as operations grow. With enterprise AI agents, organizations gain a tireless, adaptable digital workforce that powers operational excellence and competitive advantage in today\'s fast-paced business world.',
    detailedSolution: {
      whoValuesThis: [
        'CIOs and department heads looking to stretch resources, control costs, and accelerate digital transformation',
        'Operations, HR, finance, IT, and customer experience leaders who want to scale quality service and decision-making without additional headcount.',
        'Organizations seeking to improve retention, satisfaction, and compliance while gaining a competitive edge in fast-paced markets.',
      ],
      exampleUseCase:
        'An enterprise HR department implements an AI agent to automate onboarding and handle employee queries. New hires receive tailored resources, IT access is set up instantly, leave requests are auto-approved per policy, and common benefits questions are answered around the clock. HR staff allocate more time for hiring strategy and culture initiatives, while employees enjoy faster, smoother support—all with complete audit trails and compliance managed automatically.',
      howItWorks: [
        'AI agents integrate with core business systems (like CRM, HR, finance, or service desks) and use natural language understanding, automation, and real-time analytics to: Automate ticket handling, approvals, onboarding steps, and data entry.',
        'Provides personalized responses and self-service for employees or customers, 24/7',
        'Analyzes incoming requests and route tasks or escalate only complex issues to humans',
        'Surface relevant insights and dashboards, speeding up informed decision-making - Adapt and learn from organizational data, improving responses and automating more processes over time.',
      ],
      valueDelivered: [
        'Dramatically reduced processing time—routine tasks are completed in seconds, not hours',
        'Up to 30–40% productivity gains and significant operating cost savings across teams',
        'Greater consistency and accuracy, with lower error rates and improved compliance',
        'Empowered staff and happier customers due to faster resolutions and round-the-clock service',
        'Enhanced agility and innovation, as high-volume work is automated and insights become actionable in real time',
      ],
    },
  },
  {
    id: 'sales-team-accelerator',
    title: 'Sales Team Accelerator',
    image: '/images/ai-products/sales-team-accelerator.webp',
    useCaseCount: 8,
    useCases: [
      'Customer Experience',
      'Targeting & Personalization',
      'Hiring & Onboarding',
      'Predictive Models',
      'Productivity Tool',
      'Sales & Marketing',
      'Scheduling Assistant',
      'Workflow Automation',
    ],
    industries: [
      'Retail & E-commerce',
      'Logistics & Supply Chain',
      'Banking & Finance',
      'Energy & Utilities',
      'Healthcare',
      'Telecommunications',
      'Government & Public Sector',
      'Technology & Software',
    ],
    overview:
      'The Sales Team Accelerator is a multi-modal AI sales agent designed for human-like conversations, in-depth discovery, and personalized product recommendations across platforms. It transforms sales from a bottleneck into a growth accelerator with brandable voice, advanced conversational ability, and seamless CRM integration. The system engages prospects across channels—phone, chat, and email—with contextual understanding that feels natural and authentic, driving higher conversion rates and customer satisfaction.',
    detailedSolution: {
      whoValuesThis: [
        'Sales leaders and revenue teams struggling with lead follow-up speed and consistency',
        'Organizations with high inbound lead volume that need to qualify and route prospects faster',
        'Companies looking to extend sales capacity without proportionally increasing headcount',
      ],
      exampleUseCase:
        'A B2B software company deploys the Sales Team Accelerator to handle initial prospect engagement. The AI agent conducts discovery calls, qualifies leads based on BANT criteria, schedules demos with the right sales rep, and follows up with personalized content—all while maintaining a natural, branded conversation style that prospects can\'t distinguish from human interaction.',
      howItWorks: [
        'Engages prospects across multiple channels (phone, chat, email) with contextual, human-like conversations',
        'Conducts in-depth discovery and qualifies leads against your specific criteria automatically',
        'Provides personalized product recommendations based on prospect needs and behavior patterns',
        'Seamlessly integrates with CRM systems to log interactions and update pipeline in real-time',
      ],
      valueDelivered: [
        'Dramatically increased lead response speed—engage prospects within seconds, not hours',
        'Higher conversion rates through consistent, personalized engagement at scale',
        'Reduced cost per acquisition as AI handles initial qualification and nurturing',
        'Sales team focuses on high-value activities while AI manages repetitive outreach',
        'Improved pipeline visibility with automated CRM updates and intelligent reporting',
      ],
    },
  },
  {
    id: 'hipaa-compliant-office-assistant',
    title: 'HIPAA Compliant Office Assistant',
    image: '/images/ai-products/hipaa-compliant-office-assistant.webp',
    useCaseCount: 5,
    useCases: [
      'Customer Experience',
      'Productivity Tool',
      'Scheduling Assistant',
      'Sales & Marketing',
      'Workflow Automation',
    ],
    industries: ['Healthcare', 'Technology & Software'],
    overview:
      'A customizable HIPAA-compliant AI voice assistant built on Amazon\'s Nova Sonic model for appointment scheduling. It facilitates natural conversations for booking, rescheduling, and canceling appointments. The system eliminates robotic-sounding responses and lag by using speech-to-speech models rather than fragmented TTS/STT sequences, delivering a seamless patient experience while maintaining full regulatory compliance.',
    detailedSolution: {
      whoValuesThis: [
        'Healthcare providers and medical practices seeking to automate patient scheduling while maintaining HIPAA compliance',
        'Office managers overwhelmed with phone-based appointment management and patient inquiries',
        'Healthcare organizations looking to improve patient satisfaction and reduce no-show rates',
      ],
      exampleUseCase:
        'A busy medical practice deploys the HIPAA Compliant Office Assistant to handle appointment scheduling calls. Patients call and interact with a natural-sounding AI that checks availability, books appointments, sends confirmations, and handles rescheduling—all while maintaining HIPAA-compliant data handling. No-show rates drop by 35% thanks to automated reminders, and front-desk staff are freed to focus on in-office patient care.',
      howItWorks: [
        'Uses Amazon Nova Sonic speech-to-speech model for natural, lag-free voice conversations',
        'Integrates with EHR and scheduling systems to check real-time availability and book appointments',
        'Maintains full HIPAA compliance with encrypted data transmission and compliant storage',
        'Handles appointment booking, rescheduling, cancellations, and automated reminders',
      ],
      valueDelivered: [
        'Eliminated hold times—patients schedule appointments instantly via natural voice conversation',
        'Up to 35% reduction in no-show rates through automated appointment reminders',
        'Full HIPAA compliance maintained without manual oversight or risk of human error',
        'Front-desk staff freed from phone-based scheduling to focus on in-person patient care',
        'Improved patient satisfaction scores through 24/7 scheduling availability',
      ],
    },
  },
  {
    id: 'robotic-process-automation',
    title: 'Robotic Process Automation & Agentic AI',
    image: '/images/ai-products/robotic-process-automation.webp',
    useCaseCount: 10,
    useCases: [
      'RPA',
      'Data & Analytics',
      'Development & Innovation',
      'Finance & Accounting',
      'Hiring & Onboarding',
      'Productivity Tool',
      'Sales & Marketing',
      'Supply Chain & Logistics',
      'Workflow Automation',
    ],
    industries: [
      'Banking & Finance',
      'Chemicals',
      'Construction',
      'Education',
      'Forestry',
      'Energy & Utilities',
      'Healthcare',
      'Hospitality',
      'Insurance',
      'Logistics & Supply Chain',
      'Manufacturing',
      'Real Estate',
      'Retail & E-commerce',
      'Technology & Software',
    ],
    overview:
      'Uses digital robots ("bots") to mimic human interactions with software systems for data entry and transaction processing without major IT investment. RPA combined with Agentic AI creates intelligent automation that goes beyond simple rule-following—agents can understand context, make decisions, and adapt to new situations. This solution integrates legacy systems with modern applications, enabling end-to-end process automation across the enterprise.',
    detailedSolution: {
      whoValuesThis: [
        'CTOs and IT leaders managing complex legacy system landscapes that need modernization without replacement',
        'Operations teams spending significant time on repetitive, rule-based data processing tasks',
        'Organizations with high-volume transaction processing needs in finance, HR, or supply chain operations',
      ],
      exampleUseCase:
        'A financial services firm deploys RPA bots to automate accounts payable processing. Bots extract invoice data from emails and PDFs, validate against purchase orders, enter data into the ERP system, and route exceptions to human reviewers. The Agentic AI layer handles edge cases by understanding context and making judgment calls that previously required human intervention—reducing processing time by 80% and errors by 95%.',
      howItWorks: [
        'Digital bots mimic human interactions with existing software—clicking, typing, copying data between systems',
        'Agentic AI adds intelligence to RPA bots—context understanding, decision-making, and adaptive behavior',
        'Connects legacy systems with modern applications through a no-code/low-code integration layer',
        'Continuously monitors processes, identifies bottlenecks, and optimizes workflows in real-time',
      ],
      valueDelivered: [
        'Up to 80% reduction in manual processing time across high-volume business operations',
        'Dramatic error reduction (95%+) by eliminating human data entry mistakes',
        'Legacy system integration without costly replacement or major IT overhauls',
        'Scalable automation that grows with business needs without proportional headcount increases',
        'ROI typically achieved within 3-6 months of deployment',
      ],
    },
  },
  {
    id: 'ai-invoice-agent',
    title: 'AI Invoice Agent & Workflow Automation',
    image: '/images/ai-products/ai-invoice-agent.webp',
    useCaseCount: 5,
    useCases: [
      'Workflow Automation',
      'Customer Experience',
      'Inventory Management',
      'Productivity Tool',
      'Supply Chain & Logistics',
    ],
    industries: [
      'Banking & Finance',
      'Retail & E-commerce',
      'Healthcare',
      'Logistics & Supply Chain',
      'Manufacturing',
      'Technology & Software',
    ],
    overview:
      'The AI Invoice Agent autonomously scans incoming invoices, extracts billing information, creates payment tasks, and forwards them for approval. It ensures timely and accurate financial processing by identifying supplier data, line items, tax calculations, and pricing breakdowns automatically. The system integrates with your existing accounting and ERP platforms to create a seamless, end-to-end accounts payable workflow.',
    detailedSolution: {
      whoValuesThis: [
        'Finance teams processing high volumes of invoices manually with risk of errors and delays',
        'CFOs looking to improve cash flow management and take advantage of early payment discounts',
        'Organizations seeking to reduce accounts payable processing costs and cycle times',
      ],
      exampleUseCase:
        'A manufacturing company receives hundreds of supplier invoices weekly in various formats (PDF, email, paper scans). The AI Invoice Agent automatically captures each invoice, extracts all relevant data, matches it against purchase orders and delivery receipts, flags discrepancies for review, and routes approved invoices for payment—reducing processing time from days to minutes.',
      howItWorks: [
        'Scans and captures invoices from multiple sources—email attachments, PDFs, scanned documents, and digital submissions',
        'Uses AI to extract key data points: supplier info, line items, amounts, tax calculations, payment terms',
        'Automatically matches invoices against purchase orders and goods receipt documents',
        'Routes approved invoices through configurable approval workflows and creates payment tasks',
      ],
      valueDelivered: [
        'Invoice processing time reduced from days to minutes—95% faster throughput',
        'Near-zero error rates in data extraction, eliminating costly payment mistakes',
        'Improved vendor relationships through faster, more reliable payment processing',
        'Better cash flow management with visibility into upcoming payment obligations',
        'Significant cost savings from reduced manual labor and early payment discount capture',
      ],
    },
  },
  {
    id: 'ai-rfp-parser',
    title: 'AI-powered RFP Parser and Response Generator',
    image: '/images/ai-products/ai-rfp-parser.webp',
    useCaseCount: 6,
    useCases: [
      'Customer Experience',
      'Hiring & Onboarding',
      'Predictive Models',
      'Productivity Tool',
      'Project Management',
      'Workflow Automation',
    ],
    industries: [
      'Telecommunications',
      'Logistics & Supply Chain',
      'Healthcare',
      'Government & Public Sector',
      'Energy & Utilities',
      'Education',
      'Banking & Finance',
      'Manufacturing',
      'Retail & E-commerce',
      'Technology & Software',
    ],
    overview:
      'Automates the end-to-end process of parsing complex RFPs and generating submission-ready documents with relevance scores. The system significantly enhances speed and consistency for proposal processes in IT services and beyond. It reads, understands, and analyzes incoming RFPs, then generates tailored responses by pulling from your knowledge base, past proposals, and case studies.',
    detailedSolution: {
      whoValuesThis: [
        'Business development and proposal teams spending weeks on complex RFP responses',
        'Organizations that need to increase their RFP win rate while reducing response costs',
        'Companies managing large knowledge bases of past proposals, case studies, and technical documentation',
      ],
      exampleUseCase:
        'An IT services company receives complex RFPs requiring responses across dozens of technical and compliance categories. The AI parser breaks down each RFP into structured requirements, scores relevance against capabilities, and drafts comprehensive responses using the company\'s knowledge base—reducing response time from 2 weeks to 2 days while improving consistency and compliance accuracy.',
      howItWorks: [
        'Parses complex RFP documents and breaks them into structured requirement categories',
        'Scores each requirement against your capabilities and assigns relevance ratings',
        'Pulls relevant content from your knowledge base, past proposals, and case study library',
        'Generates submission-ready response documents with proper formatting and compliance verification',
      ],
      valueDelivered: [
        'RFP response time reduced by up to 80%—from weeks to days',
        'Higher win rates through more consistent, comprehensive, and tailored proposals',
        'Reduced proposal team workload allowing focus on strategic customization',
        'Better compliance accuracy through automated requirement tracking and verification',
        'Institutional knowledge captured and reused efficiently across all proposals',
      ],
    },
  },
  {
    id: 'ai-ecommerce-retail',
    title: 'AI Agent for eCommerce & Retail',
    image: '/images/ai-products/ai-ecommerce-retail.webp',
    useCaseCount: 6,
    useCases: [
      'Customer Experience',
      'Inventory Management',
      'Predictive Models',
      'Sales & Marketing',
      'Targeting & Personalization',
      'Trend Analysis',
    ],
    industries: ['Retail & E-commerce'],
    overview:
      'Analyzes purchase history and preferences to offer relevant product suggestions and streamline purchases across WhatsApp, Instagram, and web. The AI agent provides personalized shopping experiences, manages customer inquiries, tracks orders, and handles returns—all through natural conversation. It integrates with your product catalog and inventory system to provide real-time availability and pricing information.',
    detailedSolution: {
      whoValuesThis: [
        'E-commerce businesses looking to increase conversion rates and average order value through AI-powered personalization',
        'Retail brands seeking to provide consistent, 24/7 customer support across multiple channels',
        'Marketing teams wanting to leverage customer data for targeted product recommendations and promotions',
      ],
      exampleUseCase:
        'An online fashion retailer deploys the AI agent across their website, WhatsApp, and Instagram. The agent greets returning customers by name, suggests outfits based on past purchases and current trends, helps with sizing questions, processes orders, and handles returns—all through natural conversation. Average order value increases by 25% and customer satisfaction scores improve significantly.',
      howItWorks: [
        'Analyzes customer purchase history, browsing behavior, and preferences to build personalized profiles',
        'Provides intelligent product recommendations across web, WhatsApp, Instagram, and other channels',
        'Handles complete order lifecycle—from product discovery to purchase, tracking, and returns',
        'Integrates with inventory, pricing, and catalog systems for real-time accuracy',
      ],
      valueDelivered: [
        'Up to 25% increase in average order value through personalized product recommendations',
        'Significant improvement in customer satisfaction scores with 24/7 intelligent support',
        'Reduced customer service costs while handling higher inquiry volumes',
        'Increased conversion rates through friction-free shopping experiences across channels',
        'Valuable customer insights from AI-analyzed shopping behavior and preference data',
      ],
    },
  },
  {
    id: 'blizzardberry-ai-agents',
    title: 'BlizzardBerry AI Agents for Web Applications',
    image: '/images/ai-products/blizzardberry-ai-agents.webp',
    useCaseCount: 2,
    useCases: ['Customer Experience', 'Workflow Automation'],
    industries: [
      'Banking & Finance',
      'Education',
      'Energy & Utilities',
      'Government & Public Sector',
      'Healthcare',
      'Logistics & Supply Chain',
      'Manufacturing',
      'Retail & E-commerce',
      'Technology & Software',
      'Telecommunications',
    ],
    overview:
      'An agentic natural language interface that allows users to perform complex tasks (orders, tickets, data queries) simply by stating their intent. BlizzardBerry AI agents transform any web application into a conversational platform where users accomplish goals through natural language rather than navigating complex menus and forms. The system understands context, maintains conversation state, and executes multi-step workflows autonomously.',
    detailedSolution: {
      whoValuesThis: [
        'Product teams looking to dramatically simplify complex web application interfaces',
        'Organizations seeking to reduce user training costs and improve adoption of internal tools',
        'Businesses wanting to provide an AI-first experience layer on top of existing web applications',
      ],
      exampleUseCase:
        'A logistics company integrates BlizzardBerry agents into their order management web app. Instead of navigating through multiple screens and forms, dispatchers simply type or speak: "Create a rush shipment from warehouse A to client XYZ, priority overnight, and notify the customer." The AI agent completes all steps automatically—creating the order, assigning the route, generating labels, and sending customer notifications.',
      howItWorks: [
        'Provides a natural language interface layer that sits on top of existing web applications',
        'Understands user intent and translates conversational requests into multi-step application actions',
        'Maintains conversation context and state across complex, multi-step workflows',
        'Integrates with existing application APIs and databases without requiring system redesign',
      ],
      valueDelivered: [
        'Dramatic reduction in time-to-task—complex operations completed through simple conversations',
        'Significantly reduced training costs as users interact naturally instead of learning complex UIs',
        'Higher application adoption rates and user satisfaction scores',
        'Existing web applications gain AI capabilities without costly rebuilds',
        'Accessible interface for all user skill levels, reducing dependency on power users',
      ],
    },
  },
  {
    id: 'nexgen-helpdesk',
    title: 'NexGen HelpDesk Assistant',
    image: '/images/ai-products/nexgen-helpdesk.webp',
    useCaseCount: 4,
    useCases: [
      'Workflow Automation',
      'Software Development',
      'Customer Experience',
      'Productivity Tool',
    ],
    industries: [
      'Technology & Software',
      'Banking & Finance',
      'Energy & Utilities',
      'Logistics & Supply Chain',
      'Retail & E-commerce',
    ],
    overview:
      'An AI-driven ticketing system that categorizes, prioritizes, routes, and resolves common support issues automatically. The NexGen HelpDesk Assistant learns from every interaction, building an ever-expanding knowledge base that improves resolution accuracy over time. It handles tier-1 support independently while intelligently escalating complex issues with full context to human agents.',
    detailedSolution: {
      whoValuesThis: [
        'IT support leaders managing growing ticket volumes with limited staff',
        'CIOs seeking to improve IT service delivery metrics (MTTR, first-contact resolution, SLA compliance)',
        'Organizations looking to reduce support costs while improving end-user satisfaction',
      ],
      exampleUseCase:
        'A technology company deploys the NexGen HelpDesk Assistant to handle internal IT support. The AI automatically resolves password resets, software installation requests, VPN issues, and common troubleshooting—handling 70% of tickets without human intervention. Complex issues are escalated with full diagnostic context, reducing resolution time by 50% for human agents. Employee satisfaction scores increase by 40%.',
      howItWorks: [
        'Automatically categorizes and prioritizes incoming tickets using NLP and historical pattern analysis',
        'Resolves common issues autonomously using a continuously learning knowledge base',
        'Routes complex tickets to the right specialist with full context and diagnostic information',
        'Provides real-time dashboards and analytics on ticket trends, resolution times, and team performance',
      ],
      valueDelivered: [
        'Up to 70% of tier-1 support tickets resolved automatically without human intervention',
        '50% reduction in mean time to resolution for escalated issues',
        'Significant improvement in SLA compliance and first-contact resolution rates',
        'Reduced support costs while handling growing ticket volumes',
        'Improved employee satisfaction through faster, more consistent support experiences',
      ],
    },
  },
  {
    id: 'ai-lead-scoring',
    title: 'AI-powered Lead Scoring Solution',
    image: '/images/ai-products/ai-lead-scoring.webp',
    useCaseCount: 1,
    useCases: ['Sales & Marketing'],
    industries: ['Retail & E-commerce', 'Technology & Software', 'Banking & Finance'],
    overview:
      'Uses machine learning to instantly identify high-conversion prospects based on touchpoints like website behavior, email engagement, and CRM records. The system analyzes dozens of signals to score and rank leads in real-time, enabling sales teams to focus their energy on the prospects most likely to convert. It continuously learns from closed-won and closed-lost data to improve scoring accuracy over time.',
    detailedSolution: {
      whoValuesThis: [
        'Sales teams overwhelmed by lead volume and unable to effectively prioritize outreach',
        'Marketing teams wanting to demonstrate clear ROI and improve lead quality passed to sales',
        'Revenue operations leaders seeking to optimize the entire lead-to-revenue pipeline',
      ],
      exampleUseCase:
        'A SaaS company receives thousands of leads monthly from multiple channels. The AI lead scoring system analyzes each lead\'s behavior (website visits, content downloads, email opens), firmographic data (company size, industry, tech stack), and engagement patterns to assign a predictive conversion score. Sales reps focus on the top 20% of scored leads and see a 3x improvement in close rates.',
      howItWorks: [
        'Ingests data from multiple sources: CRM, website analytics, email engagement, social media, and third-party data',
        'Machine learning models analyze dozens of behavioral and firmographic signals to predict conversion likelihood',
        'Assigns dynamic scores that update in real-time as prospects engage with your brand',
        'Provides actionable insights on why leads score high or low, enabling targeted outreach strategies',
      ],
      valueDelivered: [
        'Up to 3x improvement in sales close rates by focusing on high-scoring leads',
        'Reduced time wasted on low-quality leads that are unlikely to convert',
        'Better marketing-sales alignment through data-driven lead qualification',
        'Continuous improvement in scoring accuracy as the model learns from outcomes',
        'Clear visibility into pipeline health and revenue predictability',
      ],
    },
  },
  {
    id: 'ai-cybersecurity',
    title: 'AI Powered Cyber Sec & Hosting',
    image: '/images/ai-products/ai-cybersecurity.webp',
    useCaseCount: 3,
    useCases: ['Threat Detection', 'Fraud Detection', 'Predictive Models'],
    industries: [
      'Technology & Software',
      'Banking & Finance',
      'Education',
      'Energy & Utilities',
      'Government & Public Sector',
      'Healthcare',
      'Logistics & Supply Chain',
      'Manufacturing',
      'Retail & E-commerce',
      'Telecommunications',
    ],
    overview:
      'Next-gen security focusing on CMMC 2.0 compliance and real-time defense against deepfake scams and AI-driven malware. The solution combines AI-powered threat detection with enterprise-grade hosting infrastructure to provide a comprehensive security posture. It monitors network traffic, analyzes behavioral patterns, identifies anomalies, and responds to threats in real-time—providing proactive defense against sophisticated cyber attacks.',
    detailedSolution: {
      whoValuesThis: [
        'CISOs and security teams facing increasingly sophisticated AI-driven cyber threats',
        'Organizations requiring CMMC 2.0 compliance for government contracts',
        'Businesses concerned about emerging threats like deepfake attacks and AI-generated phishing',
      ],
      exampleUseCase:
        'A defense contractor needs to achieve CMMC 2.0 compliance while protecting against advanced persistent threats. The AI Powered Cyber Sec solution monitors all network traffic in real-time, detects and blocks deepfake-based social engineering attempts, identifies AI-generated phishing emails, and provides continuous compliance monitoring—all while hosting critical applications in a hardened, compliant infrastructure.',
      howItWorks: [
        'AI-powered threat detection monitors network traffic and user behavior in real-time',
        'Advanced models identify deepfake attempts, AI-generated phishing, and novel malware signatures',
        'Automated incident response contains threats and initiates remediation within seconds',
        'Continuous compliance monitoring and reporting for CMMC 2.0 and other security frameworks',
      ],
      valueDelivered: [
        'Real-time threat detection and response—threats contained in seconds, not hours',
        'Protection against next-gen threats including deepfake scams and AI-driven attacks',
        'Streamlined CMMC 2.0 compliance with automated monitoring and audit-ready reporting',
        'Reduced security team workload through AI-powered alert triage and automated response',
        'Enterprise-grade hosting with built-in security controls and compliance guarantees',
      ],
    },
  },
];

// Helper: extract unique use cases and industries
export const allUseCases = [...new Set(aiProducts.flatMap((p) => p.useCases))].sort();
export const allIndustries = [...new Set(aiProducts.flatMap((p) => p.industries))].sort();
