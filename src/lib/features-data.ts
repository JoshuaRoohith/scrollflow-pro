export type FeatureColumn = {
  heading: string;
  subheading: string;
  intro: string;
  bullets: string[];
};

export type Feature = {
  slug: string;
  icon: string;
  title: string;
  cardTitle: string;
  cardBlurb: string;
  tagline: string;
  bullets?: string[];
  columns?: FeatureColumn[];
};

export const features: Feature[] = [
  {
    slug: "marketplace",
    icon: "trophy",
    title: "Marketplace",
    cardTitle: "Marketplace",
    cardBlurb:
      "Promote your products and services, connect with buyers, discover new business opportunities and post on feed to communicate with other suppliers",
    tagline:
      "Promote your products and services, connect with buyers, discover new business opportunities and post on feed to communicate with other suppliers",
    bullets: [
      "Product & Service Listings — Create and publish professional listings for your products and services.",
      "Category Filtering — Browse and filter offerings by relevant categories to quickly find what you need.",
      "Supplier Profiles — Explore detailed supplier profiles to learn more about businesses, capabilities, and offerings.",
      "Supplier Feed — Publish updates and engage with other suppliers through the Blink community feed.",
      "Marketplace Advertising — Promote your business and offerings through dedicated advertising space across the Marketplace.",
      "Rich Product Content — Upload product images, catalogues, brochures, and supporting documents to give buyers a complete view of your offering.",
      "Pricing & Discounts — Manage your product pricing and highlight special offers, promotions, and discounts to attract buyers.",
    ],
  },
  {
    slug: "blinknet-and-chat",
    icon: "network",
    title: "Blinknet and Chat",
    cardTitle: "Blink's social features",
    cardBlurb:
      "Connect, discover, and engage with suppliers through BLINK. Build new supplier relationships, explore businesses beyond your existing supply chain, and identify qualified vendors that align with your procurement needs.",
    tagline:
      "Connect, discover, and engage with suppliers through BLINK. Build new supplier relationships, explore businesses beyond your existing supply chain, and identify qualified vendors that align with your procurement needs.",
    bullets: [
      "Discover Suppliers — Browse and discover vendors/Procurers across industries to identify potential suppliers for your organisation.",
      "Build Supplier Connections — Send connection requests to suppliers/Procurers you would like to establish a relationship with.",
      "Explore Supplier Profiles — View supplier information and expand vendor records to review a summary of the company.",
      "Establish Supplier Relationships — Once a supplier accepts your request, the relationship becomes active and can be managed within Blink.",
      "Engage with Suppliers — Communicate directly with connected suppliers through Blink's Chat functionality.",
    ],
  },
  {
    slug: "opportunities",
    icon: "file-check",
    title: "Opportunities",
    cardTitle: "Opportunities",
    cardBlurb:
      "Create and discover new procurement opportunities through BLINK. Buyers can publish opportunities to their existing supplier base or the wider BLINK network, while vendors can discover and access both public and private opportunities aligned with their capabilities.",
    tagline:
      "Create and discover new procurement opportunities through BLINK. Buyers can publish opportunities to their existing supplier base or the wider BLINK network, while vendors can discover and access both public and private opportunities aligned with their capabilities.",
    columns: [
      {
        heading: "Vendor Self-service",
        subheading: "Opportunities Noticeboard",
        intro:
          "Browse and bookmark procurement opportunities from corporate organisations you have a relationship with, as well as publicly available opportunities on Blink and government tenders.",
        bullets: [
          "Browse and bookmark procurement opportunities.",
          "For You: Private opportunities from organisations you have a relationship with.",
          "Blink Public: Opportunities published publicly to all vendors on the Blink platform.",
          "Government Public: Government tenders available on the Etenders platform.",
        ],
      },
      {
        heading: "Supply Chain Management",
        subheading: "Create/ Publish Opportunities",
        intro:
          "Create and publish opportunities to your supplier network or publicly to all BLINK's suppliers.",
        bullets: [
          "Create Procurement Opportunities — Create and publish detailed procurement opportunities with all relevant requirements and information for suppliers.",
          "Private or Public Publishing — Choose whether to publish opportunities privately to your existing vendor network or publicly to the broader Blink supplier community.",
          "Document Uploads — Attach supporting procurement documents to provide suppliers with the information required to respond to the opportunity.",
          "Opportunity Tracking — Manage published opportunities from a centralised view, including their status, closing dates, and supplier engagement.",
          "Manage Active Opportunities — Edit active opportunities and update their details before the closing date is reached.",
        ],
      },
    ],
  },
  {
    slug: "dashboards-and-reports",
    icon: "chart",
    title: "Dashboards & Reports",
    cardTitle: "Dashboards & Reports",
    cardBlurb:
      "Transform procurement data into meaningful insights that support better decisions,stronger supplier management, and improved performance. ",
    tagline:
      "Transform procurement data into meaningful insights that support better decisions, stronger supplier management, and improved performance.",
    bullets: [
      "Vendor Management Reports (VMS) - Analyse your vendor ecosystem, including vendor activity, supplier information, spend, purchase orders, and industry distribution.",
      "Procure-to-Pay Reports (P2P) - Gain visibility into procurement activity across requisitions, sourcing events, evaluations, orders, invoices, and procurement spend.",
      "Verification Reports - Access vendor verification results and monitor supplier verification status based on checks performed through Blink.",
    ],
  },
  {
    slug: "vendor-management",
    icon: "vendors",
    title: "Vendor Management",
    cardTitle: "Vendor Management",
    cardBlurb:
      "Manage your entire supplier base, from onboarding and verification to compliance, profiles and Permission based  access control.",
    tagline:
      "Modular Based Dashboards and Custom Reports on all Activity in your Supply chain",
    bullets: [
      "Vendor Onboarding - Onboard new suppliers individually or in bulk, while configuring the information and requirements needed during the onboarding process.",
      "Supplier Database Management - Maintain a centralised and organised supplier database with accurate vendor profiles and relationship records.",
      "Supplier Profiles - Access detailed company profiles to review supplier information along with Supporting documents.",
      "Vendor Compliance - Monitor supplier compliance and maintain visibility of compliance information throughout the vendor relationship.",
      "Fine grain access control - Control internal access to your supplier database by managing who can view and access specific supplier information",
      "Verify supplier information against trusted sources, including CIPC, SARS, Home Affairs, credit bureaus, and other authoritative data sources.",
    ],
  },
  {
    slug: "procure-to-pay",
    icon: "handshake",
    title: "Procure-To-Pay",
    cardTitle: "Procure-To-Pay",
    cardBlurb:
      "Manage the procurement lifecycle from requisition and sourcing through evaluation, orders, KPI tracking and invoicing.",
    tagline:
      "Manage the complete procurement lifecycle in one centralised platform — from requisition and sourcing through evaluation, awarding, orders, KPI tracking, and invoice management.",
    bullets: [
      "End-to-End Procurement Workflow — Create and manage requisitions, sourcing events, evaluations, and orders throughout the procurement lifecycle, from initial requirement through to awarded work.",
      "Configurable Approvals & Full Audit Trail — Apply pre-configured approval workflows based on your organisation's delegation of authority. Maintain a complete audit trail of actions, including user commentary, decisions, and timestamps throughout the approval process.",
      "E-Submissions & Tender Evaluation — Receive electronic supplier submissions and supporting tender documentation, then filter and evaluate applications using criteria such as budget range.",
      "Contract KPI Management — Assign measurable KPIs to internal teams and suppliers against awarded work, and track progress and completion against defined requirements and deadlines.",
      "Contract Collaboration & Meetings — Schedule video meetings associated with procurement activity and invite internal stakeholders and suppliers to collaborate directly within the platform.",
      "Invoice & Payment Visibility — Track invoice statuses and access invoices linked to awarded procurement activity, providing visibility across the invoice lifecycle.",
    ],
  },
];

export const getFeature = (slug: string) => features.find((f) => f.slug === slug);
