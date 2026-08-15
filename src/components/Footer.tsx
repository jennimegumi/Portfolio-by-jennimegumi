import { Github, Linkedin, Figma } from 'lucide-react';
import { DESIGNER_INFO } from '../data';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="mt-20 border-t-3 border-black bg-zinc-100 py-12 md:py-16" id="footer_section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b-2 border-black">
          
          {/* Left Block */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="font-display text-lg font-black text-black">{DESIGNER_INFO.name}</span>
              <span className="border border-black bg-emerald-200 px-2 py-0.5 font-mono text-[9px] uppercase font-black text-black">
                PRO ACTIVE
              </span>
            </div>
            <p className="text-zinc-700 text-xs font-semibold max-w-sm">
              Mutlimedia and Social Media Specialist, passionate about creating engaging experiences that connect, resonate, and inspire. Let's collaborate and bring your ideas to life!
            </p>
          </div>

          {/* Sitemaps */}
          <div className="flex flex-wrap gap-6 text-xs font-mono text-zinc-650 font-bold">
            <button onClick={() => onNavigate('home')} className="hover:text-black hover:underline transition-colors">
              About Profile
            </button>
            <button onClick={() => onNavigate('works')} className="hover:text-black hover:underline transition-colors">
              Works Stack
            </button>
            <button onClick={() => onNavigate('case-studies')} className="hover:text-black hover:underline transition-colors">
              Case Studies
            </button>
            <button onClick={() => onNavigate('blog')} className="hover:text-black hover:underline transition-colors">
              Design Blog
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-black hover:underline transition-colors">
              Contact & Inbox
            </button>
          </div>

        </div>

        {/* Bottom copyright / github meta block */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-zinc-505 font-mono text-[11px] font-bold">
          
          <div className="space-y-1">
            <span>© {new Date().getFullYear()} {DESIGNER_INFO.name}. All rights reserved.</span>
            {/*<span className="block text-[9px] text-zinc-500 uppercase">
              PRODUCED IN CLOUD RUN CONTEXT / GITHUB PAGES PARADIGM
            </span>*/}
          </div>

          {/* Social Platform Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/jennimegumi" 
              target="_blank" 
              rel="noreferrer" 
              className="border-2 border-black bg-white p-2 text-black hover:bg-yellow-300 bento-shadow-hover transition-all"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jennimegumi/" 
              target="_blank" 
              rel="noreferrer" 
              className="border-2 border-black bg-white p-2 text-black hover:bg-yellow-300 bento-shadow-hover transition-all"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="https://figma.com" 
              target="_blank" 
              rel="noreferrer" 
              className="border-2 border-black bg-white p-2 text-black hover:bg-yellow-300 bento-shadow-hover transition-all"
              title="Figma Layouts"
            >
              <Figma className="h-4 w-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
