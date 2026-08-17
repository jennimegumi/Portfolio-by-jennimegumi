import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Layers, 
  Palette, 
  Film, 
  Compass,
  ArrowUpRight,
  TrendingUp,
  Share2
} from 'lucide-react';
import { DESIGNER_INFO } from '../data';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // Map icons to categories
  const getIconForCategory = (category: string) => {
    if (category.includes("Generative") || category.includes("Prompting") || category.includes("AI")) {
      return <Sparkles className="h-5 w-5 text-black" />;
    }
    if (category.includes("Social Media")) {
      return <Share2 className="h-5 w-5 text-black" />;
    }
    if (category.includes("UI/UX")) return <Layers className="h-5 w-5 text-black" />;
    if (category.includes("Creative")) return <Palette className="h-5 w-5 text-black" />;
    if (category.includes("Motion")) return <Film className="h-5 w-5 text-black" />;
    return <Compass className="h-5 w-5 text-black" />;
  };

  const getBentoColorForCategory = (index: number) => {
    const colors = ["bg-amber-100", "bg-emerald-100", "bg-purple-100", "bg-sky-100", "bg-orange-100", "bg-rose-100"];
    return colors[index % colors.length];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 120, damping: 14 } 
    }
  };

  return (
    <div className="py-8 md:py-12 lg:py-16" id="hero_section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Bento Blocks Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tile 1: Giant Greeting Box (spans 8 cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-8 border-2 border-black bg-yellow-100 p-6 md:p-8 bento-shadow flex flex-col justify-between relative overflow-hidden"
            id="hero_greeting_box"
          >
            {/* Visual accent circles in back */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-200/50 -mr-16 -mt-16 border-2 border-dashed border-black/10 pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center space-x-2 border-2 border-black bg-pink-300 px-3 py-1 text-xs font-mono font-bold text-black uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                <span>ABOUT ME</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4.5xl md:text-5.5xl font-black leading-none text-black tracking-tight">
                Crafting <span className="bg-lime-300 px-1 border border-black inline-block transform -rotate-1">Digital Universes</span> & Memorable Brand Landmarks
              </h1>

              <p className="text-zinc-800 text-base md:text-md leading-relaxed font-medium max-w-2xl">
                Hello there! I am <b className="text-black font-extrabold">{DESIGNER_INFO.name}</b> {DESIGNER_INFO.about}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 relative z-10 border-t border-black/10 pt-6">
              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('works')}
                  className="group flex items-center space-x-2 border-2 border-black bg-black px-5 py-3 font-display text-sm font-bold text-white transition-all bento-shadow-hover hover:bg-zinc-800"
                  id="hero_view_works_btn"
                >
                  <span>Explore Works Gallery</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                
                <button
                  onClick={() => onNavigate('contact')}
                  className="flex items-center space-x-2 border-2 border-black bg-white px-5 py-3 font-display text-sm font-bold text-black transition-all bento-shadow-hover hover:bg-zinc-50"
                  id="hero_contact_btn"
                >
                  <span>Contact Inbox</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              {/* Status */}
              <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-zinc-900 bg-white/70 border border-black/10 px-3 py-2">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-zinc-800" />
                  {DESIGNER_INFO.location.split('(')[0]}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Tile 2: SVG Generative Interactive Sculpt Tool (spans 4 cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 border-2 border-black bg-white p-6 bento-shadow flex flex-col justify-between overflow-hidden"
            id="hero_profile_art_box"
          >
            {/* DISABLING SVG ART |  SVG Generative Art Sculpture 
            <div className="relative h-48 border-2 border-black bg-zinc-950 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_70%)]" />
              <div className="absolute inset-0 bento-grid-dashed-bg opacity-10" />
              
              <svg className="w-40 h-40 opacity-90" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="sculptGradBento" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="50%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                  <linearGradient id="sculptGradSphereBento" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <motion.path 
                  d="M20,50 C20,30 40,20 50,35 C60,50 80,45 80,60 C80,75 55,85 45,70 C35,55 20,70 20,50 Z" 
                  fill="none" 
                  stroke="url(#sculptGradBento)" 
                  strokeWidth="3"
                  animate={{
                    d: [
                      "M20,50 C20,30 40,20 50,35 C60,50 80,45 80,60 C80,75 55,85 45,70 C35,55 20,70 20,50 Z",
                      "M25,45 C25,25 45,25 55,30 C65,35 75,50 75,65 C75,80 50,75 40,75 C30,75 25,65 25,45 Z",
                      "M20,50 C20,30 40,20 50,35 C60,50 80,45 80,60 C80,75 55,85 45,70 C35,55 20,70 20,50 Z"
                    ]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle 
                  cx="50" 
                  cy="50" 
                  r="14" 
                  fill="url(#sculptGradSphereBento)"
                  animate={{ scale: [0.9, 1.15, 0.9], y: [-3, 3, -3] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
              
              <span className="absolute bottom-2 left-3 font-mono text-[9px] text-zinc-500">
                MODULE: ACTIVE / REF_019A
              </span>
            </div>
            */}
            <div className="mt-4 space-y-2">
              {/* Designer Photo */}
                <div className="w-full h-auto">
                <img src="https://i.ibb.co/yjJw6pw/Portfolio-hero-pic.png"
                alt={`${DESIGNER_INFO.name} profile`} 
                className="w-full h-auto object-cover"/>
                </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-lg font-black text-black">{DESIGNER_INFO.name}</h3>
                  <p className="font-mono text-xs font-bold text-zinc-600">{DESIGNER_INFO.title}</p>
                </div>
                <span className="border border-black bg-pink-100 px-1.5 py-0.5 font-mono text-[9px] font-bold text-black uppercase">
                  Quote
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                "Creativity creates possibilities. Design gives those possibilities direction."
              </p>
            </div>
          </motion.div>

          {/* Tile 3: Key Stats Box (spans 4 cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 border-2 border-black bg-cyan-100 p-6 bento-shadow flex flex-col justify-between"
            id="hero_stats_bento"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-black pb-2">
                <TrendingUp className="h-4 w-4 text-black" />
                <span className="font-display text-xs font-extrabold uppercase text-black tracking-wider">Metrics & Stats</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {DESIGNER_INFO.stats.map((stat, i) => (
                  <div key={i} className="border border-black/10 bg-white/40 p-2 text-center transform hover:scale-105 transition-all">
                    <span className="block font-display text-2xl font-black text-black">
                      {stat.value}
                    </span>
                    <span className="block font-mono text-[9px] font-bold text-zinc-700 uppercase tracking-widest leading-none mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 font-mono text-[10px] text-zinc-600 bg-white/50 p-2 text-center border border-dashed border-black/20">
              MULTIMEDIA DESIGNER EXPERTISE
            </div>
          </motion.div>

          {/* Tile 4: Availability & Stamps (spans 4 cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 border-2 border-black bg-teal-100 p-6 bento-shadow flex flex-col justify-between relative overflow-hidden"
            id="hero_availability_bento"
          >
            <div className="absolute right-3 top-3 border border-black/20 bg-pink-200/40 text-pink-700 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-none rotate-6">
              STAMPED
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 border-b border-black pb-2">
                <ShieldCheck className="h-4 w-4 text-black" />
                <span className="font-display text-xs font-extrabold uppercase text-black tracking-wider">Commission Card</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-extrabold text-black uppercase">AVAILABLE NOW</span>
                </div>
                <p className="text-xs text-zinc-700 font-medium">
                  Currently accepting graphic design, social media video edits, and art commission projects (traditional and digital artwork).
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3">
              {/*<div>
                <span className="block text-[9px] font-mono text-zinc-600 uppercase">TIMELINE</span>
                <span className="text-xs font-bold text-black">Q2-Q4 2026</span>
              </div>*/}
              <div>
                <span className="block text-[9px] font-mono text-zinc-600 uppercase">OFFICE</span>
                <span className="text-xs font-bold text-black">QC / REMOTE</span>
              </div>
            </div>
          </motion.div>

          {/* Tile 5: Quote / Philosophy (spans 4 cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 border-2 border-black bg-rose-100 p-6 bento-shadow flex flex-col justify-between"
            id="hero_philosophy_bento"
          >
            <div className="space-y-3">
              <div className="font-mono text-4xl font-extrabold text-rose-300 pointer-events-none select-none">
                “
              </div>
              <p className="text-zinc-800 text-sm italic font-medium leading-relaxed">
                Despite her youth, Jenny demonstrates remarkable leadership qualities. She has managed projects with focus, clarity, and professionalism far beyond her years.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-black/10 flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-black/10 border border-black/20 flex items-center justify-center font-mono text-[10px] font-bold text-black">
                JB
              </div>
              <div>
                <span className="block text-[10px] font-extrabold text-black">Jasper Briones</span>
                <span className="block text-[9px] font-mono font-bold text-zinc-600 leading-none">Digital Marketing Team Head & Consultant, RASA Surveying</span>
              </div>
            </div>
          </motion.div>

          {/* Slogan Banner Block: Spans full width */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-12 border-2 border-black bg-purple-100 p-4 bento-shadow overflow-hidden relative"
            id="hero_marquee_banner"
          >
            <div className="flex animate-infinite-scroll whitespace-nowrap space-x-8 font-display text-xs font-black uppercase text-black">
              <span className="bg-white border border-black px-2 py-0.5 inline-block">★ GENERATIVE AI PROMPTING</span>
              <span>✦ SOCIAL MEDIA MANAGEMENT & STRATEGY</span>
              <span className="bg-lime-200 border border-black px-2 py-0.5 inline-block text-black">★ MULTIMEDIA DESIGNS</span>
              <span>✦ ENTHUSIASTIC ARTIST AND LEARNER</span>
              <span className="bg-pink-300 border border-black px-2 py-0.5 inline-block text-black">★ CREATIVE MIND</span>
              <span>✦ VISIONARY</span>
            </div>
          </motion.div>

          {/* Tile 6: Areas of Expertise / Individual custom sub-bento grids */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-12 space-y-6 pt-6"
            id="skills_bento_area"
          >
            <div>
              <h2 className="font-display text-2xl font-black text-black">
                Areas of Expertise & Skills
              </h2>
              <p className="text-zinc-600 text-sm font-medium">
                My multidisciplinary approach bridges the gap between creativity and technology, allowing me to deliver innovative solutions across various domains.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DESIGNER_INFO.skills.map((skillGroup, i) => (
                <div
                  key={i}
                  className={`border-2 border-black ${getBentoColorForCategory(i)} p-5 bento-shadow flex flex-col justify-between`}
                  id={`skill_group_${i}`}
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="border border-black bg-white p-2 text-black">
                        {getIconForCategory(skillGroup.category)}
                      </div>
                      <h3 className="font-display font-extrabold text-base text-black leading-tight">
                        {skillGroup.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {skillGroup.items.map((skill, si) => (
                        <span 
                          key={si}
                          className="border border-black/20 bg-white/70 px-2.5 py-1 font-mono text-[11px] font-bold text-zinc-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-black/10 pt-3 text-right">
                    <span className="font-mono text-[10px] font-bold text-zinc-500">
                      SYS_MODULE_0{(i + 1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Block */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-12 space-y-6 pt-6"
            id="testimonials_bento_area"
          >
            <div>
              <h2 className="font-display text-2xl font-black text-black">
                Collaborator Testimonies
              </h2>
              <p className="text-zinc-600 text-sm font-medium">
                Read direct feedback from company founders and previous clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DESIGNER_INFO.testimonials.map((test, i) => (
                <div 
                  key={i} 
                  className="relative border-2 border-black bg-lime-50 p-6 md:p-8 bento-shadow"
                  id={`testimonial_${i}`}
                >
                  {/* Giant Quote mark backdrop */}
                  <div className="absolute top-2 right-4 font-display text-8xl font-black text-black/5 pointer-events-none select-none">
                    “
                  </div>

                  <p className="text-zinc-800 text-sm font-medium italic leading-relaxed relative z-10">
                    "{test.quote}"
                  </p>

                  <div className="mt-6 flex items-center space-x-3 pt-4 border-t border-black/15">
                    <div className="h-9 w-9 flex items-center justify-center border border-black bg-amber-200 font-mono text-xs font-bold text-black">
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display font-black text-xs text-black">{test.author}</h4>
                      <p className="font-mono text-[10px] font-bold text-zinc-600 leading-none mt-0.5">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}
