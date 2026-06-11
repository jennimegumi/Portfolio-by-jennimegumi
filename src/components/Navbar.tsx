/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Briefcase, FileCode2 } from 'lucide-react';
import { DESIGNER_INFO } from '../data';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'works', label: 'Works Gallery' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'blog', label: 'Design Process' },
    { id: 'contact', label: 'Contact & Inbox' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-3 border-black bg-zinc-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Brand Name */}
        <div 
          className="flex cursor-pointer items-center space-x-3 group" 
          onClick={() => { setActiveTab('home'); setIsOpen(false); }}
          id="nav_logo"
        >
          <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-pink-300 bento-shadow-hover p-1">
            <FileCode2 className="h-5 w-5 text-black" />
          </div>
          <div>
            <span className="font-display text-lg font-extrabold tracking-tight text-black">
              {DESIGNER_INFO.name}
            </span>
            <span className="ml-1.5 font-mono text-[10px] font-bold bg-yellow-300 text-black border border-black px-1.5 py-0.5 rounded-none uppercase tracking-widest">
              Design
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1.5" id="desktop_nav">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`tab_btn_${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-4 py-2 font-display text-sm font-extrabold tracking-wide transition-all duration-150 outline-none border-2 ${
                  isActive 
                    ? 'bg-yellow-300 text-black border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                    : 'text-zinc-700 hover:text-black border-transparent hover:bg-zinc-200'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-3" id="desktop_social_links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-black bg-black px-4 py-2 font-display text-xs font-bold text-white transition-all bento-shadow-hover hover:bg-zinc-800"
            id="nav_github_btn"
          >
            <Github className="h-4 w-4" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center border-2 border-black bg-white p-2 text-black hover:bg-zinc-100 outline-none bento-shadow-hover"
            id="mobile_menu_toggle"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-2 border-black bg-zinc-50 px-4 py-4"
            id="mobile_menu_panel"
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile_tab_${item.id}`}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                    }}
                    className={`block w-full border-2 px-4 py-3 text-left font-display text-sm font-extrabold transition-all ${
                      isActive 
                        ? 'bg-yellow-300 text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                        : 'text-zinc-700 border-transparent hover:bg-zinc-200 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            
            <div className="mt-4 border-t-2 border-black pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center space-x-2 border-2 border-black bg-black py-2.5 font-display text-xs font-bold text-white bento-shadow-hover"
                id="mobile_nav_github_btn"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
