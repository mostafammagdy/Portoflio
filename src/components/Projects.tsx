"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import FeaturedProject from "./FeaturedProject";

const featuredProjects = [
  {
    title: "La Floree Creation",
    subtitle: "Custom E-Commerce Platform — Handcrafted Resin Art",
    description:
      "A fully custom e-commerce platform built as a freelance project for a handcrafted resin art small business. Features a storefront with product customization, dual payment processing (Stripe + PayPal in CAD), a full admin dashboard for product/order management, and custom order requests for bespoke pieces — all deployed on Railway and Vercel.",
    features: [
      {
        title: "Dual Payments",
        description:
          "Stripe and PayPal checkout in CAD with server-side order creation only after successful payment.",
        icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
      },
      {
        title: "Admin Dashboard",
        description:
          "Full CRUD for products, categories, collections, orders, and custom order requests with JWT auth.",
        icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
      },
      {
        title: "Product Customization",
        description:
          "Customers configure color, details, and size options. Cart keys items by a hash of productId + customizations.",
        icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
      },
      {
        title: "Image Management",
        description:
          "Cloudinary-hosted product images with admin drag-and-drop reordering and multi-image support.",
        icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z",
      },
    ],
    techStack: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "PayPal",
      "Cloudinary",
      "Tailwind CSS",
    ],
    // videoSrc: "/lafloree-demo.mp4", // Uncomment when video is ready
    badges: ["Featured Project", "Freelance"],
    links: {
      liveSite: "https://la-floree-creations-web-jovj.vercel.app",
    },
    // TODO: Add screenshot at /public/screenshots/lafloree.png
    screenshot: "",
  },
  {
    title: "Irving24 Fuel System",
    subtitle: "Full-Stack Point-of-Sale System",
    description:
      "A production-grade POS system built for a real service station in Quebec, Canada. Handles dual sales models — prepaid fuel dispensing (DIESEL/DEF) and in-store retail — with role-based access control, real-time analytics, inventory tracking, receipt generation with QR codes, and Quebec tax compliance (GST + QST).",
    features: [
      {
        title: "Point of Sale",
        description:
          "Unified interface for fuel pump transactions and retail counter sales with real-time cart and tax calculation.",
        icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Revenue trends, payment breakdowns, fuel vs. retail splits with 7/14/30-day range charts.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
      {
        title: "Inventory & Receipts",
        description:
          "Real-time stock tracking with low-stock alerts, audit trails, and auto-generated receipt numbers with QR codes.",
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      },
      {
        title: "Security & RBAC",
        description:
          "JWT auth, role-based access (Admin/Manager/Cashier), rate limiting, and Helmet security headers.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
    ],
    techStack: [
      "Express.js",
      "MongoDB",
      "React",
      "Vite",
      "Tailwind CSS",
      "JWT",
      "Jest",
      "Winston",
    ],
    // videoSrc: "/irving24-demo.mp4", // Uncomment when video is ready
    badges: ["Featured Project"],
    links: {
      github: "https://github.com/mostafammagdy/FuelSystem",
    },
    // TODO: Add screenshot at /public/screenshots/irving24.png
    screenshot: "",
  },
];

const projects = [
  {
    title: "CarePilot",
    subtitle: "Capstone Project — York University",
    description:
      "A React Native iOS/Android application designed to help patients communicate with friends and family. Streamlined project workflows and reduced development time with Azure DevOps.",
    tech: ["React Native", "Azure DevOps", "iOS", "Android"],
    links: {
      github: "https://github.com/mostafammagdy",
    },
    // TODO: Add screenshot at /public/screenshots/carepilot.png
    screenshot: "",
  },
  {
    title: "DealHunter",
    subtitle: "E-Commerce System — York University",
    description:
      "A full-stack e-commerce web application built with React JS and Node.js. Implemented Java EE components using Spring MVC, IOC, transactions, and security modules.",
    tech: ["React.js", "Node.js", "Spring MVC", "Java EE"],
    links: {
      github: "https://github.com/mostafammagdy",
    },
    // TODO: Add screenshot at /public/screenshots/dealhunter.png
    screenshot: "",
  },
  {
    title: "Darbi Payment Integration",
    subtitle: "TechTack — Freelance Project",
    description:
      "Secure backend payment integration with the PayTabs API. Includes wallet functionality, escrow payment system, and fund management for the Darbi platform.",
    tech: ["Node.js", "PayTabs API", "PostgreSQL", "REST APIs"],
    links: {},
    // TODO: Add screenshot at /public/screenshots/darbi.png
    screenshot: "",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="projects"
          title="Projects"
          subtitle="Some things I've built"
          sectionNumber={4}
        />

        {featuredProjects.map((project) => (
          <FeaturedProject
            key={project.title}
            {...project}
            screenshot={project.screenshot || undefined}
          />
        ))}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/60 rounded-xl transition-all duration-300 group hover:border-cyan-400/15 overflow-hidden card-hover"
            >
              {/* Screenshot */}
              {project.screenshot && (
                <div className="relative aspect-video border-b border-neutral-800/40">
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-4 px-6 pt-6">
                <div className="p-2 bg-cyan-400/[0.07] rounded-lg">
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2 12.5l4.5-4.5 3 3L14 6.5M15 4h5v5"
                    />
                  </svg>
                </div>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-cyan-400 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-neutral-100 mb-1 group-hover:text-cyan-400 transition-colors px-6">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-neutral-500 mb-3 px-6">
                {project.subtitle}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1 px-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-800/40 px-6 pb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-neutral-500 hover:text-cyan-400 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
