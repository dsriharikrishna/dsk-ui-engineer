import { Code, Smartphone, Layout, Rocket, Smartphone as MobileApp, Palette } from "lucide-react";

export const siteContent = {
  brandName: "DSK",
  hero: {
    title: "We Build Scalable Web & Mobile Apps That Drive Real Business Growth",
    subtitle:
      "Full-stack development with modern technologies like Next.js, React, and Node.js — from idea to production.",
    ctaPrimary: "Get Free Consultation",
    ctaSecondary: "View Pricing",
    highlights: [
      "2+ Years Experience",
      "20+ Reusable Components Built",
      "Performance Optimized Apps",
      "RBAC & Scalable Systems"
    ]
  },

  servicesContent: {
    title: "Our Services",
    subtitle: "We offer a full suite of development and design services to help your business thrive in the digital age."
  },

  services: [
    // ... paths 18-67
    {
      title: "Web Development",
      description:
        "High-performance web applications using Next.js, React, and modern architectures with SSR & SEO optimization.",
      features: [
        "Next.js SSR & SSG Apps",
        "SEO Optimized Websites",
        "Reusable Component Architecture",
        "Fast Loading & Performance Focused"
      ],
      icon: "Code"
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile apps using React Native & Expo with scalable backend integrations.",
      features: [
        "Android & iOS Apps",
        "API Integration",
        "Authentication Systems",
        "Optimized Performance"
      ],
      icon: "Smartphone"
    },
    {
      title: "Dashboard & Admin Panels",
      description:
        "Advanced dashboards with analytics, RBAC, and data visualization for business operations.",
      features: [
        "Analytics Dashboards",
        "Role-Based Access Control (RBAC)",
        "Data Tables & CRUD",
        "Redux Toolkit State Management"
      ],
      icon: "Layout"
    },
    {
      title: "Deployment & Scaling",
      description:
        "End-to-end deployment, optimization, and scaling of applications for production environments.",
      features: [
        "Production Deployment",
        "Performance Optimization",
        "API Integration",
        "Scalable Architecture"
      ],
      icon: "Rocket"
    },
    {
      title: "Browser Extension Development",
      description:
        "Custom browser extensions for Chrome, Firefox, and Edge to automate tasks and enhance web functionality.",
      features: [
        "Automation Extensions",
        "Form Filling & Data Extraction",
        "Browser API Integration",
        "Manifest V3 Compliance"
      ],
      icon: "Puzzle"
    },
    {
      title: "SaaS & Product Build",
      description:
        "End-to-end development of SaaS products from architecture design to MVP launch and scaling.",
      features: [
        "SaaS Multi-tenant Architecture",
        "Subscription & Billing Integration",
        "Cloud Infrastructure Setup",
        "MVP Development & Scaling"
      ],
      icon: "ShieldCheck"
    }
  ],

  processContent: {
    title: "Our Process",
    subtitle: "We follow a streamlined, agile process to ensure high-quality delivery at every stage of the project."
  },

  process: [
    { step: "01", title: "Understanding", desc: "Analyze your idea and business goals" },
    { step: "02", title: "Planning", desc: "Define architecture and tech stack" },
    { step: "03", title: "Development", desc: "Build scalable and optimized applications" },
    { step: "04", title: "Launch", desc: "Deploy and monitor performance" }
  ],

  projectsContent: {
    title: "Featured Projects",
    subtitle: "Clean designs, robust code, and tangible results. Explore our latest work for industry leaders.",
    cta: "View All Case Studies"
  },

  projects: [
    {
      title: "Educare.AI",
      description:
        "School management platform enabling parents and schools to track student performance.",
      result: "Performance Tracking & RBAC",
      category: "Web",
      highlights: [
        "RBAC Authentication System",
        "Analytics Dashboard",
        "Performance Tracking"
      ],
      tech: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS"]
    },
    {
      title: "SanathanaVani",
      description:
        "Media management platform supporting audio, video, podcasts, and eBooks.",
      result: "Scalable Media UI",
      category: "Web",
      highlights: [
        "Media Upload System",
        "Event Management",
        "Scalable UI Architecture"
      ],
      tech: ["Next.js", "React", "Node.js"]
    },
    {
      title: "Pronto Admin Dashboard",
      description:
        "Admin panel for service provider and booking management.",
      result: "Booking Management",
      category: "Web",
      highlights: [
        "Data Tables & Pagination",
        "CRUD Operations",
        "Dashboard UI"
      ],
      tech: ["React", "Node.js", "Redux Toolkit"]
    },
    {
      title: "Form Automation Extension",
      description:
        "Browser extension for automated form filling using JSON-based mapping.",
      result: "Time-saving Automation",
      category: "Browser Ext",
      highlights: [
        "Auto Field Detection",
        "JSON Mapping",
        "Time-saving Automation"
      ],
      tech: ["JavaScript", "Browser APIs"]
    }
  ],

  pricingContent: {
    title: "Transparent Pricing",
    subtitle: "Choose a plan that fits your business stage. No hidden fees, no surprises."
  },

  pricing: [
    {
      name: "Starter",
      price: "₹10K – ₹25K",
      description: "Basic landing pages and presence.",
      features: [
        "Landing Page / Basic Website",
        "Responsive Design",
        "Basic SEO",
        "1–2 Pages"
      ],
      highlight: false
    },
    {
      name: "Growth",
      price: "₹25K – ₹80K",
      description: "Full web apps and dashboards.",
      features: [
        "Full Website / Dashboard",
        "Authentication System",
        "API Integration",
        "Performance Optimization"
      ],
      isHighlighted: true
    },
    {
      name: "Pro",
      price: "₹80K+",
      description: "Custom enterprise solutions.",
      features: [
        "Custom Web App / SaaS",
        "RBAC System",
        "Scalable Architecture",
        "Full Deployment Support"
      ],
      highlight: false
    }
  ],

  testimonialsContent: {
    title: "What Our Clients Say",
    subtitle: "We’ve helped dozens of businesses scale their operations through technology."
  },

  testimonials: [
    {
      name: "Startup Founder",
      role: "Founder",
      content: "Delivered a high-quality scalable product on time. Strong frontend and architecture skills."
    },
    {
      name: "Business Owner",
      role: "Owner",
      content: "Improved our dashboard performance and UI significantly. Very reliable developer."
    },
    {
      name: "Tech Lead",
      role: "Lead",
      content: "Great understanding of React, Next.js, and system design. Easy to work with."
    }
  ],

  contact: {
    title: "Let’s Build Your Product",
    subtitle:
      "Have an idea or need to scale your business? Let’s discuss your project.",
    email: "dsriharik8432@gmail.com",
    whatsapp: "+91 8497972914",
    phone: "+91 84979 72914",
    address: "Bangalore, Karnataka, India",
    fields: ["Name", "Email", "Budget", "Project Description"],
    cta: "Get Free Consultation"
  },

  about: {
    title: "About Me",
    description:
      "Full Stack Developer with 2+ years of experience building scalable web applications using React, Next.js, and Node.js. Specialized in dashboards, media platforms, and performance-driven applications with strong focus on reusable architecture and clean UI.",
    highlights: [
      "MERN Stack Developer",
      "Built Analytics Dashboards",
      "Experience in RBAC Systems",
      "Performance Optimization Expert"
    ]
  },

  techStack: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Redux Toolkit",
    "Tailwind CSS",
    "Browser APIs",
    "PostgreSQL",
    "Cloud Services (Vercel/AWS)"
  ]
};
