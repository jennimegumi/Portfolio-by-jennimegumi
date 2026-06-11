/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorksGallery from './components/WorksGallery';
import CaseStudies from './components/CaseStudies';
import BlogGrid from './components/BlogGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);

  // Automatically scroll back to top of page when active tab shifts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  // Navigate and select specific case studies automatically
  const handleNavigateToCaseStudy = (caseStudyId: string) => {
    setSelectedCaseStudyId(caseStudyId);
    setActiveTab('case-studies');
  };

  const handleTabChange = (tabId: string) => {
    // If the user manually navigates to the general case-studies list, reset active study id
    if (tabId === 'case-studies') {
      setSelectedCaseStudyId(null);
    }
    setActiveTab(tabId);
  };

  // Select which view component to render
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero onNavigate={handleTabChange} />;
      case 'works':
        return <WorksGallery onNavigateToCaseStudy={handleNavigateToCaseStudy} />;
      case 'case-studies':
        return (
          <CaseStudies 
            selectedId={selectedCaseStudyId} 
            setSelectedId={setSelectedCaseStudyId} 
          />
        );
      case 'blog':
        return <BlogGrid />;
      case 'contact':
        return <ContactForm />;
      default:
        return <Hero onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-zinc-100 text-zinc-900 flex flex-col justify-between" id="app_root_layout">
      
      {/* Visual Ambient Background Noise & Gradients overlay */}
      <div className="pointer-events-none absolute inset-0 bento-grid-dashed-bg opacity-70" />

      {/* Primary Headers */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Primary Immersive Content Body with Spring Micro-Animations */}
      <main className="relative z-10 flex-grow" id="main_content_wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ type: 'spring', stiffness: 220, damping: 25 }}
            className="w-full"
            id={`view_container_${activeTab}`}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Primary Footers */}
      <Footer onNavigate={handleTabChange} />
    </div>
  );
}
