
import React from 'react';
import { Benefit, Step, Testimonial, FAQ, Feature, Project } from './types';

export const HERO_CONTENT = {
  eyebrow: "For Forward-Thinking Business Owners",
  headline: "Do You Want to Scale Your Business?",
  subheadline: "We help businesses scale giving a 5X return on investment. We have worked with 30+ businesses across multi-continents, showing a proven system that guarantees results within a period of time.",
  cta: "Scale Now",
  socialProof: "Trusted by 30+ businesses globally.",
  calendly: "https://calendly.com/darylopiyo7603/new-meeting"
};

export const PROBLEM_SECTION = {
  headline: "Is your current website holding your business back?",
  symptoms: [
    "Slow load times causing customer churn",
    "Dated design making your brand look unprofessional",
    "Systems that break the moment you try to scale",
    "A website that looks good but doesn't actually convert sales"
  ]
};

export const MENTOR_CONTENT = {
  empathy: "I know how it feels to have a great business idea bogged down by technical limitations. It's frustrating to watch competitors move faster because your website is outdated.",
  authority: "With over 4 years of deep engineering and consulting experience, I've helped businesses move from stagnation to high-growth through high-performance digital presence.",
  personalTouch: "Hi, I'm Alloo. I don't just build websites; I build profit centers."
};

export const PROJECTS: Project[] = [
  {
    title: "EcoStream Global",
    category: "Corporate Website",
    description: "Built a high-conversion website for a regional logistics giant, replacing a legacy system.",
    result: "Increased lead generation by 45% within the first two months.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Performance", "SEO", "ROI"],
    link: "#"
  },
  {
    title: "FinPulse Analytics",
    category: "Conversion Engine",
    description: "Developed a high-frequency data visualization dashboard for financial consulting.",
    result: "5X ROI achieved through automated client onboarding.",
    image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Growth", "Analytics"],
    link: "#"
  },
  {
    title: "HealthBridge Portal",
    category: "Service Platform",
    description: "A secure patient management system designed for global scaling.",
    result: "Scaled to 3 different continents with 100% uptime.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    tags: ["Security", "Scaling", "Global"],
    link: "#"
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: "Infinite Scalability",
    description: "Your website will be built to handle 10x growth from day one without breaking a sweat.",
    icon: "🚀"
  },
  {
    title: "Conversion-Focused UX",
    description: "We design interfaces that don't just look pretty, but lead your users toward a sale.",
    icon: "💰"
  },
  {
    title: "Future-Proof Tech",
    description: "Using modern stacks to ensure your digital presence remains relevant and fast for years.",
    icon: "🛡️"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO, FinTech Global",
    quote: "Alloo transformed our slow website into a blazing fast experience. Our retention rates jumped by 40% in the first quarter.",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom Logistics",
    quote: "Finally, a consultant who speaks 'Business'. The ROI on this project was clear within the first 6 weeks of launch.",
    image: "https://picsum.photos/id/65/100/100"
  }
];

export const THREE_STEP_PLAN: Step[] = [
  {
    number: 1,
    title: "The Strategy Session",
    description: "We dive deep into your business goals, current bottlenecks, and ROI targets."
  },
  {
    number: 2,
    title: "Strategic Build",
    description: "We implement our proven system to build a website that guarantees results."
  },
  {
    number: 3,
    title: "Scale & Dominate",
    description: "We launch and provide the metrics to show your 5X return on investment."
  }
];

export const FEATURES: Feature[] = [
  { name: "5X ROI Tracking", icon: "📈" },
  { name: "Global Deployment", icon: "🌍" },
  { name: "Lead Generation", icon: "🎯" },
  { name: "Conversion Audits", icon: "🔍" },
  { name: "SEO Optimization", icon: "⚡" },
  { name: "Secure Systems", icon: "🔒" },
  { name: "Mobile Responsive", icon: "📱" },
  { name: "24/7 Support", icon: "🛠️" }
];

export const FAQS: FAQ[] = [
  {
    question: "How do you guarantee a 5X ROI?",
    answer: "Our system is built on conversion data from 30+ successful projects. We don't just build sites; we build sales funnels that optimize every visitor."
  },
  {
    question: "Will I own the source code?",
    answer: "Absolutely. You own 100% of the intellectual property and code for your website once complete."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we have worked with businesses across multiple continents and have a proven track record of handling global scaling."
  }
];
