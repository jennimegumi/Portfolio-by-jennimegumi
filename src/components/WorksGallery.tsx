import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ExternalLink, 
  X, 
  Globe, 
  Search, 
  Calendar, 
  User, 
  BookOpen, 
  Compass, 
  Palette, 
  Layers, 
  Film, 
  Activity,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_WORKS } from '../data';
import { WorkItem, WorkCategory } from '../types';

interface WorksGalleryProps {
  onNavigateToCaseStudy: (caseStudyId: string) => void;
}

export default function WorksGallery({ onNavigateToCaseStudy }: WorksGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState<WorkItem | null>(null);

  const categories: { id: WorkCategory | 'all'; label: string; icon: any }[] = [
    { id: 'all', label: 'All Works', icon: Compass },
    { id: 'ui-ux', label: 'UI/UX Product', icon: Layers },
    { id: 'graphic-design', label: 'Graphic Design', icon: Palette },
    { id: 'artwork', label: 'Artworks', icon: Activity },
    { id: 'video-edit', label: 'Video Edits', icon: Film },
    { id: 'logo-branding', label: 'Logo Branding', icon: BookOpen },
  ];

  // Filtering works
  const filteredWorks = useMemo(() => {
    return PORTFOLIO_WORKS.filter((work) => {
      const matchesCategory = selectedCategory === 'all' || work.category === selectedCategory;
      const matchesSearch = 
        work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const selectCategoryName = (id: WorkCategory) => {
    switch (id) {
      case 'ui-ux': return 'UI/UX Product';
      case 'graphic-design': return 'Graphic Design';
      case 'artwork': return 'Artworks & 3D';
      case 'video-edit': return 'Video Edits';
      case 'logo-branding': return 'Logo Branding';
      default: return 'Creative Art';
    }
  };

  const getBentoPillColor = (index: number) => {
    const pillColors = ["bg-pink-100", "bg-purple-100", "bg-cyan-100", "bg-lime-100", "bg-orange-100"];
    return pillColors[index % pillColors.length];
  };

  const selectCategoryColor = (id: WorkCategory) => {
    switch (id) {
      case 'ui-ux': return 'text-black bg-cyan-300 border-black';
      case 'graphic-design': return 'text-black bg-indigo-300 border-black';
      case 'artwork': return 'text-black bg-purple-300 border-black';
      case 'video-edit': return 'text-black bg-emerald-300 border-black';
      case 'logo-branding': return 'text-black bg-amber-300 border-black';
    }
  };

  return (
    <div className="py-10 md:py-16" id="portfolio_works_section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h1 className="font-display text-3xl font-black tracking-tight text-black md:text-4.5xl">
              Creative Portfolio
            </h1>
            <p className="mt-2 text-zinc-700 text-sm font-medium">
              Explore dynamic designs filtered by discipline. Each piece represents an elegant solution built with strict focus on utility and high-contrast visuals.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-sm" id="search_input_container">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder="Search design, brand, skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-2 border-black bg-white py-3 pl-10 pr-4 text-sm text-black placeholder-zinc-500 outline-none focus:bg-yellow-50 transition-all font-display font-bold"
            />
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-none" id="categories_tab_bar">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center space-x-2.5 border-2 border-black px-4 py-2.5 font-display text-xs font-black tracking-wide transition-all ${
                  isSelected
                    ? `${getBentoPillColor(i)} text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] scale-[1.02]`
                    : 'bg-white text-zinc-700 hover:text-black hover:bg-zinc-100'
                }`}
                id={`cat_tab_btn_${cat.id}`}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Works Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
          id="works_grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={work.id}
                className="group relative overflow-hidden border-2 border-black bg-white p-4 transition-all bento-shadow-hover cursor-pointer flex flex-col justify-between"
                onClick={() => setActiveModalItem(work)}
                id={`work_card_${work.id}`}
              >
                <div>
                  {/* Visual Thumbnail Frame */}
                  <div className="relative h-52 w-full overflow-hidden border-2 border-black bg-zinc-900">
                    <img
                      src={work.image}
                      alt={work.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none" />
                    
                    {/* Category Pill Tag Overlay */}
                    <span className={`absolute top-3 left-3 border-2 px-2 py-1 font-mono text-[10px] font-black tracking-wide uppercase ${selectCategoryColor(work.category)}`}>
                      {selectCategoryName(work.category)}
                    </span>

                    {/* Play Trigger for Video-category */}
                    {work.category === 'video-edit' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="border-2 border-black bg-yellow-300 p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                          <Play className="h-5 w-5 text-black fill-black" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info Text */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between font-mono text-[10px] text-zinc-600 font-bold">
                      <span>{work.year}</span>
                      <span>{work.client || "Self Project"}</span>
                    </div>
                    <h3 className="font-display font-black text-lg text-black group-hover:text-amber-500 transition-colors leading-tight">
                      {work.title}
                    </h3>
                    <p className="text-zinc-600 text-xs line-clamp-2 leading-relaxed font-semibold">
                      {work.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badge Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-dashed border-black/15">
                  {work.skills.slice(0, 3).map((skill, index) => (
                    <span 
                      key={index} 
                      className="border border-black/25 bg-[#fafafa] px-2 py-0.5 font-mono text-[9px] font-bold text-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                  {work.skills.length > 3 && (
                    <span className="border border-black/25 bg-yellow-100 px-1.5 py-0.5 font-mono text-[9px] font-bold text-black">
                      +{work.skills.length - 3}
                    </span>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
            id="empty_grid_state"
          >
            <div className="border-2 border-black bg-yellow-100 p-4 mb-4">
              <Compass className="h-8 w-8 text-black" />
            </div>
            <h3 className="font-display text-lg font-black text-black">No matching designs found</h3>
            <p className="mt-1 text-zinc-600 text-sm max-w-xs font-semibold">
              Try typing another skill keyword, or reset category to reveal our core works stack.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 font-mono text-xs text-black underline font-bold"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Lightbox Modal / Drawer Panel */}
        <AnimatePresence>
          {activeModalItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Backing Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalItem(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-xs"
                id="lightbox_overlay"
              />

              {/* Foreground Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative z-10 w-full max-w-2xl overflow-hidden border-3 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                id="lightbox_modal"
              >
                {/* Close Button Trigger */}
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute right-4 top-4 z-20 border-2 border-black bg-white p-2 text-black hover:bg-zinc-100 outline-none bento-shadow-hover"
                  id="modal_close_btn"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Modal Visual Asset Banner */}
                <div className="relative w-full bg-zinc-950 border-b-2 border-black" id="modal_visual_box">
                  {activeModalItem.category === 'video-edit' && activeModalItem.videoUrl ? (
                    <div className="w-full h-80 md:h-[350px] bg-black">
                      <video
                        src={activeModalItem.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                        id="modal_html5_video"
                      />
                    </div>
                  ) : (
                    <div className="h-64 sm:h-80 md:h-[320px] w-full overflow-hidden">
                      <img
                        src={activeModalItem.image}
                        alt={activeModalItem.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                        id="modal_img_banner"
                      />
                    </div>
                  )}
                </div>

                {/* Modal Detail Info Content */}
                <div className="p-6 space-y-4 max-h-[380px] overflow-y-auto bg-white text-black">
                  
                  {/* Category and Client tags */}
                  <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs border-b border-black/10 pb-3">
                    <span className={`border-2 px-2.5 py-1 font-black tracking-wide uppercase ${selectCategoryColor(activeModalItem.category)}`}>
                      {selectCategoryName(activeModalItem.category)}
                    </span>
                    <div className="flex items-center space-x-4 text-zinc-700 font-bold">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {activeModalItem.client || 'Self Project'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {activeModalItem.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Detailed narrative text */}
                  <div className="space-y-1">
                    <h2 className="font-display text-xl md:text-2xl font-black text-black">
                      {activeModalItem.title}
                    </h2>
                    <p className="text-zinc-700 text-sm leading-relaxed font-semibold">
                      {activeModalItem.description}
                    </p>
                  </div>

                  {/* Skills/Tools List */}
                  <div className="space-y-1.5">
                    <h4 className="font-mono text-[9px] text-zinc-500 font-extrabold tracking-widest uppercase">
                      TOOLS & EXECUTION SPECS
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalItem.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="border border-black/25 bg-zinc-50 px-3 py-1 font-mono text-xs font-bold text-zinc-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3 border-t-2 border-black">
                    
                    {/* Navigation to Case Study if exists */}
                    {activeModalItem.caseStudyId && (
                      <button
                        onClick={() => {
                          onNavigateToCaseStudy(activeModalItem.caseStudyId!);
                          setActiveModalItem(null);
                        }}
                        className="flex items-center space-x-2 border-2 border-black bg-yellow-300 px-4 py-2 font-display text-xs font-black text-black bento-shadow-hover"
                        id="modal_goto_casestudy_btn"
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>Read Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    )}

                    {activeModalItem.link && (
                      <a
                        href={activeModalItem.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 border-2 border-black bg-pink-100 px-4 py-2 font-display text-xs font-black text-black bento-shadow-hover"
                        id="modal_ext_link"
                      >
                        <Globe className="h-4 w-4" />
                        <span>Live Preview</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => setActiveModalItem(null)}
                      className="text-xs font-mono font-bold text-zinc-500 hover:text-black px-3 py-2 ml-auto"
                    >
                      Close Window
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
