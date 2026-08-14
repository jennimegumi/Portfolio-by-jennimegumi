/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkItem, BlogPost, CaseStudy } from './types';

export const DESIGNER_INFO = {
  name: "Jenny Grace Apo",
  title: "Multimedia & Social Media Specialist",
  location: "Quezon City, Philippines",
  about: "I am a multi-disciplinary designer and creative strategist from the Philippines, driven by a deep passion for the fascinating connection of creativity and technology. I enjoy bringing ideas to life through engaging multimedia experiences that connect, resonate, and inspire. Beyond design, you’ll also find me streaming games and sharing gameplay highlights across various social media platforms.",
  skills: [
    { 
      category: "Generative AI & Prompting", 
      items: ["AI Acumen", "AI for Brainstorming and Planning", "AI for Content Creation", "AI for Data Analysis", "AI for Research and Insights", "AI for Writing and Communicating", "Prompt Engineering"] 
    },
    { 
      category: "Social Media Management", 
      items: ["Viral Hook & Narrative Design", "Social Media Page Growth", "Audience Engagement Analytics", "Brand Voice & Community Building", "Campaign Launch Roadmaps"] 
    },
    { 
      category: "UI/UX Design", 
      items: ["Design Systems", "Figma Suite", "User Experience Design", "Interactive Prototyping", "Design Research", "Sprint Retrospectives and Planning"] 
    },
    { 
      category: "Creative Direction & Brand Identity", 
      items: ["Logo Design & Identity", "Brand Guidelines", "Typography Systems", "Marketing Collateral", "Packaging Direction"] 
    },
    { 
      category: "Video Editing & Motion Design", 
      items: ["After Effects & Premiere", "Cinematic Color Grading", "Timeline Pacing & Sync", "2D Motion Graphics", "Visual Storytelling"] 
    },
    { 
      category: "Traditional & Digital Art", 
      items: ["Realistic Portrait", "Fan Art", "Anime Style", "Twitch Emotes"] 
    }
  ],
  stats: [
    { label: "Industry Experience", value: "4+" },
    { label: "Asset Delivered", value: "700+" },
    { label: "Brand and Client Collaborations", value: "25+" },
    { label: "Workflow Efficiency (Fast Turnaround)", value: "40%" }
  ],
  testimonials: [
    {
      quote: "Jenny is a true visual artist—a creative force with mastery in digital and traditional media. Her work reflects a deep understanding of visual communication in graphic design, illustration, branding, or layout. She brings a fresh, original perspective to every project, making her creative output visually compelling and strategic.",
      author: "Jasper Briones",
      role: "Marketing Manager, Havitas Developments Corporation "
    },
    {
      quote: "Jenny is a true visual artist—a creative force with mastery in digital and traditional media. Her work reflects a deep understanding of visual communication in graphic design, illustration, branding, or layout. She brings a fresh, original perspective to every project, making her creative output visually compelling and strategic.",
      author: "Jasper Briones",
      role: "Marketing Manager, Havitas Developments Corporation "
    }
  ]
};

