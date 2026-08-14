import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  Target, 
  ChevronRight, 
  Compass, 
  TrendingUp 
} from 'lucide-react';
import { CASE_STUDIES } from '../data';

interface CaseStudiesProps {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

export default function CaseStudies({ selectedId, setSelectedId }: CaseStudiesProps) {

  const selectedStudy = CASE_STUDIES.find(cs => cs.id === selectedId);

  // Return the correct category label
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'ui-ux': return 'UI/UX Product Case Study';
      case 'logo-branding': return 'Logo Branding Case Study';
      case 'social-media': return 'Social Media & Growth Study';
      case 'generative-ai': return 'Generative AI Case Study';
      default: return 'Design Case Study';
    }
  };

  // Return the correct color scale for the case studies
  const getThemeColor = (category: string) => {
    if (category === 'ui-ux') return { text: 'text-black', bg: 'bg-cyan-300', border: 'border-black' };
    if (category === 'social-media') return { text: 'text-black', bg: 'bg-pink-300', border: 'border-black' };
    if (category === 'generative-ai') return { text: 'text-black', bg: 'bg-yellow-300', border: 'border-black' };
    return { text: 'text-black', bg: 'bg-amber-300', border: 'border-black' };
  };

  return (
    <div className="py-10 md:py-16" id="case_studies_section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!selectedId ? (
            /* CASE STUDIES GRID LIST */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
              id="case_studies_grid_list"
            >
              {/* Headings */}
              <div className="max-w-xl">
                <h1 className="font-display text-3xl font-black tracking-tight text-black md:text-4.5xl">
                  Deep Process Case Studies
                </h1>
                <p className="mt-2 text-zinc-700 text-sm font-medium">
                  A high-fidelity look detailing how core design decisions are forged. Each study breaks down raw challenges, workflows, and performance metrics.
                </p>
              </div>

              {/* Grid cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CASE_STUDIES.map((study) => {
                  const theme = getThemeColor(study.category);
                  return (
                    <div
                      key={study.id}
                      onClick={() => setSelectedId(study.id)}
                      className="group relative cursor-pointer overflow-hidden border-2 border-black bg-white p-6 md:p-8 transition-all bento-shadow-hover flex flex-col justify-between"
                      id={`casestudy_card_${study.id}`}
                    >
                      {/* Top bar details */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between font-mono text-[10px] font-bold">
                          <span className={`border-2 px-2 py-0.5 uppercase tracking-wide ${theme.bg} ${theme.border}`}>
                            {getCategoryLabel(study.category)}
                          </span>
                          <span className="text-zinc-500">{study.timeline}</span>
                        </div>

                        <h3 className="font-display text-2xl font-black text-black group-hover:text-amber-500 transition-colors leading-tight">
                          {study.title}
                        </h3>

                        <p className="text-zinc-700 text-sm leading-relaxed font-semibold line-clamp-3">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Cover Stats Preview row */}
                      <div className="mt-8 pt-6 border-t-2 border-black grid grid-cols-3 gap-2">
                        {study.results.map((res, ri) => (
                          <div key={ri} className="text-left border border-black/10 bg-zinc-50 p-2">
                            <span className="block font-display text-base font-black text-black leading-none">
                              {res.value}
                            </span>
                            <span className="block text-[8px] font-mono uppercase text-zinc-500 font-extrabold tracking-wider mt-1 leading-none">
                              {res.metric.split(' ')[0]}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Call-to-action bar */}
                      <div className="mt-6 flex items-center text-xs font-mono font-black text-black group-hover:underline">
                        <span>Read Process Portfolio</span>
                        <ChevronRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* ACTIVE DETAILED CASE STUDY VIEW */
            <motion.div
              key="reader"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
              id="case_study_detail_reader"
            >
              {/* Back navigation thread */}
              <button
                onClick={() => setSelectedId(null)}
                className="inline-flex items-center space-x-2 border-2 border-black bg-white px-4 py-2.5 font-display text-xs font-black text-black bento-shadow-hover outline-none"
                id="case_study_back_btn"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Studies</span>
              </button>

              {selectedStudy && (
                <div className="space-y-10">
                  
                  {/* HERO BANNER SECTION */}
                  <div className="border-2 border-black bg-yellow-105 p-6 md:p-10 relative overflow-hidden" id="case_study_header_panel">
                    <div className="relative z-10 space-y-6 max-w-4xl">
                      <span className={`border-2 px-3 py-1 font-mono text-xs font-black uppercase tracking-wider ${getThemeColor(selectedStudy.category).bg} ${getThemeColor(selectedStudy.category).border}`}>
                        {getCategoryLabel(selectedStudy.category)}
                      </span>
                      
                      <h1 className="font-display text-3xl font-black tracking-tight text-black md:text-5xl leading-tight">
                        {selectedStudy.title}
                      </h1>

                      {/* Project Meta Info Row */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t-2 border-black font-display text-sm">
                        <div className="space-y-1">
                          <span className="block text-zinc-500 font-mono text-[9px] font-extrabold tracking-widest uppercase">CLIENT</span>
                          <span className="text-black font-extrabold">{selectedStudy.client}</span>
                        </div>
                        <div className="space-y-1">
                          <span className="block text-zinc-500 font-mono text-[9px] font-extrabold tracking-widest uppercase">TIMELINE</span>
                          <span className="text-black font-extrabold">{selectedStudy.timeline}</span>
                        </div>
                        <div className="space-y-1">
                          <span className="block text-zinc-500 font-mono text-[9px] font-extrabold tracking-widest uppercase">ROLE</span>
                          <span className="text-black font-extrabold">{selectedStudy.role}</span>
                        </div>
                        <div className="space-y-1">
                          <span className="block text-zinc-500 font-mono text-[9px] font-extrabold tracking-widest uppercase">SCOPE</span>
                          <span className="text-black font-extrabold">Fully Executed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CHALLENGE AND SOLUTION SPLIT SECTION */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Challenge */}
                    <div className="border-2 border-black bg-pink-50 p-6 md:p-8 bento-shadow space-y-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="border border-black bg-white p-2 text-black">
                          <Target className="h-5 w-5" />
                        </div>
                        <h3 className="font-display font-black text-lg text-black">The Challenge</h3>
                      </div>
                      <p className="text-zinc-800 text-sm leading-relaxed font-semibold">
                        {selectedStudy.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="border-2 border-black bg-emerald-50 p-6 md:p-8 bento-shadow space-y-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="border border-black bg-white p-2 text-black">
                          <Compass className="h-5 w-5" />
                        </div>
                        <h3 className="font-display font-black text-lg text-black">The Solution</h3>
                      </div>
                      <p className="text-zinc-800 text-sm leading-relaxed font-semibold">
                        {selectedStudy.solution}
                      </p>
                    </div>

                  </div>

                  {/* STEP-BY-STEP PRODUCTION PROCESS CHRONOLOGY */}
                  <div className="space-y-8" id="case_study_chronology_box">
                    <div className="max-w-2xl bg-white border-2 border-black p-5 bento-shadow">
                      <h3 className="font-display text-2xl font-black text-black">
                        Tactical Production Timeline 
                      </h3>
                      <p className="mt-1 text-zinc-700 text-sm font-semibold">
                        Behind-the-scenes actions detailing reviews, physical sketches, vectors, interface variables, and quality checklists.
                      </p>
                    </div>

                    <div className="relative border-l-3 border-black ml-4 pl-8 md:pl-10 space-y-12">
                      {selectedStudy.process.map((step, index) => (
                        <div key={index} className="relative">
                          {/* Chronological Counter Ball */}
                          <div className="absolute -left-[46px] md:-left-[50px] top-1 h-7 w-7 flex items-center justify-center rounded-none bg-yellow-300 border-2 border-black font-mono text-xs font-black text-black">
                            {index + 1}
                          </div>

                          <div className="space-y-1 bg-white border-2 border-black p-4 bento-shadow relative">
                            <h4 className="font-display font-black text-lg text-black">
                              {step.title}
                            </h4>
                            <p className="text-zinc-700 text-xs md:text-sm leading-relaxed max-w-4xl font-semibold">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* VISUAL REPORTED RESULTS & METRICS */}
                  <div className="border-2 border-black bg-lime-50 p-6 md:p-8 bento-shadow space-y-6" id="case_study_results_card">
                    <div className="flex items-center space-x-3">
                      <div className="border border-black bg-white p-2">
                        <TrendingUp className="h-5 w-5 text-black" />
                      </div>
                      <h3 className="font-display font-black text-xl text-black">
                        Performance Metrics & Outcomes
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedStudy.results.map((res, i) => (
                        <div 
                          key={i}
                          className="border-2 border-black bg-white p-5 space-y-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                          <span className="block font-display text-3xl font-black text-black md:text-4xl">
                            {res.value}
                          </span>
                          
                          <div className="space-y-1">
                            <span className="block font-mono text-[10px] uppercase font-bold bg-pink-100 text-black border border-black inline-block px-1 py-0.5 leading-none">
                              {res.metric}
                            </span>
                            <span className="block text-xs text-zinc-700 leading-relaxed font-semibold pt-1">
                              {res.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