export const PORTFOLIO_WORKS: WorkItem[] = [
  // Generative AI Prompting & Artworks
  {
    id: "reks-rf-klook-poster",
    title: "Roller Fever Klook Promotional Poster",
    category: "logo-branding",
    client: "REKS Amusement Com, Inc.",
    year: "2025",
    description: "A promotional poster for the launch of Klook as official ticket vendor of Roller Fever.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/476806416_473696595815075_223410523812333655_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1937&ctp=s2048x1937&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH0hG4o9y5XZ18yaKLoDKPt-ekObcx9cTD56Q5tzH1xMMTpcSO6uzL3lLezjK_VtpDjkktaEpSy815hCvWmxWWd&_nc_ohc=kTKApbh3m8cQ7kNvwERuNzj&_nc_oc=AdqdfQUyY81PYHpaAk5RfjMoJvSIgmDjMcORQ7Pr0m7z-XKgVSLNBB_m5LxBLAKdF54&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=5dy8ltHLeYgGwJv8511zeg&_nc_ss=7b2a8&oh=00_AQF67_gHIoiULJpWpMQERsmKZ43AH5IBKWvn3OInK2HvDw&oe=6A847016",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral"],
    link: "https://web.facebook.com/photo.php?fbid=453354657849269&type=3"
  },
  {
    id: "flora-biomorph-ai",
    title: "Flora Biomorph: AI-Synthesized Eco-Packaging Concepts",
    category: "generative-ai",
    client: "BioSphere Lab",
    year: "2025",
    description: "Hyper-realistic prompt-crafted botanical models blending microscopic fungal mycelium structures with luxury glass vessel concepts, generated through meticulous iterative prompt chaining and inpainting.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    skills: ["Negative Prompt Tuning", "DALL-E 3 & FLUX", "Inpainting / Outpainting", "Photorealistic Textures"]
  },

  // Social Media Management & Content Strategy
  {
    id: "omni-channel-growth-surge",
    title: "Kroma Energy: 4.8M Social Media Growth & Brand Playbook",
    category: "social-media",
    client: "Kroma Beverage Co.",
    year: "2026",
    description: "Comprehensive social media strategy and daily content execution across Instagram, TikTok, and LinkedIn. Implemented high-retention visual hooks, daily community engagement loops, and carousel masterclasses driving 4.8M organic impressions.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    skills: ["Social Content Strategy", "TikTok / Reels Hooks", "Analytics & Retargeting", "Community Management", "Visual Grid Planning"],
    caseStudyId: "social-growth-campaign"
  },
  {
    id: "lumina-brand-activation",
    title: "Lumina Wearables: Organic Social Launch & Creator Activation",
    category: "social-media",
    client: "Lumina Tech",
    year: "2025",
    description: "30-day social media launch rollout integrating teaser motion cutdowns, founder story threads on LinkedIn/X, interactive polls, and user-generated content curation that sold out the initial batch in 72 hours.",
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=900&q=80",
    skills: ["Launch Roadmaps", "Influencer Collabs", "Copywriting & Tone", "Social Growth Hacks"]
  },

  // UI/UX Design
  {
    id: "pulse-fintech",
    title: "Pulse: Crypto Assets Dashboard & App",
    category: "ui-ux",
    client: "Pulse Finance",
    year: "2026",
    description: "A dark-mode high-fidelity cryptocurrency portfolio manager featuring real-time charting structures, atomic design systems, and seamless multi-sig authorization flows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    skills: ["Figma Suite", "Dark Mode UI", "Financial Charts", "Component Architecture", "Design Tokens"],
    link: "https://figma.com",
    caseStudyId: "pulse-fintech"
  },
  {
    id: "helios-wellness",
    title: "Helios: Chronobiological Habit Tracker",
    category: "ui-ux",
    client: "Helios Wellness Co.",
    year: "2025",
    description: "Mobile user interface designed for alignment with local solar cycles. Includes animated fluid state feedback, customized ring progress metrics, and warm atmospheric gradients.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    skills: ["iOS Guidelines", "Haptic Mapping", "Neumorphism Details", "Micro-Interactions"],
    link: "https://figma.com"
  },

  // Graphic Design
  {
    id: "brutalist-posters",
    title: "Kinesis Brutalist Experimental Posters",
    category: "graphic-design",
    client: "Kinesis Art Fair",
    year: "2025",
    description: "A physical poster campaign utilizing ultra-high contrast Swiss typography, distressed photo textures, editorial grid systems, and offset duotones.",
    image: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=900&q=80",
    skills: ["InDesign Grids", "Poster Compositing", "Halftone Textures", "Swiss Typography"],
    link: "https://behance.net"
  },
  {
    id: "nomad-editorial",
    title: "The Nomad: Travel & Wanderlust Magazine",
    category: "graphic-design",
    client: "Nomad Press",
    year: "2026",
    description: "Print and tablet magazine layouts combining asymmetric headings, ample whitespace breathing room, full-bleed scenic photography borders, and elegant serif typography.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80",
    skills: ["Editorial Direction", "Print Production", "Grid Alignment", "Type Hierarchy"]
  },

  // Artworks
  {
    id: "chroma-waves",
    title: "Chroma Waves: Abstract 3D Sculpt Series",
    category: "artwork",
    client: "Self-initiated NFT Campaign",
    year: "2026",
    description: "A series of digital abstract models exploring ambient liquid chrome refraction, soft holographic materials, and deep light-bending shadows.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    skills: ["Blender 3D", "Octane Render", "Holographic Shaders", "Digital Composition"]
  },
  {
    id: "cyber-distortion",
    title: "Cybernetic Distortion & Synthetic Glitch Space",
    category: "artwork",
    client: "Neo-Tkyo Exhibition",
    year: "2025",
    description: "Vector exploration of retro-futuristic circuitry grids, neon-split layouts, and generative grid particles simulating sensory cyber environments.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=80",
    skills: ["Generative Art", "Vector Drafting", "Neon Post-processing", "Glitch Texturing"]
  },

  // Video Editing
  {
    id: "synthetic-runway",
    title: "Synthetic Runway: Fashion Film Cut",
    category: "video-edit",
    client: "Veridian Apparel",
    year: "2026",
    description: "Dynamic visual promo cut containing rhythmic editing, custom speed ramps, chromatic aberration flashes, and deep synthesis sound effects.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=80",
    skills: ["Premiere Pro", "Rhythmic Syncing", "Color Grading C-Log", "Kinetic Captions"],
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: "future-cities",
    title: "Future Cities: Cinematic Drone Retrospective",
    category: "video-edit",
    client: "Omni Media Corp",
    year: "2025",
    description: "A gorgeous 4K high-density city drone montage featuring subtle visual effects enhancements, camera stabilization mapping, and a cinematic atmospheric score.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    skills: ["After Effects", "Drone Stabilization", "Atmospheric LUTs", "VFX Compositing"],
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  },

  // Logo & Branding
  {
    id: "aura-skincare",
    title: "Aura Skincare Brand Rebrand & Guidelines",
    category: "logo-branding",
    client: "Aura Labs",
    year: "2026",
    description: "Holistic modern rebrand representing botanical cleanliness. Includes minimalist monoline logos, earth-tone color systems, customized glass jar labels, and geometric typography rules.",
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=900&q=80",
    skills: ["Brand Guidelines", "Minimalist Logo", "Product Packaging", "Eco Stock Selector"],
    caseStudyId: "aura-skincare"
  },
  {
    id: "volt-electric",
    title: "Volt Electric Mobility Identity Systems",
    category: "logo-branding",
    client: "Volt Micro",
    year: "2025",
    description: "A hyper-dynamic identity system built on geometric angles, neon-green electric color swatches, active charging icons, and fluid responsive guidelines for hardware.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    skills: ["Vector Branding", "Stationery Layouts", "Hardware Marking", "Symbol Synthesis"]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "prompt-engineering-mastery",
    title: "Prompt Engineering as a Visual Medium: Unlocking Latent Space Precision",
    excerpt: "Beyond basic text prompts: how token weighting, seed locking, camera parameter syntax, and ControlNet references bridge the gap between AI generation and production design.",
    date: "June 10, 2026",
    readTime: "6 min read",
    category: "Generative AI & Tech",
    tags: ["Prompt Engineering", "Midjourney", "AI Design", "Workflow Automation"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    content: [
      "Generative AI prompting is no longer about throwing random adjectives at a chatbox and hoping for luck. In professional design workflows, prompt engineering is an exact science of linguistic syntax, latent space token weighting, and camera parameter control.",
      "By structuring prompts into strict hierarchical tiers—Subject, Context, Medium, Lighting Physics, Camera Optics, and Parameter Flags (--ar, --stylize, --no, --cw)—designers can achieve pixel-perfect visual consistency across entire product campaigns.",
      "Combining text prompts with image-to-image ControlNet depth maps and LoRA fine-tuning enables brand characters, product silhouettes, and proprietary color palettes to remain faithfully rendered in any imagined environment.",
      "The highest form of modern creative direction is human-AI symbiosis: using generative prompt suites for rapid 100x concept ideation, and human craftsmanship for final typographic hierarchy, spatial balancing, and emotional resonance."
    ]
  },
  {
    id: "social-media-retention",
    title: "The 3-Second Hook: Structuring High-Converting Social Media Visuals",
    excerpt: "Analyzing the anatomy of viral design carousels, algorithmic engagement signals, and converting passive scrollers into passionate brand advocates.",
    date: "May 08, 2026",
    readTime: "5 min read",
    category: "Social Media Strategy",
    tags: ["Social Growth", "Content Strategy", "Visual Hooks", "Community Building"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    content: [
      "In social media management, the first 3 seconds of a video or the first slide of an Instagram carousel determine 90% of total engagement. Algorithms reward retention rate and shares far higher than passive likes.",
      "To build a high-performing visual hook, combine an unexpected counter-intuitive visual contrast with bold, single-line headline typography. Avoid long introductory fluff; deliver value in the first frame.",
      "A successful social media management system relies on clear pillar architectures: 40% Education & Actionable Insight, 30% Proof & Case Studies, 20% Cultural / Behind-the-Scenes Personality, and 10% Direct Conversion Offers.",
      "Pairing consistency in posting schedules with genuine community interaction in the comments section fosters loyal brand advocates who amplify organic reach with zero paid ad spend."
    ]
  },
  {
    id: "typography-grids",
    title: "The Silent Grid: How Typography Guides Eyes on Minimal Portfolios",
    excerpt: "An in-depth look at visual hierarchy, modern lettering contrast, and why intentional negative space beats visual clutter every single time.",
    date: "April 24, 2026",
    readTime: "5 min read",
    category: "Typography & Layouts",
    tags: ["Grid systems", "Minimalism", "Aesthetics", "Font pairings"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    content: [
      "In design, quietness is a superpower. When developers or designers attempt to build personal landing pages or GitHub portfolios, they often feel an urge to fill every pixel of empty width with animated charts or secondary buttons. Truly exceptional interfaces breathe through structural negative space.",
      "The layout grid is the skeletal framework of readability. By aligning primary headings to dynamic asymmetric columns, you form a clear scanning order for potential clients, hiring directors, and design partners.",
      "When styling headings, choose display fonts that convey your design character (like Space Grotesk) and pair them with humble, practical geometric sans-serif fonts for the text (such as Inter). Keep your font scale tightly grouped: four sizes are usually enough to cover everything from caption texts to display blocks.",
      "Readability is the perfect balance of font size, line-height, character spacing (tracking), and container margins. If a reader can scan your story without cognitive fatigue, they will absorb, register, and remember your work."
    ]
  },
  {
    id: "video-rhythm-cuts",
    title: "Pacing and Rhythm: Post-Production Secrets for Modern Video Directors",
    excerpt: "How to edit cinematic videos, master transition pacing, synchronize custom soundtracks, and maintain tension throughout a high-energy corporate showcase.",
    date: "March 18, 2026",
    readTime: "7 min read",
    category: "Video & Motion",
    tags: ["Video Editing", "Rhythm Sync", "Color Grading", "Film Pacing"],
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80",
    content: [
      "Most video editors approach cuts as simple logical dividers between video clips. Rich, memorable editing treats cuts as musical beats. Synchronizing timeline markers directly with audio transients sets up a rhythmic dialogue that keeps the viewer's eyes glued to the screen.",
      "To prevent your flow from becoming monotonous, practice the principle of rhythmic contrast. Group rapid, high-intensity cuts inside active transition points, then contrast them with long, steady, panoramic frames immediately following.",
      "Color grading is your emotional anchor. Applying a stylized, low-saturation LUT combined with deep, warm midtones establishes an instant cinema mood. Color is light, and light is story.",
      "Lastly, don't overlook sound effects (SFX) layering. The visual track of a subject in motion only reaches its full potential when supported by custom sub-bass risers, metallic sweeps, and ambient atmospheric textures."
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "social-growth-campaign",
    category: "social-media",
    title: "Kroma Energy: 4.8M Reach Social Media Overhaul & AI-Augmented Visual Engine",
    client: "Kroma Beverage Co.",
    timeline: "3 Months (Spring 2026)",
    role: "Head of Social Strategy & Visual Direction",
    challenge: "Kroma Beverage needed to launch their zero-sugar organic energy drink into a fiercely competitive market dominated by legacy brands with multi-million dollar ad budgets. They lacked an established social footprint and needed an authentic, high-velocity organic content strategy to build an engaged community from scratch.",
    solution: "We engineered an omni-channel social media growth engine combining Generative AI-prompted concept art with high-retention short-form video hooks on TikTok and Instagram Reels. We established a daily publishing cadence, interactive community polling, and a distinct rebellious brand voice.",
    process: [
      {
        title: "1. Audience Persona & Algorithmic Blueprinting",
        description: "Mapped Gen-Z and millennial fitness audiences. Identified top-performing content archetypes: rapid-cut recipe hacks, clean desk aesthetic routines, and relatable founder storytelling.",
      },
      {
        title: "2. Generative AI Prompting for Rapid Visual Ideation",
        description: "Built proprietary Midjourney v6 and Stable Diffusion prompt templates to generate 50+ hyper-stylized 3D can mockups in fantastical environments every week for social teaser carousels.",
      },
      {
        title: "3. Short-Form Video & Visual Hook Architecture",
        description: "Scripted and edited 45 high-tempo Reels and TikToks utilizing the '3-Second Visual Hook' formula, custom sound effects, and kinetic typography overlays.",
      },
      {
        title: "4. Community Engagement Loops & Creator Seeding",
        description: "Managed real-time comment interactions, engaged in viral brand banter, and coordinated micro-influencer product seeding that generated over 300+ organic user videos.",
      }
    ],
    results: [
      { metric: "Total Organic Impressions", value: "4.8M+", description: "Reached across TikTok, Instagram, and X without paid advertising." },
      { metric: "Follower Growth", value: "+320%", description: "Grew from 3,200 to 48,000+ highly active community members." },
      { metric: "DTC Launch Conversion", value: "3.4x", description: "First batch of 20,000 cases sold out within 14 days of campaign rollout." }
    ]
  },
  {
    id: "aura-skincare",
    category: "logo-branding",
    title: "Aura Skincare Rebrand & Botanical Visual Identity",
    client: "Aura Labs Inc.",
    timeline: "3 Months (Q1 2026)",
    role: "Lead Brand Identity Designer",
    challenge: "Aura Labs had created high-quality, scientifically proven botanical serums, but their existing plastic branding made them look like generic pharmacy items. They needed a luxury, ecological, premium brand image capable of standing out on visual social shelves and high-end organic boutique stores.",
    solution: "We designed a holistic, high-nature visual identity system focusing on tactile minimalism. Combining organic earth tones (moss green, raw clay, warm desert linen) with a clean monoline typographic mark, we custom-designed embossed label matrices, eco-responsible glass jars, and thorough brand guidelines.",
    process: [
      {
        title: "1. Brand Auditing & Vision Aligning",
        description: "Evaluated competitors in the premium skincare sphere. We established that while competitors used aggressive modern science labels, Aura could represent a harmonious 'nature-meets-laboratory' balance.",
      },
      {
        title: "2. Monoline Typography & Mark Selection",
        description: "Engineered a minimalist geometry logo featuring overlapping soft botanical leaves, aligned completely within a perfect circle. Hand-polished serif tracking for the brand lettering.",
      },
      {
        title: "3. Packaging Materials & Layout Mocking",
        description: "Sourced post-consumer recycled thick amber glass containers and textured cotton labels that feel rough and luxury to organic hands.",
      },
      {
        title: "4. Building the Digital Brand Playbook",
        description: "Constructed detailed rules for secondary fonts, strict safe-zone spacing boundaries, color contrast standards for digital screens, and creative campaign themes.",
      }
    ],
    results: [
      { metric: "Design Award Nominations", value: "3", description: "Secured nominations in global packaging categories." },
      { metric: "B2B Retail Pickups", value: "+300%", description: "Organic boutiques and hotel chains picked up Aura serums in record time." },
      { metric: "Instagram Engagement", value: "+74%", description: "Aesthetic bottle photography naturally boosted social media sharing." }
    ]
  },
  {
    id: "pulse-fintech",
    category: "ui-ux",
    title: "Pulse Crypto Dashboard Interface & Atomic Design System",
    client: "Pulse Finance Corp",
    timeline: "4 Months (Winter 2025)",
    role: "Principal Product Designer",
    challenge: "Traditional cryptocurrency dashboards are notoriously cluttered, overwhelming retail investors with flashing numbers, disconnected data columns, and visual noise. Pulse needed a highly calming, accessible, dashboard interface that keeps metrics clean and empowers users to trade with high confidence.",
    solution: "We engineered a modular widget-based dashboard layout utilizing a soothing deep-ocean color scale, high-precision typography components, and visual charts that compress data without losing detail. We bundled this into an extensible atomic design system.",
    process: [
      {
        title: "1. Persona Wireframing & Task Optimization",
        description: "Conducted user research with 20 active crypto investors. Discovered that the primary pain point was checking multi-sig transactions without visiting scanning pages.",
      },
      {
        title: "2. Setting up the Atomic Design Token System",
        description: "Built strict tokens for borders, corners, semantic error colors, and layout widths in Figma to allow engineers to build and edit code modularly.",
      },
      {
        title: "3. Chart Clutter Reduction & Refraction",
        description: "Created simplified custom canvas graphs showing candle vectors, volume trends, and moving averages on light-hovering interactions only.",
      },
      {
        title: "4. Stress-Testing in Real environments",
        description: "Tested the wireframes with light/dark contrast and rapid price changes to verify immediate readability across different viewport environments.",
      }
    ],
    results: [
      { metric: "Onboarding Fluidity", value: "+45%", description: "Users completed their first cold-wallet configuration in half the usual steps." },
      { metric: "Active Daily Session Retention", value: "82%", description: "High retention rates attributed to the clean design." },
      { metric: "Engineering Transfer Speed", value: "2x", description: "Shared Figma design tokens minimized frontend coding iterations." }
    ]
  }
];
